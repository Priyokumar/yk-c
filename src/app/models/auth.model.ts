export interface IRegitration {
    name: string,
    mobileNo: string,
    email: string
}

export interface IVerifyOTP {
    mobileNo: string,
    otp: string
}