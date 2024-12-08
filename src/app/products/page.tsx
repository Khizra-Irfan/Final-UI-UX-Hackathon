'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Medal, CreditCard, Recycle } from 'lucide-react';

export default function ProductPage() {
  const [amount, setAmount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);  // Default visibility is false

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setAmount(value);
    }
  };

  const addToCart = () => {
    alert(`Added ${amount} of The Dandy Chair to cart`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 100; // Adjust based on when you want the effect to trigger
      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image Section */}
          <div className="bg-gray-100 flex items-center justify-center">
            <Image
              src="/Image Left.png"
              alt="The Dandy Chair"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="self-start">
            <h1 className="font-clash text-4xl font-medium mb-4">The Dandy Chair</h1>
            <p className="text-2xl font-medium mb-6">£250</p>
            <div className="mb-6">
              <h2 className="font-medium text-lg mb-2">Description</h2>
              <p className="text-gray-600">
                A timeless design, with premium materials features as one of our most
                popular and iconic pieces. The Dandy Chair is perfect for any stylish
                living space with beech legs and lambskin leather upholstery.
              </p>
            </div>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
            <div className="mb-6">
              <h2 className="font-medium text-lg mb-2">Dimensions</h2>
              <div className="grid grid-cols-3 gap-4 text-gray-600">
                <div>
                  <p className="font-medium">Height</p>
                  <p>110cm</p>
                </div>
                <div>
                  <p className="font-medium">Width</p>
                  <p>75cm</p>
                </div>
                <div>
                  <p className="font-medium">Depth</p>
                  <p>50cm</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="amount" className="font-medium">Amount:</label>
              <Input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-20"
                min="1"
              />
            </div>
            <Button
              onClick={addToCart}
              className="w-auto bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-4 py-2"
            >
              Add to cart
            </Button>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="font-clash text-2xl font-medium mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-24">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="group transition-transform duration-200 ease-in-out transform hover:scale-105"
              >
                <div className="overflow-hidden rounded-lg gap-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={290}
                    height={350}
                    className="w-[290px] h-[350px] object-cover"
                  />
                </div>
                <h3 className="font-medium mt-2 text-gray-600 font-clash-display">{product.name}</h3>
                <p className="text-gray-600 font-satoshi">£{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="font-clash px-6 py-6 bg-gray-200">
            View collection
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          What makes our brand different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`space-y-3 bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-clash">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Club and Get the Benefits Section */}
      <div
        className="bg-[#F3F4F6] py-8 border-t text-[#2A254B] mt-0 text-center"
        style={{
          width: "100%", // Make it responsive for all screens
          height: "auto", // Height adjusts based on content
          padding: "68px 20px 54px 20px", // Adjust padding for small screens
          opacity: isVisible ? 1 : 0,  // Dynamically change opacity
          transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',  // Smooth translate effect
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',  // Transition for smooth visibility change
        }}
      >
        <h1 className="text-4xl font-semibold mb-4 text-[#2A254B]">Join the Club and Get the Benefits</h1>
        <p className="text-lg mb-8">Sign up for our newsletter and receive exclusive offers on new
          <br /> ranges, sales, pop-up stores, and more</p>

        <div className="flex justify-center gap-0 max-w-none mx-auto px-0">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 md:w-[400px] lg:w-[500px] px-4 py-2 border border-gray-300 rounded-md"
          />
          <Button className="bg-[#2A254B] text-white px-6 py-2 w-full sm:w-auto md:w-auto lg:w-auto">
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
}

const relatedProducts = [
  { id: 1, name: "The Dandy Chair", price: "250", image: "/Right-image.png" },
  { id: 2, name: "Rustic Vase Set", price: "155", image: "/Photo.png" },
  { id: 3, name: "The Silky Vase", price: "125", image: "/Photo-1.png" },
  { id: 4, name: "The Lucy Lamp", price: "399", image: "/Photo-2.png" },
];

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Free delivery",
    description: "Enjoy free delivery on orders over £50"
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Quality craftsmanship",
    description: "We source and create pieces that add beauty and value to your space"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Sustainable design",
    description: "We believe in sustainable materials and eco-friendly production"
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Free delivery",
    description: "Enjoy free delivery on orders over £50"
  }
];
