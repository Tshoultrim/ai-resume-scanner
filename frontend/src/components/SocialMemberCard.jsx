export default function SocialMemberCard({ name, role, image }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl md:rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center p-3 md:p-4">
          {/* Photo column */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mb-3 sm:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
            {image ? (
              <img
                src={image}
                alt={name}
                className="relative w-full h-full object-cover rounded-full border-2 border-white/30"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/80?text=${name.charAt(0)}`;
                }}
              />
            ) : (
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center border-2 border-white/30">
                <span className="text-xl md:text-2xl font-bold text-white">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          
          {/* Details column */}
          <div className="flex-1 sm:ml-4 text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold text-white mb-1">{name}</h3>
            <div className="inline-block backdrop-blur-md bg-white/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-1">
              <p className="text-xs md:text-sm font-semibold text-purple-200">{role}</p>
            </div>
            <p className="text-gray-300 text-xs flex items-center justify-center sm:justify-start gap-1">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Social member
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}