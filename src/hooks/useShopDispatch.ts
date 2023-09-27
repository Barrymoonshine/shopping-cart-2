import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ACTIONS from '../utils/ACTIONS';
import IProduct from '../interfaces/interfaces';

const useShopDispatch = () => {
  const { dispatch } = useContext(ShopContext);

  const toggleProductsLoading = () => {
    dispatch({
      type: ACTIONS.TOGGLE_PRODUCTS_LOADING,
    });
  };

  const removeProductsError = () => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCTS_ERROR,
    });
  };

  const saveProductsError = (error: string) => {
    dispatch({
      type: ACTIONS.SAVE_PRODUCTS_ERROR,
      payload: { error },
    });
  };

  const saveProducts = (products: IProduct[]) => {
    dispatch({
      type: ACTIONS.SAVE_PRODUCTS,
      payload: { products },
    });
  };

  const getProducts = async () => {
    try {
      toggleProductsLoading();
      removeProductsError();
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) {
        saveProducts(data);
        toggleProductsLoading();
      } else {
        saveProductsError(data);
        toggleProductsLoading();
      }
    } catch (error) {
      saveProductsError(error);
      toggleProductsLoading();
    }
  };

  return {
    getProducts,
  };
};

export default useShopDispatch;
