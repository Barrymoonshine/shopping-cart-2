import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const useShopState = () => {
  const { state } = useContext(ShopContext);

  return {
    products: state.products,
    areProductsLoading: state.areProductsLoading,
    productsError: state.productsError,
  };
};

export default useShopState;
