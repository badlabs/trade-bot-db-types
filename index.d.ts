/**
 * Model Currency
 * 
 */
export type Currency = {
  name: string
  ticker: string
}

/**
 * Model Security
 * 
 */
export type Security = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model FollowedSecurity
 * 
 */
export type FollowedSecurity = {
  security_ticker: string
  followed_since: Date
}

/**
 * Model PortfolioPosition
 * 
 */
export type PortfolioPosition = {
  security_ticker: string
  amount: number
}

/**
 * Model Order
 * 
 */
export type Order = {
  exchange_id: string | null
  security_ticker: string
  status_first: string
  operation_type: string
  amount: number
  price: number
  run_id: number | null
  created_at: Date
}

/**
 * Model Operation
 * 
 */
export type Operation = {
  exchange_id: string | null
  security_ticker: string | null
  status: string
  operation_type: string
  amount: number | null
  amount_requested: number | null
  price: number
  updated_at: Date
  created_at: Date
}

/**
 * Model Algorithm
 * 
 */
export type Algorithm = {
  name: string
  description: string
  input_types: string
}

/**
 * Model AlgorithmRun
 * 
 */
export type AlgorithmRun = {
  id: number
  algorithm_name: string
  inputs: string
  status: string
  state: string
  updated_at: Date
  created_at: Date
}




/**
 * Model Currency
 * 
 */
export interface ICurrency = {
  name: string
  ticker: string
}

/**
 * Model Security
 * 
 */
export interface ISecurity = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model FollowedSecurity
 * 
 */
export interface IFollowedSecurity = {
  security_ticker: string
  followed_since: Date
}

/**
 * Model PortfolioPosition
 * 
 */
export interface IPortfolioPosition = {
  security_ticker: string
  amount: number
}

/**
 * Model Order
 * 
 */
export interface IOrder = {
  exchange_id: string | null
  security_ticker: string
  status_first: string
  operation_type: string
  amount: number
  price: number
  run_id: number | null
  created_at: Date
}

/**
 * Model Operation
 * 
 */
export interface IOperation = {
  exchange_id: string | null
  security_ticker: string | null
  status: string
  operation_type: string
  amount: number | null
  amount_requested: number | null
  price: number
  updated_at: Date
  created_at: Date
}

/**
 * Model Algorithm
 * 
 */
export interface IAlgorithm = {
  name: string
  description: string
  input_types: string
}

/**
 * Model AlgorithmRun
 * 
 */
export interface IAlgorithmRun = {
  id: number
  algorithm_name: string
  inputs: string
  status: string
  state: string
  updated_at: Date
  created_at: Date
}



