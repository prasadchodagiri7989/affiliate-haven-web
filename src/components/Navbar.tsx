import { useState } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Navbar = ({ onSearch, searchQuery }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">DealFinder</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 w-full"
              />
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
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Categories
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};