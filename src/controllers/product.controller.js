import path from 'path';
import ProductModel from '../models/product.model.js';
export default class ProductController {
    getProducts(req,res){
      let products = ProductModel.get();
      // console.log(products)
        // console.log(path.resolve());
      // return  res.sendFile(path.join(path.resolve(),"src",'views',"products.html"))
   return   res.render('products',{products:products, userEmail:req.session.userEmail});
    }

    addNewProduct(req,res){
      
const {name,desc, price}=req.body;
// const image=req.file.filename;
// const image=path.join('public','images',req.file.filename)
const image= req.file.filename
// console.log(image)
// const imageurl=path.join('images',image) ;
        
        // let products = ProductModel.get();
        let products = ProductModel.add(name,desc,price,image);
        // console.log(products)
        return res.render('products',{products:products,userEmail:req.session.userEmail})
    }
    updateProduct(req,res){
      const id=parseInt(req.params.ide);
    let product;
    if(id){
     product=  ProductModel.getById(id);
    }
    if(product){
      
      return res.render('update-product',{product:product, errorMessage:null,userEmail:req.session.userEmail})
    }else{
      return res.send("Product not Found");
    }
    }
    updateProductPost(req,res){
      ProductModel.updateProduct(req.body);
      let products = ProductModel.get();
        return res.render('products',{products:products,userEmail:req.session.userEmail})
      // res.end("Nothing")
    }
    deleteProduct(req,res){

      ProductModel.deleteProduct(req.params.id)
      let products = ProductModel.get();
      return res.render('products',{products:products,userEmail:req.session.userEmail})
    }
    getAddForm(req,res){
    return res.render('new-product',{errorMessage:null,userEmail:req.session.userEmail} )
      }

    
};
