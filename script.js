export const transform = (oldSys) => {
    let newSys={}
    for(let key in oldSys){
      for(let letter of oldSys[key]){
        newSys[letter.toLowerCase()]=Number(key);
      }
    }
    return newSys;
  };