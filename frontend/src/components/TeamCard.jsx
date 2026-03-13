export default function TeamCard({ name, role, description, image }) {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl md:rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300">
        <div className="flex flex-col md:flex-row h-auto">
          {/* Image container */}
          <div className="relative w-full md:w-32 lg:w-36 h-32 md:h-32 flex-shrink-0">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold text-white/50">{name.charAt(0)}</span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Role badge - hidden on mobile, shown on hover */}
            <div className="absolute bottom-2 left-2 opacity-0 md:opacity-100 md:group-hover:opacity-100 transition-opacity">
              <span className="backdrop-blur-md bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold text-white border border-white/30">
                {role}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-3 md:p-4 flex-1">
            <h3 className="text-base md:text-lg font-bold text-white mb-1">{name}</h3>
            {/* Mobile role badge */}
            <span className="md:hidden inline-block backdrop-blur-md bg-white/10 px-2 py-0.5 rounded-full text-xs font-semibold text-purple-200 border border-white/20 mb-2">
              {role}
            </span>
            {description && (
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                {description}
              </p>
            )}
            
            {/* Social links placeholder */}
            <div className="mt-2 md:mt-3 flex gap-2">
              <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center border border-white/20 transition">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </button>
              <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center border border-white/20 transition">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}