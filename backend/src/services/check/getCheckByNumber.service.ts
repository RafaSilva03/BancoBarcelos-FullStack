import { ICheck, IResponse } from "../../interface";
import { CustomError } from "../../errors"
import { checks } from "../../models/checks";
import { check_type } from "../../models/check_type";

export const getCheckByNumber = async (check_number: string): Promise<IResponse<ICheck.ResponseCheck | void>> => {
    try {
        // Verificar se o check_number foi fornecido
        const existingCheck = await checks.findOne({ where: {  check_number: check_number } });
        if (!check_number) {
            return {
                code: 400,
                status: "error",
                details: "The 'check_number' field is required.",
            };
        }
            const checkData = await checks.findOne({
            where: { check_number: check_number },
            include: [
                { model: check_type, as: "check_type", attributes: ["id", "type"] },
            ],
        });

        if (checkData) {
            let obj = {
                id: checkData.id,
                check_number: checkData.check_number,
                value: checkData.value,
                emission_date: checkData.emission_date,
                account_number: checkData.account_number,
                check_type_id: checkData.check_type_id,
                accountType: { ...checkData.check_type.dataValues },
            };
            return { code: 200, status: "success", description: "Check data retrieved", data: obj };
        }
        return { code: 404, status: "error", description: "Check data not found" };
    } catch (error: any) {
        throw new CustomError("GET_CHECK_BY_ID", `Failed to get the check: ${error.message}`);
    }
};



      