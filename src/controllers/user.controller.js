import ProductModel from "../models/product.model.js";
import UserModel from "../models/user.model.js";


export default class UserController {
  userRegistration(req, res) {
    res.render("userRegistration",{errorMessage:null});
  }
  userPostRegistrationRequest(req, res) {
    // console.log(req.body);
    UserModel.addUser(req.body);
    res.render("userRegistration",{errorMessage:"Registration Succesfull"});

  }
  userLogin(req, res) {
    res.render("userLogin",{errorMessage:null});
  }
  userPostLoginRequest(req,res){
   const user= UserModel.isUserExist(req.body);
   if(user){
    req.session.userEmail=user.email;
    // console.log(req.session)
    let products = ProductModel.get();
     
 return   res.render('products',{products:products,userEmail:req.session.userEmail});
  // return  res.render('userProfile',{user})
   }
   res.render("userLogin",{errorMessage:" User Does Not Exist! "});

   
  }
  logout(req,res){
    req.session.destroy((err)=>{
      if(err){
        console.log(err);
      }else{
        res.redirect('/login')
      }
    })
  }
}
