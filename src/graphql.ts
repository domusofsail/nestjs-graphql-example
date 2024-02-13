
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Person {
    name?: Nullable<string>;
    surname?: Nullable<string>;
}

export abstract class IQuery {
    abstract persons(search: string): person[] | Promise<person[]>;
}

type Nullable<T> = T | null;
