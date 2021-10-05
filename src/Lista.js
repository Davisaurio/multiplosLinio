import React from 'react';


let list = [];
export const  Lista=({numElementos})=>{      
      let num =0;   
   while(num < numElementos )
   {
      num ++; 
      list.push(num); 
      list[!(num%3)]=( esmultiplo(num, 3,"Linio"));
      list[!(num%5)]=( esmultiplo(num, 5,"IT"));
      list[!(num%15)]=(esmultiplo(num, 15,"Linianos"));      
   }
   console.log(list);
   list.splice(2, 1);
    return(<> lista <ul>  {list.map((element) => { return (<li>{element} </li>)})} </ul> </>);
}
const esmultiplo=( num ,valor, respuesta)=>{
  let dato=num; 
  if (!(num%valor))
  {
    list[num] = respuesta
  }
  return (dato)
}

export default Lista