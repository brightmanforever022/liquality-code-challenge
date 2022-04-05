import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IMarket, IMarketInfo } from "../components/propTypes";
import { MARKET_API_URL } from "../config";


export const useGetMarkets = (period: number) => {
  const refetchInterval = period * 1000;
  const [markets, setMarkets] = useState<IMarket[]>([]);
  
  const { data } = useQuery(
    [`useGetMarkets`],
    async () => {
      const marketResult: IMarketInfo = await axios.get(MARKET_API_URL);
      return marketResult;
    },
    { refetchInterval }
  );

  useEffect(() => {
    if (data) {
      setMarkets(data.data);
    }
  }, [data]);

  return markets;
};
