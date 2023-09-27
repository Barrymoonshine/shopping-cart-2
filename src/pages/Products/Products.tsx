import './Products.css';
import uniqid from 'uniqid';
import IProduct from '../../interfaces/interfaces';
import { useEffect } from 'react';
import useShopState from '../../hooks/useShopState';
import useShopDispatch from '../../hooks/useShopDispatch';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const { products, areProductsLoading, productsError } = useShopState();
  const { getProducts } = useShopDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getProducts();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  // Get data from FakeStore API
  // Use data to populate Product Cards
  // Perform type checking
  return (
    <div>
      This is the products page
      {areProductsLoading && <span>Loading...</span>}
      {productsError && <span>{productsError}</span>}
      {products &&
        products.map((product: IProduct) => (
          <ProductCard
            key={uniqid()}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
    </div>
  );
};

export default Products;
