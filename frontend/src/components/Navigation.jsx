import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center gap-4 md:gap-8 py-3 md:py-4 flex-wrap">
          {[
            { path: '/', label: 'HOME' },
            { path: '/about', label: 'ABOUT US' },
            { path: '/teams', label: 'TEAMS' },
            { path: '/privacy-policy', label: 'PRIVACY POLICY' }
          ].map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className="relative px-2 md:px-4 py-2 font-semibold text-white/90 hover:text-white transition group text-sm md:text-base"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 backdrop-blur-md bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 border border-white/10"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}