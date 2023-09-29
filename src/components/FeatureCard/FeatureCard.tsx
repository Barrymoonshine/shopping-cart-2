import './FeatureCard.css';
import { IFeatureCard } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<IFeatureCard> = ({ id, title, price, image }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className='feature-card'>
        <img src={image} alt='Product image' width='100' height='125' />
        <h6>{title}</h6>
        <span>£{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
