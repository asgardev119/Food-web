import React from "react";
import { Link } from "react-router-dom";

export const InvalidPath = () => {
  return (
    <div style={{height:"100vh", width:"100%" , display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", }}>
     <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{padding:"10px 10px",border:"1px solid",borderRadius:"10px",marginTop:"20px"}}>Go back home</Link>
    </div>
  );
};
