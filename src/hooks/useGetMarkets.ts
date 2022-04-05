import axios from "axios";
import { useQuery } from "react-query";
import { IMarketInfo } from "../components/propTypes";
import { MARKET_API_URL } from "../config";

const refetchInterval = 15 * 1000;

export const useGetMarkets = () => {
  const { data } = useQuery(
    [`useGetMarkets`],
    async () => {
      const marketResult: IMarketInfo = await axios.get(MARKET_API_URL);
      return marketResult;
    },
    { refetchInterval }
  );
  return data ? data.data : [];
};
