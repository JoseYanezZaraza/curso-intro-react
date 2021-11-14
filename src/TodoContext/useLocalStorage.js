import React from "react";

function useLocalStorage(itemName, initialValue){
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const itemList = localStorageItem === null || localStorageItem === ''? initialValue: JSON.parse(localStorageItem);    
        setItems(itemList);
        setLoading(false);
      } catch (exceptionError) {
        setError(exceptionError);
      }
    }, 2000);
  });
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };
  return [
    items,
    saveItem,
    loading,
    error
  ];
}

export {useLocalStorage};