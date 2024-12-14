import multer from 'multer';
import path from 'path'

const storage= multer.diskStorage({destination(req,file,cb){
    cb(null,path.join('public'));
},
filename(req, file,cb){
    const fileName=Date.now()+'-'+file.originalname;
    cb(null,fileName);
}
})
export const  upload = multer({ storage: storage })
