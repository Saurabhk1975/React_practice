import { useState, useEffect } from "react";
import { SWIGGY_MENU_API_URL } from "../utils/constants";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurant;
