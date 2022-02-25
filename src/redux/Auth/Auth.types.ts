export interface SignInDTO {
  email: string
  password: string
}

export interface SignInResponse {
  token: string
  userId: number
  name: string
  phone: string
}

export interface SignUpDTO {
  name: string
  phone: string
  email: string
  password: string
}

export interface SignUpResponse {}
