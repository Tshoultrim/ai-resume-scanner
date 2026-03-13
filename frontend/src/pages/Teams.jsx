import TeamCard from '../components/TeamCard'

export default function Teams() {
  const teamData = [
    {
      id: 1,
      name: 'Development Team',
      role: 'Software Development',
      description: 'Building robust and scalable applications using modern technologies',
      icon: '💻',
      members: [
        { id: 1, name: 'John Doe', role: 'Frontend Developer', image: null },
        { id: 2, name: 'Jane Smith', role: 'Backend Developer', image: null },
        { id: 3, name: 'Mike Johnson', role: 'Full Stack Developer', image: null },
        { id: 4, name: 'Sarah Williams', role: 'DevOps Engineer', image: null },
        { id: 5, name: 'Tom Brown', role: 'QA Engineer', image: null },
      ]
    },
    {
      id: 2,
      name: 'Design Team',
      role: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences that users love',
      icon: '🎨',
      members: [
        { id: 6, name: 'Emma Davis', role: 'UI Designer', image: null },
        { id: 7, name: 'Alex Martinez', role: 'UX Designer', image: null },
        { id: 8, name: 'Lisa Anderson', role: 'Graphic Designer', image: null },
      ]
    },
    {
      id: 3,
      name: 'Management Team',
      role: 'Project & People Management',
      description: 'Leading teams and ensuring successful project delivery',
      icon: '📊',
      members: [
        { id: 9, name: 'Robert Taylor', role: 'Project Manager', image: null },
        { id: 10, name: 'Catherine Lee', role: 'Product Manager', image: null },
        { id: 11, name: 'David Wilson', role: 'HR Manager', image: null },
      ]
    }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header with Glass Effect */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
        <div className="relative backdrop-blur-xl bg-white/5 border-y border-white/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Our Teams
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the talented people who make it all happen
            </p>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <div className="container mx-auto px-4 py-20">
        {teamData.map((team) => (
          <section key={team.id} className="mb-20">
            {/* Team Header with Glass Effect */}
            <div className="group relative max-w-3xl mb-10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{team.icon}</span>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{team.name}</h2>
                    <p className="text-gray-300 text-lg">{team.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {team.members.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))}
            </div>
            
            {/* Decorative divider */}
            {team.id !== teamData.length && (
              <div className="my-16 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="backdrop-blur-md bg-white/5 px-4 py-2 rounded-full text-white/60 text-sm border border-white/10">
                    Next Team
                  </span>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Stats Section with Glass Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '20+', label: 'Team Members', icon: '👥' },
              { number: '3', label: 'Departments', icon: '🏢' },
              { number: '100%', label: 'Dedicated', icon: '⚡' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:border-white/40 transition-all duration-300">
                  <span className="text-5xl mb-3 block">{stat.icon}</span>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 text-lg font-semibold">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}