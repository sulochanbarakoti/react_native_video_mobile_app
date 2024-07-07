import { useEffect, useState } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refatch = () => {
    fetchData();
  };
  console.log(data);
  return { data, isLoading, refatch };
};

export default useAppwrite;
