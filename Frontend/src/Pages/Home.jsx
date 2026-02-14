import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaLeaf,
  FaAward,
  FaTruck,
  FaArrowRight,
  FaQuoteRight,
} from "react-icons/fa6";
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

  const features = [
    { icon: FaCoffee, title: "Premium Quality", description: "Hand-selected ingredients" },
    { icon: FaLeaf, title: "100% Natural", description: "No artificial additives" },
    { icon: FaAward, title: "Award Winning", description: "Authentic taste" },
    { icon: FaTruck, title: "Fresh Delivery", description: "Prepared daily" },
  ];

  return (
    <div className="min-h-screen bg-coffee-50 pt-24 pb-16">
      
      {/* HERO */}
      {/* HERO */}
<section className="relative h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] flex items-center justify-center text-center mb-16">
  <img
    src={heroImg}
    alt="Milk drinks"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-coffee-900/70" />

  <div className="relative z-10 px-4 max-w-3xl text-white">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
      Kitchen on Wheels
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-coffee-200 mb-6 sm:mb-8">
      MYLK Co* is a kitchen on wheels serving flavored milk, coffee, and softy made fresh daily
    </p>

    <Link
      to="/items"
      className="inline-flex items-center gap-2 bg-white text-coffee-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-coffee-100 transition"
    >
      Explore Our Menu <FaArrowRight />
    </Link>
  </div>
</section>


      <div className="max-w-7xl mx-auto px-4">

        {/* FEATURES */}
       <section className="mb-20">
  <h2 className="text-3xl font-bold text-coffee-800 text-center mb-10">
    Why Choose MYLK Co* Truck
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: FaCoffee,
        title: "Fresh on Wheels",
        description: "Prepared and served fresh directly from our moving kitchen",
      },
      {
        icon: FaLeaf,
        title: "Natural Ingredients",
        description: "Made with real nuts, milk, coffee, and authentic flavors",
      },
      {
        icon: FaAward,
        title: "Signature Flavors",
        description: "Unique flavored milk, coffee, and softy crafted daily",
      },
      {
        icon: FaTruck,
        title: "Near You",
        description: "Our MYLK Co* truck brings treats to your neighborhood",
      },
    ].map((f, i) => (
      <div
        key={i}
        className="p-8 bg-white rounded-3xl shadow-lg"
      >
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-coffee-100 text-coffee-700">
          <f.icon size={22} />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-coffee-800">
          {f.title}
        </h3>
        <p className="text-coffee-600 text-sm">
          {f.description}
        </p>
      </div>
    ))}
  </div>
</section>


        {/* PRODUCTS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-coffee-800 text-center mb-10">
            Signature Drinks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDrinks.map((drink) => {
              const Icon = drink.icon;
              return (
                <div
                  key={drink.id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 right-4 bg-coffee-700 text-white px-4 py-1 rounded-full text-sm">
                      {drink.badge}
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow">
                      <Icon size={18} className="text-coffee-700" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-coffee-800">
                      {drink.name}
                    </h3>
                    <p className="text-coffee-600 mb-4 text-sm">
                      {drink.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-coffee-800">
                        ${drink.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS */}
       <section className="mb-20">
  <h2 className="text-3xl font-bold text-coffee-800 text-center mb-10">
    What MYLK Co* Will Bring
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: FaCoffee,
        title: "Fresh on Wheels",
        description: "Flavored milk, coffee, and softy prepared fresh from our upcoming truck",
      },
      {
        icon: FaLeaf,
        title: "Real Ingredients",
        description: "Crafted with natural milk, nuts, coffee, and authentic flavors",
      },
      {
        icon: FaAward,
        title: "Signature Creations",
        description: "Unique flavored drinks and softy recipes developed for daily treats",
      },
      {
        icon: FaTruck,
        title: "Rolling Soon",
        description: "Our MYLK Co* kitchen on wheels will soon serve your neighborhood",
      },
    ].map((f, i) => (
      <div
        key={i}
        className="p-8 bg-white rounded-3xl shadow-lg"
      >
        <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-coffee-100 text-coffee-700">
          <f.icon size={22} />
        </div>
        <h3 className="font-semibold text-lg mb-1 text-coffee-800">
          {f.title}
        </h3>
        <p className="text-coffee-600 text-sm">
          {f.description}
        </p>
      </div>
    ))}
  </div>
</section>


      </div>
    </div>
  );
};

export default Home;
