import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import useShopState from '../../hooks/useShopState';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useShopState();

  const product = products.find((el) => el.id === Number(id));

  console.log('id', id);
  console.log('products', products);

  console.log('product', product);

  return (
    <div>
      THis is the productDetails page
      {product.title}
    </div>
  );
};

export default ProductDetails;
