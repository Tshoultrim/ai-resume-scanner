export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* About Header with Glass Effect */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="relative backdrop-blur-xl bg-white/5 border-y border-white/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn more about our organization and mission to transform the future with AI
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Glass Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our mission is to deliver innovative AI solutions that help businesses grow and succeed.
                We are committed to excellence, integrity, and customer satisfaction in everything we do.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We believe in the power of collaboration and teamwork to achieve extraordinary results
                in the age of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:border-white/40 transition-all duration-300">
              <div className="text-5xl mb-4">👁️</div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where AI and human creativity work together to solve
                complex problems and create positive change across industries.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                By fostering innovation and nurturing talent, we aim to be a global leader
                in ethical AI development and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Glass Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Our Core Values</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Innovation', desc: 'We constantly seek new and better ways to serve our clients and solve problems.' },
              { icon: '🤝', title: 'Integrity', desc: 'We act with honesty and strong moral principles in all our business dealings.' },
              { icon: '⭐', title: 'Excellence', desc: 'We strive for the highest quality in everything we do, every day.' },
              { icon: '👥', title: 'Collaboration', desc: 'We work together as a team and value diverse perspectives and ideas.' }
            ].map((value, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:border-white/40 transition-all duration-300">
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with Glass Effect */}
      <section className="container mx-auto px-4 py-16">
        <div className="group relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:border-white/40 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-3xl text-gray-300 leading-relaxed">
              <p>
                Founded in 2020, DrukOptix AI started with a simple idea: to build better AI solutions
                for businesses around the world. What began as a small team of passionate AI researchers and
                developers has grown into a dynamic organization with over 20 talented professionals.
              </p>
              <p className="mt-4">
                Throughout our journey, we have maintained our commitment to innovation, quality, and
                customer success. We have helped numerous clients achieve their business goals through
                cutting-edge AI technology solutions and outstanding service.
              </p>
              <p className="mt-4">
                Today, we continue to grow and evolve, always pushing the boundaries of what's possible
                with artificial intelligence and striving to make a positive impact in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}