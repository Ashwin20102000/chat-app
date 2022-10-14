import React from "react";
import { keys } from "../utils/keys";

const useLocalStorage = (key,intialVal) => {
  const prefixedKey = keys.localStorageKeysPrefix+key;
  const [state,setState] = React.useState(()=>{
    const getState = localStorage.getItem(prefixedKey);
    if(getState!=null)return JSON.parse(getState);
    if(typeof intialVal==='function'){
      intialfn();
    }
    else{
      return intialVal;
    }
  })

  React.useEffect(()=>{
    localStorage.setItem(prefixedKey,JSON.stringify(state));
  },[state,prefixedKey]);

  return [state,setState]
}

export default useLocalStorage;