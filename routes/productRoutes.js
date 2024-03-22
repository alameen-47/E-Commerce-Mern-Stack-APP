import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";
import {
  braintreePaymentsController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  electronicsController,
  furnituresController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productImageController,
  productListController,
  relatedProductsController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
// import braintree from "braintree";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get image
router.get("/product-image/:pid", productImageController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//product filter
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//related product
router.get("/related-product/:pid/:cid", relatedProductsController);

//category wise product list
router.get("/product-category/:slug", productCategoryController);

//Furnitures products
router.get("/furnitures", furnituresController);

//Electronics products
router.get("/electronics", electronicsController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentsController);

export default router;
