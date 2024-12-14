const users=[];

export default class UserModel {
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
  static  addUser( body){
const {name,email,password}=body;
const newUser =new UserModel(users.length+1,name,email,password);

        users.push(newUser);
        // console.log(users);
    }
    static isUserExist(body){
        const {email,password}=body;
       const result= users.find((user)=>{
            if(email==user.email && password== user.password){
                return user;
            }
        })
       return result;
    }
    static getUserDetails(email){
        const result= users.find((user)=>{
            if(email==user.email){
                return user;
            }
        })
       return result;
    }
    
    
};

