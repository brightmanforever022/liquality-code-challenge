export interface IMarket {
  from: string,
  to: string,
  rate: number,
  status: string,
  max: number,
  min: number,
  minConf: number,
  updatedAt: string,
  createdAt: string,
}

export interface IMarketInfo {
  data: IMarket[],
  status: number,
}