import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import validationMiddleware from "./src/middleWares/validation.middleware.js";
import { upload } from "./src/middleWares/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import { ServerResponse } from "http";
import session from "express-session";
import { auth } from "./src/middleWares/auth.middleware.js";



// import multer from 'multer';

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(expressEjsLayouts);
server.use(session({secret:"secreatKey",resave:false,saveUninitialized:false,cookie:{secure:false}}))

server.set("view engine", "ejs");

server.set("views", path.join(path.resolve(), "src", "views"));
server.use(express.static("public"));
// Create instace of product controler
const productController = new ProductController();
const userController = new UserController();

server.get("/",auth, productController.getProducts);
server.get("/new",auth, productController.getAddForm);
server.get("/update-product/:ide",auth, productController.updateProduct);
server.post("/update-product/",auth, productController.updateProductPost);
server.post(
  "/",auth,
  upload.single("imageurl"),
  validationMiddleware,
  productController.addNewProduct
);
server.post("/delete-product/:id",auth, productController.deleteProduct);
// Registration
server.get("/register", userController.userRegistration);
server.post("/register", userController.userPostRegistrationRequest);
// Login
server.get("/login", userController.userLogin);
server.post("/login", userController.userPostLoginRequest);
// Logout
server.get('/logout',userController.logout)
//Server listen
server.listen(3000, () => {
  console.log("Listening on 3000");
});
