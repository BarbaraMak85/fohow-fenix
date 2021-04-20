import React, { useState, useEffect } from "react";
import AppContext from "../context/context";
import Router from "../routing/Router";
import { productsCollection } from "../firebase/firestoreUtils";
import { CookiesProvider } from "react-cookie";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const subscribe = productsCollection.onSnapshot((snapshot) => {
      const dateFromOrdersCollection = snapshot.docs.map((doc) => {
        console.log(doc);
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProducts(dateFromOrdersCollection);
    });
    return () => {
      subscribe();
    };
  }, []);

  return (
    <CookiesProvider>
      <AppContext.Provider value={{ products }}>
        <Router />
      </AppContext.Provider>
    </CookiesProvider>
  );
};

export default App;
