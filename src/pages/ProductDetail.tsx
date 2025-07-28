import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink, ShoppingCart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || ''));

  const handleSearch = (query: string) => {
    // Handle search from navbar
    console.log('Search:', query);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onSearch={handleSearch} searchQuery="" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank');
  };

  const handleFlipkartClick = () => {
    window.open(product.flipkartUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} searchQuery="" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            {product.originalPrice && (
              <Badge className="absolute top-4 right-4 bg-success text-success-foreground text-lg px-3 py-1">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-lg font-semibold text-foreground">
                {product.rating}
              </span>
              <span className="text-muted-foreground">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Purchase Buttons */}
            <Card className="p-6 bg-gradient-card shadow-[var(--shadow-card)] border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Where to Buy
                </h3>
                <div className="grid gap-4">
                  <Button
                    onClick={handleAmazonClick}
                    className="btn-amazon w-full text-lg py-6"
                    size="lg"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Buy on Amazon
                  </Button>
                  <Button
                    onClick={handleFlipkartClick}
                    className="btn-flipkart w-full text-lg py-6"
                    size="lg"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Buy on Flipkart
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Product Features */}
            <Card className="p-6 bg-gradient-card shadow-[var(--shadow-card)] border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Product Features
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• High-quality materials and construction</li>
                  <li>• Excellent customer reviews and ratings</li>
                  <li>• Competitive pricing from trusted retailers</li>
                  <li>• Fast and reliable shipping options</li>
                  <li>• Money-back guarantee and warranty</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;