import './ProductCard.css';
import { IProductCard } from '../../interfaces/interfaces';

const ProductCard: React.FC<IProductCard> = ({
  title,
  category,
  price,
  description,
  image,
}) => {
  return (
    <div className='product-card'>
      <span>{title}</span>
      <span>{category}</span>
      <span>{price}</span>
      <span>{description}</span>
      <span>{image}</span>
    </div>
  );
};

export default ProductCard;
