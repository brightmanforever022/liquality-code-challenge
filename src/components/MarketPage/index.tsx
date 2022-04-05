import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../Shared/Header";
import MarketTable from "./MarketTable";
import "./MarketPage.scss";

const MarketPage: React.FC = () => {
  const [period, setPeriod] = useState(5);
  const changeInterval = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(Number(event.target.value));
  }
  return (
    <>
      <Header />
      <div className="interval-container">
        <Form.Label>Select period</Form.Label>
        <Form.Select onChange={changeInterval} value={period}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </Form.Select>
      </div>
      <MarketTable period={period} />
    </>
  );
};

export default MarketPage;