/**
 * Model D_Currency
 * 
 */
export type D_Currency = {
  name: string
  ticker: string
}

/**
 * Model D_Security
 * 
 */
export type D_Security = {
  name: string
  ticker: string
  price: number
  currency_ticker: string
}

/**
 * Model D_FollowedSecurity
 * 
 */
export type D_FollowedSecurity = {
  security_ticker: string
  followed_since: Date
}

/**
 * Model D_PortfolioPosition
 * 
 */
export type D_PortfolioPosition = {
  security_ticker: string
  amount: number
}

/**
 * Model D_Operation
 * 
 */
export type D_Operation = {
  exchange_id: string | null
  security_ticker: string
  status: string
  operation_type: string
  amount: number
  price: number
  updated_at: Date
  created_at: Date
}


