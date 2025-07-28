import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/data/products';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank');
  };

  const handleFlipkartClick = () => {
    window.open(product.flipkartUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="product-card overflow-hidden bg-gradient-card shadow-[var(--shadow-card)] border-0">
      <Link to={`/product/${product.id}`}>
        <div className="relative cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-success text-success-foreground px-2 py-1 rounded-md text-xs font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm font-medium text-foreground mr-1">
            {product.rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={handleAmazonClick}
            className="btn-amazon w-full text-sm font-medium"
            size="sm"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Amazon
          </Button>
          <Button
            onClick={handleFlipkartClick}
            className="btn-flipkart w-full text-sm font-medium"
            size="sm"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Flipkart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};