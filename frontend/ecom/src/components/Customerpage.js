import "./adminstyle.css";
import axios from "axios";
import { useEffect, useState } from "react";
function CustomerPage() {
    const [productlist,setProductlist]=useState([]);
    const [approvaltlist,setApprovallist]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/allproducts").then(
            (res=>{
             setProductlist(res.data)
             console.log(res.data)
            })
         )
      }, []);
      useEffect(() => {
        axios.get("http://localhost:3000/vendorproducts").then(
            (res=>{
                setApprovallist(res.data)
             console.log(res.data)
            })
         )
      }, []);
      useEffect(()=>{},productlist)
      const handledraft=()=>{
  
      }
  return (
    <div className="pages">
      <div className="first">
        <h2>All Products</h2>
        <div className="lists">
       
        {productlist.map((n) => {
        return(<Products name={n.p_name} price={n.p_price} _id={n._id}></Products>)
      })}
           
          
         
        </div>
      </div>
      <div className="second">
        <h2>Cart list</h2>
       
        <div className="lists">
        {approvaltlist.map((n) => {
        return(<Products2 name={n.p_name} price={n.p_price} _id={n._id}></Products2>)
      })}
        </div>
      </div>
    </div>
  );
}

function Products({name,price,_id}) {
   
  const oncart=()=>{
    axios.post(`http://localhost:3000/addvendorproduct?id=${_id}`).then(
        (res=>{
        
         console.log(res.data)
        })
     )
  }
  return (
    <div className="products">
      <p>{name}</p>
      <p>{price}</p>
      {/* <button  > add</button> */}
      <button onClick={oncart}>add to cart</button>
    </div>
  );
}

function Products2({name,price,_id}) {
   const onApprove=()=>{
    axios.get(`http://localhost:3000/approve?id=${_id}`).then(
      (res=>{
      
       console.log(res.data)
      })
   )
   }
  const onDelete=()=>{
    axios.get(`http://localhost:3000/deleteproduct?id=${_id}`).then(
        (res=>{
        
         console.log(res.data)
        })
     )
  }
  return (
    <div className="products">
      <p>{name}</p>
      <p>{price}</p>
   <button onClick={onApprove}>buy now</button>
    
    </div>
  );
}
// function Approvedlist({name,price}) {
  
//     return (
//       <div className="products">
//         <p>{name}</p>
//         <p>{price}</p>
     
//         <button>delete</button>
//       </div>
//     );
//   }

export default  CustomerPage;