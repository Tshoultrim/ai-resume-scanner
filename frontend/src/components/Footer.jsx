export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      
      {/* More transparent glass footer */}
      <div className="relative backdrop-blur-md bg-black/10 border-t border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Logo section */}
            <div className="col-span-1">
              <div className="backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2 md:mb-3">
                  DrukOptix AI
                </h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Building amazing things together with cutting-edge AI technology
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
              <h3 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Teams', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2 group text-xs md:text-sm">
                      <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Follow Us */}
            <div className="backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
              <h3 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4">Follow Us</h3>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z' },
                  { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition group text-xs md:text-sm"
                  >
                    <div className="backdrop-blur-sm bg-white/5 group-hover:bg-white/10 w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center border border-white/10">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="backdrop-blur-sm bg-white/5 p-4 md:p-6 rounded-xl border border-white/10">
              <h3 className="text-sm md:text-base font-bold text-white mb-3 md:mb-4">Newsletter</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3">Stay updated with our latest news</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 text-xs md:text-sm"
                />
                <button className="backdrop-blur-sm bg-gradient-to-r from-purple-500/80 to-blue-500/80 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition border border-white/10 text-xs md:text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <hr className="border-white/10 my-6 md:my-8" />
          
          <p className="text-center text-gray-400 text-xs md:text-sm">
            © 2026 DrukOptix AI. All rights reserved. Built with 
            <span className="text-red-400 mx-1">❤️</span> 
            in Bhutan
          </p>
        </div>
      </div>
    </footer>
  )
}