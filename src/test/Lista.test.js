import React from 'react';
import {  esMultiplo } from '../Lista.js';

describe('Prueba del componente es mutiplo ',()=> {

    let lista=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
   
    test('Prueba para multiplos de 3 ',()=>{
        expect(lista[3]).toBe(3);
       const  a =  esMultiplo(3 ,3,'prueba1',lista);
       expect(lista[3]).toBe('prueba1'); 
      
    });
    test('Prueba paramultimplos de 5',()=>{
        expect(lista[10]).toBe(10);
        const  b = esMultiplo(10 ,5,'prueba2',lista);
        expect(lista[10]).toBe('prueba2');
    });
    
    test('Prueba paramultimplos de 3 y 5 ',()=>{

       expect(lista[15]).toBe(15);
        const  c = esMultiplo(15 ,3*5,'prueba3',lista);
        expect(lista[15]).toBe('prueba3');
    });
}) 

