const {Router} = require("express")
const {ProductController} = require('./products.controller')


const routers = () => {
  const router = new Router();
  const controller = new ProductController();
  // router.get('/', ProductsController.);
  router.post('/', controller.createProductController);
/*   router.get('/', controller.findAll);
  router.get('/:id', controller.find); */
return router
}

module.exports.productRoutes = routers;