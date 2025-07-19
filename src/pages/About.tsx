import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Target, Users, Award } from 'lucide-react';

const About = () => {
  const handleSearch = (query: string) => {
    // Handle search from navbar
    console.log('Search:', query);
  };

  const features = [
    {
      icon: Target,
      title: "Best Deals",
      description: "We curate the best deals from top retailers to save you money on quality products."
    },
    {
      icon: Users,
      title: "Trusted Reviews",
      description: "Read authentic reviews from real customers to make informed purchasing decisions."
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "All featured products are carefully selected for their quality and customer satisfaction."
    },
    {
      icon: ShoppingBag,
      title: "Easy Shopping",
      description: "Compare prices across multiple platforms and shop with confidence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar onSearch={handleSearch} searchQuery="" />
      
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About DealFinder
          </h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in finding the best deals on quality products
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At DealFinder, we believe everyone deserves access to quality products at the best prices. 
              We work tirelessly to find and curate the most amazing deals from trusted retailers like 
              Amazon and Flipkart.
            </p>
            <p className="text-muted-foreground text-lg">
              Our team of deal experts scours the internet daily to bring you exclusive discounts, 
              limited-time offers, and the best value products across all categories.
            </p>
          </div>
          <div className="bg-gradient-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground mb-4">Happy Customers</div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground mb-4">Products Featured</div>
              <div className="text-4xl font-bold text-success mb-2">50%</div>
              <div className="text-muted-foreground">Average Savings</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose DealFinder?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're more than just a deal aggregator. We're your shopping companion, 
            helping you make smart purchasing decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="text-center bg-gradient-card shadow-[var(--shadow-card)] border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
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

export default About;