import React from "react";
import { useQuery } from "react-query";
const useReactQueryHook = (apiFunction: any, key: string) => {
  const { isLoading, error, data } = useQuery(key, apiFunction);

  if (isLoading) return "Loading...";

    // @ts-ignore
  if (error) return "An error has occurred: " + error["message"];
  return data;
};

export default useReactQueryHook;
