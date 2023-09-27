import './FeatureCard.css';
import { IFeatureCard } from '../../interfaces/interfaces';

const ProductCard: React.FC<IFeatureCard> = ({ title, price, image }) => {
  return (
    <div className='product-card'>
      <span>{title}</span>

      <span>{price}</span>

      <span>{image}</span>
    </div>
  );
};

export default ProductCard;
