import React from "react";
import { Table } from "react-bootstrap";
import { useGetMarkets } from "../../hooks/useGetMarkets";
import { IMarket } from "../propTypes";

export interface MarketTableProps {
  period: number
}
const MarketTable: React.FC<MarketTableProps> = (props: MarketTableProps) => {
  const { period } = props;
  const markets: IMarket[] = useGetMarkets(period);

  return (
    <Table className="market-table" striped bordered hover>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Rate</th>
          <th>Status</th>
          <th>Max</th>
          <th>Min</th>
          <th>MinConf</th>
          <th>UpdatedAt</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        {markets.length > 0 && markets?.map((market: IMarket, index: number) => (
          <tr key={index}>
            <td>{market.from}</td>
            <td>{market.to}</td>
            <td>{market.rate}</td>
            <td>{market.status}</td>
            <td>{market.max}</td>
            <td>{market.min}</td>
            <td>{market.minConf}</td>
            <td>{market.updatedAt}</td>
            <td>{market.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MarketTable;