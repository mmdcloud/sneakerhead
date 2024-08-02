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
    address: string;
}