import { ArrowRight, Smartphone, Shirt, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const featuredCategories = [
    {
      name: "Electronics",
      icon: Smartphone,
      description: "Latest gadgets and tech products",
      count: "500+ Products"
    },
    {
      name: "Fashion",
      icon: Shirt,
      description: "Trendy clothing and accessories",
      count: "300+ Products"
    },
    {
      name: "Home",
      icon: Home,
      description: "Furniture and home decor",
      count: "200+ Products"
    }
  ];

  return (
    <div className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Discover Amazing
            <span className="block text-accent-foreground">Product Deals</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Find the best products from top retailers with exclusive discounts and deals. 
            Compare prices and shop smart.
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3 animate-fade-in-up"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-blue-100 mb-3">
                    {category.description}
                  </p>
                  <span className="text-sm text-blue-200 font-medium">
                    {category.count}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};