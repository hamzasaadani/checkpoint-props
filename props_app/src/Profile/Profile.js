import React, { Profile } from "react";

const Profil =(props)=>{  
    const styleProfile={color :"orange" , textAlign :"center" ,paddingTop:"4em"};
    const styleImage ={width :"200px" , height :"auto" ,borderRadius:"50px"}
   
    return(
        <div  style={styleProfile}>  

<img src={props.children} alt="" style={styleImage}></img>
     <h3> {props.img}</h3>
    
 
    <h1> {props.fullname}</h1>
    <h2>{props.bio}</h2>
    <h3>{props.Profession}</h3>
    <em>{props.default}</em>
    <br/>
    <button
    onClick={()=>props.handelfullname(props.fullname)}>show name</button>
    </div>
   

    );

}
Profil.defaultProps={
    fullname:"hamza",
    bio: "test",
    Profession:"developpeur",
    default:"testeur"
}
export default Profil;