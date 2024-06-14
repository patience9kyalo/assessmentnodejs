import { Request, Response } from 'express'
import { v4 as uid } from "uuid"
import mssql from 'mssql'
import { Product, ProductRequest } from '../Models/productModels'
import { sqlConfig } from '../config'





export const addProduct = async(req:ProductRequest, res: Response)=> {
    try {

        const id = uid()
        const { prodname, proddescription, prodprice} = req.body

        let pool = await mssql.connect(sqlConfig)

        pool.request()
            .input("id", id)
            .input('prodname', prodname)
            .input('proddescription', proddescription)
            .input('prodprice', prodprice)
            .execute('addProduct')

        return res.status(201).json({ message: "Product added successfully" })

    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function getProduct(req: Request, res: Response) {
    try {
        let pool = await mssql.connect(sqlConfig)

        const products = (await pool.request().execute('getProduct')).recordset as Product[]
        return res.status(200).json(products)


    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function searchProduct(req: Request<{ prodname: string }>, res: Response) {
    try {
        let pool = await mssql.connect(sqlConfig)

        const { prodname, proddescription, prodprice} = req.body

        const product = (await pool.request()
            .input('prodname', req.params.prodname)
            .execute('searchProduct')).recordset[0] as Product

        if (product && product.prodname) {
            return res.status(200).json(product)
        }


    } catch (error) {
        return res.status(500).json(error)
    }
}