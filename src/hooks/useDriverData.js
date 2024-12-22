import { useEffect, useState } from "react";
import { getDrivers } from "../api/driverApi";

export const useDriverData = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const drivers = await getDrivers();
        setDrivers(drivers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDriver();
  }, []);

  return { drivers, setDrivers };
};
