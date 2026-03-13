export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      {/* Content with Glass Effect */}
      <section className="container mx-auto px-4 py-16">
        <div className="group relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-50"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 hover:border-white/40 transition-all duration-300">
            
            {[
              {
                title: "1. Introduction",
                content: "Welcome to our Privacy Policy. We are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services."
              },
              {
                title: "2. Information We Collect",
                content: "We may collect information about you in a variety of ways. The information we may collect on the site includes:",
                list: ["Name and Email Address", "Phone Number", "Mailing Address", "IP Address", "Browser and Device Information"]
              },
              {
                title: "3. Use of Your Information",
                content: "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected from you for:",
                list: ["To improve our website and services", "To personalize your experience", "To allow us to better serve you", "To process transactions", "To send periodic emails"]
              },
              {
                title: "4. Protection of Your Information",
                content: "We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information."
              },
              {
                title: "5. Sharing Your Information",
                content: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential."
              },
              {
                title: "6. Cookies",
                content: "Our site may use cookies to enhance your user experience. You may choose to set your web browser to refuse cookies or alert you when cookies are being sent."
              },
              {
                title: "7. Changes to This Privacy Policy",
                content: "We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting to the website."
              },
              {
                title: "8. Contact Us",
                content: "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:"
              }
            ].map((section, index) => (
              <div key={index} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                <p className="text-gray-300 mb-4">{section.content}</p>
                
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.title === "8. Contact Us" && (
                  <div className="mt-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-gray-200 font-semibold mb-2">📧 Email: privacy@drukoptix.ai</p>
                    <p className="text-gray-200 font-semibold mb-2">📞 Phone: +1 (555) 123-4567</p>
                    <p className="text-gray-200 font-semibold">📍 Address: 123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}