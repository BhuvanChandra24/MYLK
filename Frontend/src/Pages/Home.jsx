import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaLeaf,
  FaAward,
  FaTruck,
  FaArrowRight,
  FaQuoteRight,
} from "react-icons/fa";
import { GiAlmond, GiRose, GiPeanut } from "react-icons/gi";

import pistaMilkImg from "../assets/pistamilk.png";
import badamMilkImg from "../assets/badammilk.png";
import roseMilkImg from "../assets/rosemilk.png";
import heroImg from "../assets/Truck1.png";

const Home = () => {
  const featuredDrinks = [
    {
      id: 1,
      name: "Pista Milk",
      price: 4.5,
      description:
        "Rich and creamy traditional drink with blended pistachios and aromatic cardamom.",
      image: pistaMilkImg,
      icon: GiPeanut,
    },
    {
      id: 2,
      name: "Badam Milk",
      price: 4.0,
      description:
        "Sweet almond beverage with saffron, known for its energy-boosting properties.",
      image: badamMilkImg,
      icon: GiAlmond,
    },
    {
      id: 3,
      name: "Rose Milk",
      price: 3.75,
      description:
        "Fragrant and refreshing drink made with chilled milk and natural rose syrup.",
      image: roseMilkImg,
      icon: GiRose,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 pt-24 pb-16 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
{/* HERO SECTION */}
<section className="mb-16">
  
  {/* IMAGE */}
  <div className="relative h-[55vh] md:h-[70vh] group">
    <img
      src={heroImg}
      alt="Milk drinks"
      className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
    />

    {/* overlay only desktop */}
    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-coffee-900/80 via-coffee-800/70 to-coffee-900/80" />

    {/* circles */}
    <div className="hidden md:block absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
    <div className="hidden md:block absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/10 rounded-full animate-spin-slower"></div>

    {/* TEXT OVER IMAGE (desktop only) */}
    <div className="hidden md:flex absolute inset-0 items-center justify-center text-center">
      <div className="px-4 max-w-3xl text-white">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-white/10 rounded-full text-sm tracking-wider border border-white/20">
            🚚 COMING TO YOUR NEIGHBORHOOD
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Kitchen on Wheels
          </span>
        </h1>

        <p className="text-lg md:text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          MYLK Co* is a kitchen on wheels serving flavored milk, coffee, and softy made fresh daily
        </p>

        <Link
          to="/items"
          className="inline-flex items-center gap-3 bg-white text-coffee-800 px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore Our Menu <FaArrowRight />
        </Link>
        
      </div>
    </div>
  </div>

  {/* TEXT BELOW IMAGE (mobile only) */}
  <div className="md:hidden px-6 pt-8 text-center">
    <div className="mb-4 inline-block">
      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs tracking-wider">
        🚚 COMING TO YOUR NEIGHBORHOOD
      </span>
    </div>

    <h1 className="text-3xl font-black mb-3 text-coffee-800">
      Kitchen on Wheels
    </h1>

    <p className="text-coffee-600 mb-6">
      MYLK Co* is a kitchen on wheels serving flavored milk, coffee, and softy made fresh daily
    </p>

    <Link
      to="/items"
      className="inline-flex items-center gap-2 bg-coffee-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
    >
      Explore Our Menu <FaArrowRight />
    </Link>
  </div>

</section>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* FEATURES SECTION WITH CARD FLIP EFFECT */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold tracking-wider text-sm">WHY US</span>
            <h2 className="text-4xl font-black text-coffee-800 mt-2 mb-4">
              Why Choose <span className="text-amber-700">MYLK Co* Truck</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective">
            {[
              {
                icon: FaCoffee,
                title: "Fresh on Wheels",
                description: "Prepared and served fresh directly from our moving kitchen",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: FaLeaf,
                title: "Natural Ingredients",
                description: "Made with real nuts, milk, coffee, and authentic flavors",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: FaAward,
                title: "Signature Flavors",
                description: "Unique flavored milk, coffee, and softy crafted daily",
                color: "from-rose-500 to-pink-500"
              },
              {
                icon: FaTruck,
                title: "Near You",
                description: "Our MYLK Co* truck brings treats to your neighborhood",
                color: "from-blue-500 to-indigo-500"
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 hover:border-amber-200/50"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <f.icon size={24} />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-coffee-800 group-hover:text-amber-700 transition-colors">
                    {f.title}
                  </h3>
                  
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {f.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${f.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS SECTION WITH GLASS MORPHISM */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold tracking-wider text-sm">OUR SPECIALS</span>
            <h2 className="text-4xl font-black text-coffee-800 mt-2 mb-4">
              Signature <span className="text-amber-700">Drinks</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDrinks.map((drink, index) => {
              const Icon = drink.icon;
              return (
                <div
                  key={drink.id}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/50"
                >
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Floating icon */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                        <Icon size={20} className="text-amber-700" />
                      </div>
                    </div>

                    {/* Price tag */}
                    <div className="absolute -bottom-1 -left-1 z-20">
                      <div className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-5 py-2 rounded-tl-2xl rounded-br-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                        <span className="font-bold">${drink.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative z-20">
                    <h3 className="text-2xl font-bold mb-2 text-coffee-800 group-hover:text-amber-700 transition-colors">
                      {drink.name}
                    </h3>
                    
                    <p className="text-coffee-600 mb-4 text-sm leading-relaxed">
                      {drink.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <button className="text-amber-700 font-semibold flex items-center gap-2 group/btn">
                        Order Now 
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => (
                          <span key={star} className="text-amber-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS SECTION WITH WATERCOLOR EFFECT */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold tracking-wider text-sm">COMING SOON</span>
            <h2 className="text-4xl font-black text-coffee-800 mt-2 mb-4">
              What <span className="text-amber-700">MYLK Co*</span> Will Bring
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaCoffee,
                title: "Fresh on Wheels",
                description: "Flavored milk, coffee, and softy prepared fresh from our upcoming truck",
                gradient: "from-amber-100 to-orange-100"
              },
              {
                icon: FaLeaf,
                title: "Real Ingredients",
                description: "Crafted with natural milk, nuts, coffee, and authentic flavors",
                gradient: "from-emerald-100 to-teal-100"
              },
              {
                icon: FaAward,
                title: "Signature Creations",
                description: "Unique flavored drinks and softy recipes developed for daily treats",
                gradient: "from-rose-100 to-pink-100"
              },
              {
                icon: FaTruck,
                title: "Rolling Soon",
                description: "Our MYLK Co* kitchen on wheels will soon serve your neighborhood",
                gradient: "from-blue-100 to-indigo-100"
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Watercolor background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm text-coffee-700 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <f.icon size={24} />
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 text-coffee-800">
                    {f.title}
                  </h3>
                  
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {f.description}
                  </p>

                  {/* Coming soon badge */}
                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-coffee-500 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    COMING SOON
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease infinite;
        }
        
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Home;