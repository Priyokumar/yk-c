
export class API {

    public static BASE_URL = 'http://localhost:8080';
    public static CATEGORY_URL = API.BASE_URL + '/v1/api/categories';
    public static PRODUCT_URL = API.BASE_URL + '/v1/api/products';
    public static PRODUCT_OFFER_URL = API.BASE_URL + '/v1/api/productOffers';
    public static PAYMENT_OPTION_URL = API.BASE_URL + '/v1/api/paymentOptions';

    public static REGISTRATION = API.BASE_URL + '/v1/api/users';
    public static VERIFY_OTP = API.BASE_URL + '/v1/api/auth/verify-otp';
    public static LOGIN = API.BASE_URL + '/v1/api/auth/login';

    public static USERS = API.BASE_URL + '/v1/api/users';
    public static ADDRESSES = API.BASE_URL + '/v1/api/addresses';

}