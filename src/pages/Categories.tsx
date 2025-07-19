import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Shirt, Home, Headphones, Watch, Backpack } from 'lucide-react';

const Categories = () => {
  const handleSearch = (query: string) => {
    // Handle search from navbar
    console.log('Search:', query);
  };

  const categoryData = [
    {
      name: "Electronics",
      icon: Smartphone,
      description: "Latest gadgets, smartphones, laptops, and tech accessories",
      productCount: 150,
      featured: ["Smartphones", "Laptops", "Headphones", "Smartwatches", "Cameras"]
    },
    {
      name: "Fashion",
      icon: Shirt,
      description: "Trendy clothing, shoes, bags, and fashion accessories",
      productCount: 200,
      featured: ["Clothing", "Shoes", "Bags", "Accessories", "Jewelry"]
    },
    {
      name: "Home & Garden",
      icon: Home,
      description: "Furniture, decor, kitchen appliances, and garden tools",
      productCount: 120,
      featured: ["Furniture", "Kitchen", "Decor", "Garden", "Storage"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} searchQuery="" />
      
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by Categories
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing products organized by categories. Find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {categoryData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name} 
                className="product-card bg-gradient-card shadow-[var(--shadow-card)] border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 p-4 rounded-2xl">
                        <Icon className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                          {category.name}
                        </h3>
                        <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                          {category.productCount}+ Products
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.featured.map((item) => (
                          <span 
                            key={item}
                            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;