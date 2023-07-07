import "./adminstyle.css";
import axios from "axios";
import { useEffect, useState } from "react";
function Page() {
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
        axios.get("http://localhost:3000/approvalproducts").then(
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
        <h2>Inventory</h2>
        <div className="lists">
       
        {productlist.map((n) => {
        return(<Products name={n.p_name} price={n.p_price} _id={n._id}></Products>)
      })}
           
          
         
        </div>
      </div>
      <div className="second">
        <h2>Drafts</h2>
        <div style={{border:"none"}}>
          <form action="http://localhost:3000/addproduct" method="post" style={{display:"flex",gap:"20px",border:"none"}}>
          <input style={{width:"150px",height:"60px"}} name="p_name" type="text" placeholder="product name"></input>

          <input style={{width:"150px",height:"60px"}} name="p_price" type="number" placeholder="product price"></input>
         <button style={{width:"150px",height:"60px"}} type="submit">ADD NEW</button>
        </form>  </div>
        <br></br>
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
      {/* <button  > add</button> */}
      <button onClick={onDelete}>delete</button>
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
   <button onClick={onApprove}>add to products</button>
    
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

export default Page;