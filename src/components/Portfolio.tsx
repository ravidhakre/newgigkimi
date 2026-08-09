'use client';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '🛍️',
    description: 'Scalable e-commerce solution with advanced features',
  },
  {
    id: 2,
    title: 'Mobile Finance App',
    category: 'Mobile Development',
    image: '💰',
    description: 'Secure financial management application',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'Data Analytics',
    image: '📊',
    description: 'Real-time business intelligence platform',
  },
  {
    id: 4,
    title: 'Cloud Infrastructure',
    category: 'Cloud Services',
    image: '☁️',
    description: 'Enterprise-grade cloud deployment',
  },
  {
    id: 5,
    title: 'AI Chatbot Solution',
    category: 'AI & Automation',
    image: '🤖',
    description: 'Intelligent customer service automation',
  },
  {
    id: 6,
    title: 'Social Media Platform',
    category: 'Web Development',
    image: '👥',
    description: 'Community-driven social networking app',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of our latest and greatest projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary to-purple-600 h-48 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <p className="text-primary font-semibold text-sm mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-primary font-semibold hover:text-indigo-700 transition">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
