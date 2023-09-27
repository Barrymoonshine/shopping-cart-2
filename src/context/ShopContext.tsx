import { createContext } from 'react';
import useShop from '../hooks/useShop';

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={useShop()}>{children}</ShopContext.Provider>
  );
};
