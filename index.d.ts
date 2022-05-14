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
 * Model Operation
 * 
 */
export type Operation = {
  exchange_id: string | null
  security_ticker: string
  status: string
  operation_type: string
  amount: number
  price: number
  updated_at: Date
  created_at: Date
}


