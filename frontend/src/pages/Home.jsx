import React from 'react';
import TeamCard from '../components/TeamCard';
import SocialMemberCard from '../components/SocialMemberCard';
import ImageCarousel from '../components/ImageCarousel';
import { getImagePath } from '../utils/imagePath';

export default function Home() {
  const socialMembers = [
    { id: 1, name: 'Member 1', role: 'Developer', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: 2, name: 'Member 2', role: 'Designer', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Member 3', role: 'Manager', image: 'https://randomuser.me/api/portraits/men/76.jpg' },
    { id: 4, name: 'Member 4', role: 'Developer', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements - only visible when no carousel */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section with Image Carousel */}
      <section className="relative w-full">
        <ImageCarousel />
      </section>

      {/* Quick About Section with Glass Effect */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="group relative order-2 md:order-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-white/40 transition-all duration-300">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">About DrukOptix AI</h2>
                <p className="text-sm md:text-lg text-gray-300 mb-4">
                  We are a powerhouse of innovation dedicated to pushing the boundaries of artificial intelligence.
                </p>
                <p className="text-sm md:text-lg text-gray-300">
                  From cutting-edge research and large-scale model training to seamless deployment, 
                  we build the future of intelligent systems.
                </p>
              </div>
            </div>
            
            <div className="group relative order-1 md:order-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-300">
                <img
                  src={getImagePath('About Us.png')}
                  alt="About us"
                  className="w-full h-64 md:h-96 object-cover opacity-90 hover:opacity-100 transition duration-500"
                  onError={(e) => {
                    console.error('About image failed to load:', e.target.src);
                    e.target.src = 'https://via.placeholder.com/800x600?text=About+Us';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Members Section with Glass Cards */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-4">Our Social Members</h2>
          <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-lg">
            Meet the people who drive our organization forward
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {socialMembers.map((member) => (
              <SocialMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Glass Effect */}
      <section className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center hover:border-white/40 transition-all duration-300">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
              <p className="mb-6 md:mb-8 text-base md:text-xl text-gray-200">Explore more about our teams and what we do</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/teams"
                  className="relative group/btn inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg opacity-75 group-hover/btn:opacity-100 transition duration-300"></div>
                  <button className="relative backdrop-blur-md bg-white/90 text-purple-600 px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 border border-white/20 text-sm md:text-base">
                    View Teams
                  </button>
                </a>
                <a
                  href="/about"
                  className="relative group/btn inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover/btn:opacity-100 transition duration-300"></div>
                  <button className="relative backdrop-blur-md bg-transparent border-2 border-white/30 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 text-sm md:text-base">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}