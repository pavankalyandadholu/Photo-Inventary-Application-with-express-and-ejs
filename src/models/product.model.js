export default class ProductModel {
    constructor(id,name,desc,price,imageurl){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.imageurl=imageurl;
    }
static add(name,desc,price,imageurl){
    let newProduct=new ProductModel(products.length+1,name,desc,price,imageurl);
    
    products.push(newProduct);
    return products;
}
static updateProduct(product){
    const id = products.findIndex((item)=>{
        if(item.id==product.id){
            return item.id;
        }
    })
    products[id]=product;
}
static deleteProduct(id){
    // console.log(id);
    const index= products.findIndex(product=>product.id==id)
    // console.log(index);
    if(index>=0){

        products.splice(index,1);
    }
    // console.log(products)
}

    static get(){
        // console.log(products)
        return products;
    }
    static getById(id){
     return   products.find(product=>{
            if(product.id==id){
                return product;
            }
        })
    }
};
const products=[
    new ProductModel(1,'Product 1','Description for Product 1',19.99,"https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"),
    new ProductModel(2,'Product 2','Description for Product 2',29.99,"https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg" ),
    new ProductModel(3,'Product 3','Description for Product 3',39.99,"https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg" ),
]
