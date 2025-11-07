'use client'

import { useState } from 'react'
import { Pizza, Beef, Coffee, MapPin, Phone, Clock, Star, ChefHat, Award, Heart, Instagram, Facebook, Mail } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    {
      category: 'Kaladi Pizzas',
      icon: <Pizza className="w-8 h-8" />,
      items: [
        { name: 'Classic Kaladi Margherita', price: '₹299', desc: 'Fresh Kaladi cheese, tomato sauce, basil' },
        { name: 'Jammu Spice Pizza', price: '₹349', desc: 'Kaladi cheese, local spices, peppers, onions' },
        { name: 'Paneer Kaladi Fusion', price: '₹329', desc: 'Kaladi & paneer blend, tikka masala base' },
        { name: 'Vegetable Kaladi Supreme', price: '₹369', desc: 'Mixed vegetables, Kaladi cheese, herbs' }
      ]
    },
    {
      category: 'Kaladi Burgers',
      icon: <Beef className="w-8 h-8" />,
      items: [
        { name: 'Kaladi Classic Burger', price: '₹199', desc: 'Grilled Kaladi patty, lettuce, tomato, special sauce' },
        { name: 'Spicy Kaladi Burger', price: '₹229', desc: 'Spicy Kaladi patty, jalapenos, chipotle mayo' },
        { name: 'Tandoori Kaladi Burger', price: '₹249', desc: 'Tandoori Kaladi, mint chutney, onions' },
        { name: 'Veggie Kaladi Delight', price: '₹219', desc: 'Kaladi cheese, grilled veggies, pesto' }
      ]
    },
    {
      category: 'Kaladi Specials',
      icon: <ChefHat className="w-8 h-8" />,
      items: [
        { name: 'Kaladi Grilled Sandwich', price: '₹179', desc: 'Grilled Kaladi, vegetables, mint chutney' },
        { name: 'Kaladi Paratha Roll', price: '₹159', desc: 'Wrapped in paratha with chutneys' },
        { name: 'Kaladi Cheese Fries', price: '₹149', desc: 'Crispy fries topped with melted Kaladi' },
        { name: 'Kaladi Tikka Wrap', price: '₹189', desc: 'Tikka-spiced Kaladi in soft wrap' }
      ]
    },
    {
      category: 'Beverages',
      icon: <Coffee className="w-8 h-8" />,
      items: [
        { name: 'Kahwa', price: '₹89', desc: 'Traditional Kashmiri green tea' },
        { name: 'Noon Chai', price: '₹99', desc: 'Pink salt tea from Kashmir' },
        { name: 'Fresh Lassi', price: '₹79', desc: 'Sweet or salted yogurt drink' },
        { name: 'Masala Chai', price: '₹59', desc: 'Spiced Indian tea' }
      ]
    }
  ]

  const testimonials = [
    { name: 'Priya Sharma', rating: 5, text: 'Best Kaladi cheese I\'ve had outside Jammu! The pizza is absolutely divine.' },
    { name: 'Rajesh Kumar', rating: 5, text: 'Authentic taste of Kashmir in Greater Noida. Must try the Kaladi burger!' },
    { name: 'Anita Singh', rating: 5, text: 'Love this place! The Kaladi cheese is so fresh and flavorful.' },
    { name: 'Vikram Mehta', rating: 5, text: 'Finally, authentic Jammu cuisine in NCR. The tandoori Kaladi burger is amazing!' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-jammu-red via-jammu-orange to-kaladi-gold overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0em0wIDI4YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0ek0xNiAzMmMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHptMzIgMGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-6 flex justify-center">
            <Award className="w-20 h-20 text-white animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Jammu Kaladi Cafe
          </h1>
          <p className="text-2xl md:text-4xl text-kaladi-cream mb-4 font-semibold">
            Authentic Jammu Cheese Delights
          </p>
          <p className="text-xl md:text-2xl text-white mb-8">
            Experience the rich, smoky flavor of traditional Kaladi cheese
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              <Pizza className="inline w-5 h-5 mr-2" />
              Kaladi Pizzas
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              <Beef className="inline w-5 h-5 mr-2" />
              Kaladi Burgers
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              <ChefHat className="inline w-5 h-5 mr-2" />
              Special Delights
            </div>
          </div>
          <button
            onClick={() => setActiveSection('menu')}
            className="bg-white text-jammu-red px-8 py-4 rounded-full text-xl font-bold hover:bg-kaladi-cream transition-all transform hover:scale-105 shadow-2xl"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* About Kaladi Section */}
      <section className="py-20 bg-kaladi-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">What is Kaladi?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-jammu-red to-jammu-orange mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-2xl shadow-2xl">
              <Heart className="w-16 h-16 text-jammu-red mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-jammu-red">A Himalayan Treasure</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Kaladi is a traditional cheese from Jammu & Kashmir, made from cow's milk and renowned for its unique texture and smoky flavor. This artisanal cheese has been crafted in the Himalayan foothills for centuries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Jammu Kaladi Cafe, we source authentic Kaladi directly from local producers in Jammu, bringing you the genuine taste of the mountains.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-jammu-red">
                <h4 className="text-xl font-bold mb-2 text-jammu-red">🧀 Rich & Creamy</h4>
                <p className="text-gray-700">Dense texture that melts beautifully on pizzas and burgers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-jammu-orange">
                <h4 className="text-xl font-bold mb-2 text-jammu-orange">🔥 Smoky Flavor</h4>
                <p className="text-gray-700">Distinctive taste from traditional smoking methods</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-kaladi-gold">
                <h4 className="text-xl font-bold mb-2 text-kaladi-gold">💪 High Protein</h4>
                <p className="text-gray-700">Nutritious and packed with natural goodness</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-jammu-red">
                <h4 className="text-xl font-bold mb-2 text-jammu-red">✨ Authentic</h4>
                <p className="text-gray-700">100% sourced from traditional Jammu producers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-jammu-red to-jammu-orange mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Every dish crafted with authentic Kaladi cheese</p>
          </div>

          {menuItems.map((category, idx) => (
            <div key={idx} className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="text-jammu-red mr-4">{category.icon}</div>
                <h3 className="text-4xl font-bold text-jammu-red">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-gradient-to-br from-kaladi-cream to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-kaladi-gold">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-bold text-jammu-red">{item.name}</h4>
                      <span className="text-2xl font-bold text-jammu-orange">{item.price}</span>
                    </div>
                    <p className="text-gray-700 text-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-jammu-red to-jammu-orange">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-kaladi-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="text-jammu-red font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gradient mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-jammu-red to-jammu-orange mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-kaladi-cream to-white p-8 rounded-xl shadow-lg text-center">
              <MapPin className="w-16 h-16 text-jammu-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-jammu-red">Location</h3>
              <p className="text-gray-700 text-lg">
                Greater Noida Extension<br />
                Uttar Pradesh, India
              </p>
            </div>

            <div className="bg-gradient-to-br from-kaladi-cream to-white p-8 rounded-xl shadow-lg text-center">
              <Clock className="w-16 h-16 text-jammu-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-jammu-orange">Hours</h3>
              <p className="text-gray-700 text-lg">
                Monday - Sunday<br />
                11:00 AM - 11:00 PM
              </p>
            </div>

            <div className="bg-gradient-to-br from-kaladi-cream to-white p-8 rounded-xl shadow-lg text-center">
              <Phone className="w-16 h-16 text-kaladi-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-kaladi-gold">Contact</h3>
              <p className="text-gray-700 text-lg">
                Call for Delivery<br />
                Dine-in • Takeaway
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-jammu-red mb-6">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              <div className="bg-gradient-to-br from-jammu-red to-jammu-orange p-4 rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="w-8 h-8" />
              </div>
              <div className="bg-gradient-to-br from-jammu-red to-jammu-orange p-4 rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="w-8 h-8" />
              </div>
              <div className="bg-gradient-to-br from-jammu-red to-jammu-orange p-4 rounded-full text-white hover:scale-110 transition-transform cursor-pointer">
                <Mail className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-jammu-red to-jammu-orange text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">Jammu Kaladi Cafe</h3>
            <p className="text-kaladi-cream text-lg">Bringing the Authentic Taste of Jammu to Greater Noida</p>
          </div>
          <div className="border-t border-white/30 pt-6">
            <p className="text-kaladi-cream">© 2025 Jammu Kaladi Cafe. All rights reserved.</p>
            <p className="text-white/80 mt-2">Made with ❤️ and authentic Kaladi cheese</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
