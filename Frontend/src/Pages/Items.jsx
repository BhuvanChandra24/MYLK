import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { FaSearch, FaFilter } from 'react-icons/fa';
import Coffe from '../assets/coffe.png';
import badamMilkImg from '../assets/badammilk.png';
import pistaMilkImg from '../assets/pistamilk.png';
import roseMilkImg from '../assets/rosemilk.png';
import roseIceCreamImg from '../assets/roseicecream.png';
import pistaIceCreamImg from '../assets/pistaicecream.png';
import badamIceCreamImg from '../assets/badamicecream.png';

const Items = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allItems = [
    // Coffee
    {
      id: 3,
      name: 'Classic Coffee',
      brewer: 'Colonia',
      price: 3.50,
      description: 'Freshly brewed aromatic coffee made from premium beans.',
      image: Coffe,
      category: 'Coffee'
    },
    // Milk Drinks
    {
      id: 4,
      name: 'Badam Milk',
      brewer: 'Colonia',
      price: 4.00,
      description: 'Sweet almond milk blended with saffron and cardamom.',
      image: badamMilkImg,
      category: 'Milk Drinks'
    },
    {
      id: 5,
      name: 'Pista Milk',
      brewer: 'Colonia',
      price: 4.50,
      description: 'Creamy pistachio milk with a nutty flavor.',
      image: pistaMilkImg,
      category: 'Milk Drinks'
    },
    {
      id: 6,
      name: 'Rose Milk',
      brewer: 'Colonia',
      price: 3.75,
      description: 'Chilled milk blended with natural rose syrup.',
      image: roseMilkImg,
      category: 'Milk Drinks'
    },
    // Ice Cream
    {
      id: 7,
      name: 'Rose Ice Cream',
      brewer: 'Colonia',
      price: 3.00,
      description: 'Smooth and fragrant rose-flavored ice cream.',
      image: roseIceCreamImg,
      category: 'Ice Cream'
    },
    {
      id: 8,
      name: 'Pista Ice Cream',
      brewer: 'Colonia',
      price: 3.25,
      description: 'Creamy pistachio ice cream with crunchy nut pieces.',
      image: pistaIceCreamImg,
      category: 'Ice Cream'
    },
    {
      id: 9,
      name: 'Badam Ice Cream',
      brewer: 'Colonia',
      price: 3.25,
      description: 'Rich almond ice cream with traditional flavor.',
      image: badamIceCreamImg,
      category: 'Ice Cream'
    }
  ];

  const categories = ['All', 'Coffee', 'Milk Drinks', 'Ice Cream'];

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-coffee-50 pt-24 pb-16">
      {/* Header */}
    <div className="bg-coffee-800 text-white py-16 mb-12">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-5xl font-bold mb-4">Menu Preview</h1>
    <p className="text-xl text-coffee-200 max-w-2xl mx-auto">
      A sneak peek of the flavored milk, coffee, and softy treats
      coming soon from the MYLK Co* kitchen on wheels.
    </p>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-coffee-400" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-coffee-200 focus:outline-none focus:ring-2 focus:ring-coffee-500 shadow-lg"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-coffee-700 text-white shadow-lg'
                    : 'bg-white text-coffee-700 hover:bg-coffee-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-2xl text-coffee-600">No items found</p>
            <p className="text-coffee-500 mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;