import Products from "../models/Products.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        if (products.length === 0) {
            return res.status(204).json({ message: "No products input" })
        }
        res.status(200).json(products)
    } catch (error) {
        req.status(500).json({
            status: "Failed",
            message: "Get all products has failed"
        })
    }
}

export const getDetailProduct = async (req, res) => {

}

export const createProducts = async (req, res) => {

}

export const editProduct = async (req, res) => {

}

export const deleteProducts = async (req, res) => {

}