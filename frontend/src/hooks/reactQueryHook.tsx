import React from "react";
import { useQuery } from "react-query";
const useReactQueryHook = (apiFunction: any, key: string) => {
  const { isLoading, error, data } = useQuery(
    [key],
    apiFunction,
    {
      refetchInterval: 5000,
    }
  );
  return {isLoading, data, error};
};

export default useReactQueryHook;
