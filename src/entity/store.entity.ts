import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Store extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    address: string;

    @Column
    latitude: string;

    @Column
    longitude: string;

    @Column
    close_time: string;

    @Column
    open_time: string;

    @Column
    country: string;

    @Column
    state: string;

    @Column
    city: string;

    @Column
    shop_image: string;
}