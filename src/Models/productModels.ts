import {Request} from "express"

export interface Product{
    id: string,
    prodname: string,
    proddescription: string,
    prodprice: number

}

export interface addProduct{
    prodname: string,
    proddescription: string,
    prodprice: number
    
}


export interface ProductRequest extends Request {
    body:addProduct
}

