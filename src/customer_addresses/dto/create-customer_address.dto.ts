export class CreateCustomerAddressDto {
    addressType: string;
    address: string;
    customer: number;
    country: string;
    state: string;
    city: string;
    pincode: string;
    mobile_no: string;
    is_default: boolean
}
