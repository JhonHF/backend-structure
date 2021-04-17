const { ProductSchema } = require("./products.model")

class ProductServices {
    model;
    constructor(conection) {
        this.init(conection)
    }
    init = async (connectToDatabase) => {
        try {
            const conection = await connectToDatabase();
            this.model = conection.model("products", ProductSchema)
        } catch (error) {
            console.log(error)
        }
    }

    createProductService = async ({name}) => {
        try {
            const product = new this.model({ name })
            const result = await product.save()
            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

module.exports.ProductServices = ProductServices;

