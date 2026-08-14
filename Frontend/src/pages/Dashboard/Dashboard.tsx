import React, { useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../services/user";
import { saveData } from "../../hook/redux/actions";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userData) {
          const response = await getUserData();
          const userDataFromApi = response.data.data;
          dispatch(saveData("userData", userDataFromApi)); 
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch, userData]); 

  return <DefaultLayout></DefaultLayout>;
};

export default Dashboard;
