import { Table, Column, Model, PrimaryKey, AutoIncrement, Default } from 'sequelize-typescript';

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
    gender_of_customer: string;

    @Column
    dob: string;

    @Column
    email: string;

    @Column
    password: string;

    @Default("")
    @Column
    fcm_token: string;

    @Default(false)
    @Column
    is_signedin_with_google: boolean;
}