import { useCallback, useEffect, useState } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trigger, setTrigger] = useState(0);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    const result = await fetchFunction();
    setData(result);

    setIsLoading(false);
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData, trigger]);

  const refetch = () => setTrigger((prev) => prev + 1);
  const toggleLoading = () => setIsLoading(!isLoading);

  return { data, isLoading, refetch, toggleLoading };
};

export default useFetch;
