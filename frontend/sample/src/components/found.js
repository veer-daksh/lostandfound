import React from "react";
import Card from "./cards";
const url="http://localhost:5000/found";
export default function Found(props){
  const [a, seta] = React.useState([1]);
  const fetchTours = async ()=>{
    try{
      const response =await fetch(url)
      const tours = await response.json();
      seta(tours);
      console.log(tours)
      console.log()
    }
    catch(error)
    {
      console.log(error)
    }
  }
  React.useEffect(()=>{
    if(props.ses){
      fetchTours();}
    console.log("useeffect")
  },[])
  console.log(a)
 return (
   <React.Fragment>
     <div className='bgimage2'></div>
     <section className='section'>
       <h2 className='section-title'>FOUND ITEMS</h2>
       <div className='cocktails-center'>
         {a.map((item) => {
           return item.tag === 'Found'? <Card count ={item}/> : '' ;
         })}
       </div>
     </section>
   </React.Fragment>
 );
}