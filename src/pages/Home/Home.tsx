import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useShopState from '../../hooks/useShopState';
import useShopDispatch from '../../hooks/useShopDispatch';
import { IProduct } from '../../interfaces/interfaces';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import uniqid from 'uniqid';

const Home = () => {
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

  const featureProducts = products && products.slice(0, 4);

  return (
    <>
      <h2>
        Welcome to Hogwash, the one stop destination for all your shopping needs
      </h2>
      <p>
        Discover our range of quality products and scratch that shopping itch!{' '}
      </p>
      <Link to='/products' style={{ textDecoration: 'none' }}>
        <span className='explore-link'>Explore</span>
      </Link>
      <h3>Featured products</h3>
      <div className='feature-container'>
        {areProductsLoading && <span>Loading...</span>}
        {productsError && <span>{productsError}</span>}
        {products &&
          featureProducts.map((product: IProduct) => (
            <FeatureCard
              key={uniqid()}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
