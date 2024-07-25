export const TURNS ={
    X: 'X',
    O: 'O'
  }
  
  
export  const winner_combs = [
    [0,1,2],  //Primer línea horizontal
    [3,4,5],  //Segunda línea horizontal
    [6,7,8],  //Tercer Línea horizontal
    [0,3,6],  //Primer Línea vertical
    [1,4,7],  //Segunda Línea vertical
    [2,5,8],  // Tercer Línea vertical
    [0,4,8],  //Diagonal hacia la parte inferior derecha
    [2,4,6]   //Diagonal hacia la parte superior derecha
  ]

 
   
export const SCORE = {
    X: 0,
    O: 0
  };
  