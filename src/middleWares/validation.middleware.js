export default function validationMiddleware(req,res,next ) {
  // console.log(req.body)
    const {name,price,imageurl}=req.body;
    const error=[];
    if(!name || name.trim()==''){
      error.push("Please enter the name");
    }
    if(!price || parseFloat(price)<0){
      error.push("Please enter valid Price ")
    }
    // try {
    //   const url = new URL(imageurl);
    // } catch (err) {
    //   error.push("Please enter a valid Url ")
    // }
    if(!error.length>0){
        next();
      }else{
        return res.render('new-product',{errorMessage:error})
      }
};
