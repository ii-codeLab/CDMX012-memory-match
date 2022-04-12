

//-------------FUNCIÓN PARA DUBLICAR DATA-------------------------------
export function doubleData(data){
    return data.concat(data)
  }
  
  //-------------FUNCIÓN PARA MEZCLAR CARTAS-------------------------------
  export function fisherYatesShuffle(infoTomix){
    for(let i =infoTomix.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [infoTomix[i],infoTomix[j]]=[infoTomix[j],infoTomix[i]]; // swap
    }
  }