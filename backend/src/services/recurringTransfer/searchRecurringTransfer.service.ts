import { recurring_transfer } from "../../models/recurring_transfer";
import { period_type } from "../../models/period_type";
import { RecurringTransfer, IResponse  } from "../../interface/";
import {CustomError} from "../../errors/";
import moment from 'moment';
import { DATE } from "sequelize";
import { Op } from 'sequelize';


export const searchRecurringTransfer = async (): Promise<IResponse<RecurringTransfer.ResponseRecurringTransfer | void>> => {   
  
    try {
      const transfers = await recurring_transfer.findAll({
          include: [{
              model: period_type,
              as: 'period_type',
              required: true
          }],
      });


      const result = await checkDueTransfers(transfers);

      return {
        status: "success",
        code: 201,
        description: "Recurring transfer to make",
        data: result,
      };
    }
      catch (error: any) {
      throw new CustomError("GET_RECURRING_TRANSFER_FAILED", `Failed to get recurring transfer: ${error.message}`);
    }
  };      


  function getIntervalDays(type: string, currentDate: Date): number {
    switch (type.toLowerCase()) {
        case 'daily':
            return 1;
        case 'weekly':
            return 7;
        case 'monthly':
            
            return moment(currentDate).daysInMonth();
        case 'yearly':
            
            return moment(currentDate).isLeapYear() ? 366 : 365;
        default:
            console.warn("Invalid period type provided: ", type);
            return 0; 
    }
  }

  export const payloadData = async (transfer : any) => {

    const data = {
      id: transfer.id,
      source_account_id: transfer.source_account_id,
      destination_account_id: transfer.destination_account_id,
      ammount: transfer.ammount,
      description: transfer.description,
      tax_fee: transfer.tax_fee,
    };

    return data;
  }

  export const checkDueTransfers = async (transfers: any) => {

    let countCheckedTransfers = 0; 
    const dueTransfers = [];
    const todayDate = moment().format('YYYY-MM-DD');

    for (const transfer of transfers) {
        let nextDueDate = new Date(transfer.start_date);
        const endDate = new Date(transfer.end_date);
        const today = new Date();
    
        while (nextDueDate <= today && countCheckedTransfers < transfers.length) {
            if (moment(nextDueDate).format('YYYY-MM-DD') === todayDate) {
                const data = await payloadData(transfer);
                dueTransfers.push(data);
                countCheckedTransfers++ ;
                break;
            }
    
            const intervalDays = getIntervalDays(transfer.period_type.type, nextDueDate);
            if (intervalDays === 0) {
                console.error("Invalid interval days. Period type may be incorrectly defined.");
                break;  
            }
            /*
            else
            {
              throw new CustomError("GET_INTERVAL_DAYS_FAILED", `Failed to get interval days: `);
            }
            */
            //console.log("Next due date before increment:", nextDueDate);
            nextDueDate = moment(nextDueDate).add(intervalDays, 'days').toDate();
            //console.log("Next due date after increment:", nextDueDate);
        }
    
        countCheckedTransfers++;
        if (countCheckedTransfers === transfers.length || countCheckedTransfers > transfers.length) {
            break;
        }
    }
   
    return dueTransfers.length > 0
        ? { data: dueTransfers }
        : { message: "No due transfers found for today" };

  };