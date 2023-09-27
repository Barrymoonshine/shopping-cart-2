import './Products.css';
import uniqid from 'uniqid';
import { IProduct } from '../../interfaces/interfaces';
import useShopState from '../../hooks/useShopState';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const { products, areProductsLoading, productsError } = useShopState();

  return (
    <div>
      This is the products page
      {areProductsLoading && <span>Loading...</span>}
      {productsError && <span>{productsError}</span>}
      {products &&
        products.map((product: IProduct) => (
          <ProductCard
            key={uniqid()}
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
