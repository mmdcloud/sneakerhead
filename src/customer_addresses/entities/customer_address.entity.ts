import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class CustomerAddress extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    addressType: string;

    @Column
    customer: number;

    @Column
    mobile_no: string;

    @Column
    address: string;

    @Column
    country: string;

    @Column
    state: string;

    @Column
    city: string;

    @Column
    pincode: string;

    @Column
    is_default: boolean;
}