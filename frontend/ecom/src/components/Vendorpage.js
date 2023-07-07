import "./adminstyle.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Vendorpage() {
    const [productlist,setProductlist]=useState([]);
    const [approvaltlist,setApprovallist]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/vendorproducts").then(
            (res=>{
             setProductlist(res.data)
             console.log(res.data)
            })
         )
      }, []);
      useEffect(() => {
        axios.get("http://localhost:3000/approvalproducts").then(
            (res=>{
                setApprovallist(res.data)
             console.log(res.data)
            })
         )
      }, []);
      const handledraft=()=>{
        
      }
  return (
  
    <div className="pages">
      <div className="first">
        <h2>Inventory</h2>
        <div className="lists">
       
        {productlist.map((n) => {
        return(<Products name={n.p_name} price={n.p_price} _id={n._id}></Products>)
      })}
           
          
         
        </div>
      </div>
      <div className="second">
        <h2>drafts</h2>
        <div style={{display:"flex",flexDirection:"column"}}>
          <input style={{width:"150px",height:"60px"}} name="pname" type="text" placeholder="product name"></input>

          <input style={{width:"150px",height:"60px"}} name="pprice" type="number" placeholder="product price"></input>
          <input onClick={{handledraft}} style={{width:"150px"}} type="submit"></input>
          </div>
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
      <button  > add</button>
    
    </div>
  );
}

function Products2({name,price,_id}) {
   
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
     <button></button>
      
      </div>
    );
  }
export default Vendorpage;