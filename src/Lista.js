import React from 'react';


let list = [];
export const  Lista=({numElementos})=>{      
      let num =0;   
   while(num < numElementos )
   {
      num ++; 
      list.push(num); 
      list[!(num%3)]=( esMultiplo(num, 3,"Linio",list));
      list[!(num%5)]=( esMultiplo(num, 5,"IT",list));
      list[!(num%15)]=(esMultiplo(num, 15,"Linianos",list));      
   }
    list.splice(2, 1);
    return(<>  Lista <ul> {list.map((element,i) => { return (<li key = {i}>{i+1}.- {element} </li>)})} </ul> </>);
}
export const  esMultiplo=( num ,valor, respuesta , lista)=>{
  let dato=num; 
  if (!(num%valor))
  {
    lista[num] = respuesta
  }
  return (dato)
}

export default Lista