
const mongoose = require("mongoose")
const UserModel = require("../models/user")
const Apiproducts=require("../models/backupapi")
const Approvalproducts=require("../models/approvalapi")
const Vendorproducts=require("../models/vendorapi")
const fs = require("fs");
exports.checkuser=(req,res)=>{
  let username =req.body.username;
  let password = req.body.password;
    let role=req.body.role;
  let body = {
      username,
      password,role
  }
  const user = UserModel.findOne({username: req.body.username});
  const pass=UserModel.findOne({password: req.body.password});
   if(user && pass && (role=="admin")){
      res.redirect("http://localhost:3001/adminpage")
   }
   if(user && pass && (role=="vendor")){
    res.redirect("http://localhost:3001/vendorpage")
 }
 if(user && pass && (role=="customer")){
  res.redirect("http://localhost:3001/customerpage")
}
}
exports.postsignup= (req, res) => {
  
  


  let username =req.body.username;
  let password = req.body.password;
  let role=req.body.role;
  let body = {
      username,
      password,
      role
  }

  const userobj = new UserModel(req.body);

  userobj.save()
    .then(result => {
      console.log("new user data")
     console.log(result)
     
    })
    .catch(err => {
      console.log(err);
    });
    res.status(200).sendFile('confirm.txt' , { root : __dirname});
}

exports.productsfromdata=(req,res)=>{

    
Apiproducts.find().then(
    (result)=>{
        res.send(result)
       
    }
  
)

}
exports.vendorproductsfromdata=(req,res)=>{

    
  Vendorproducts.find().then(
      (result)=>{
          res.send(result)
         
      }
    
  )
    }
    // approvalproductsfromdata
    exports.approvalproductsfromdata=(req,res)=>{

    
     Approvalproducts.find().then(
          (result)=>{
              res.send(result)
             
          }
        
      )
        }
exports.deleteproductsfromdata=(req,res)=>{

  const deleteid=req.query.id;

      Apiproducts.deleteOne({_id:deleteid}).then(
        ()=>console.log("product deleted")
      ).catch(
        (err)=>console.log(err)
      )
    
  
  }

  // approveproduct
  exports.addproduct=(req,res)=>{
    let p_name =req.body.p_name;
  let p_price = req.body.p_price;

  let body = {
     p_name,p_price
  }

  const userobj = new Approvalproducts(body);

  userobj.save()
    .then(result => {
      console.log("new product data")
     console.log(result)
     
    })
    .catch(err => {
      console.log(err);
    });
 res.redirect("http://localhost:3001/adminpage")
  }
  exports.approveproduct=(req,res)=>{
       
    const deleteid=req.query.id;
  Approvalproducts.findOne({_id:deleteid}).then(
    (res)=>{
      console.log(res)
      const userobj = new Apiproducts({p_name:res.p_name,p_price:res.p_price});
      userobj.save()
      .then(result => {
        console.log("new user data")
       console.log(result)
       
      })
      .catch(err => {
        console.log(err);
      });
    }
  )
       Approvalproducts.deleteOne({_id:deleteid}).then(
          ()=>console.log("product deleted")
        ).catch(
          (err)=>console.log(err)
        )
      
    
    }
    exports.addvendorproduct=(req,res)=>{
      const deleteid=req.query.id;
  Apiproducts.findOne({_id:deleteid}).then(
    (res)=>{
      console.log(res)
      const userobj = new Vendorproducts({p_name:res.p_name,p_price:res.p_price});
      userobj.save()
      .then(result => {
        console.log("new user data")
       console.log(result)
       
      })
      .catch(err => {
        console.log(err);
      });
    }
  )
  
    }
//   exports.postapidata=(req,res)=>{
//     console.log("body");
//     console.log(req.body);
//  const apiobj=new ApiModel(req.body);
// const checkifcity=ApiModel.findOne({city:req.body.city});


// ApiModel.find({ city:req.body.city })
// .then((res)=> {
//     console.log("find one worked");
//  if(res.length==0){
//     apiobj.save()
//  .then(result => {
//    console.log("api data added")
//   console.log(result)
  
//  })
//  .catch(err => {
//    console.log(err);
//  })
//  }
//   else{
//         console.log("city already here")
//         ApiModel.updateOne({city:req.body.city},{weather:req.body.weather,temperature:req.body.temperature}).then(
//             (result)=>{
//                 console.log("updated :)")
//             }
//         );
//   }
// })
// .catch(function (err) {
//   console.log(err);
// });



//   }

// exports.weatherfromdata=(req,res)=>{
//     const cityfind=req.query.city;
    
// ApiModel.findOne({ city:req.query.city }).then(
//     (result)=>{
//         res.send(result)
//         console.log(result);
//     }
  
// )
// }