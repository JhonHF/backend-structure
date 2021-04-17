const {MessageUtil} = require("../../helpers/message")
const { ProductServices } = require("./products.services")
const { connectDb } = require("../../db-connection")

class ProductController extends ProductServices {
    constructor() {
        super(connectDb)
    }

    createProductController = async (req, res) => {
        const {body} = req
        const { name } = body
        try {
            const product = await this.createProductService({name})
            res.json(MessageUtil.success(product))
        } catch (error) {
            console.log(error)
            res.json(MessageUtil.error(error.code || 404, error.message || error))
            
        }
    }
}

module.exports.ProductController = ProductController;