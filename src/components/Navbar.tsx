import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Navbar = ({ onSearch, searchQuery }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    if (localSearchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(localSearchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <nav className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">DealFinder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full flex">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={localSearchQuery}
                  onChange={(e) => setLocalSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 pr-4"
                />
              </div>
              <Button
                onClick={handleSearchSubmit}
                className="ml-2 px-4"
                variant="default"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-scale-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {/* Mobile Search */}
              <div className="flex mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 pr-4"
                  />
                </div>
                <Button
                  onClick={handleSearchSubmit}
                  className="ml-2 px-4"
                  variant="default"
                  size="sm"
                >
                  Search
                </Button>
              </div>
              
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Home
              </Link>
              <Link to="/categories" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Categories
              </Link>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};