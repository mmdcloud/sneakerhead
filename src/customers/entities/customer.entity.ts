import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Customer extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    fullname: string;

    @Column
    contact: string;

    @Column
    email: string;
}