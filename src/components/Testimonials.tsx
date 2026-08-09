'use client';

const testimonials = [
  {
    name: 'Raj Kumar',
    title: 'CEO, TechStart India',
    content: 'NewGig transformed our digital presence. The team was professional and delivered beyond our expectations.',
    image: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    title: 'Marketing Director, Digital Solutions',
    content: 'Exceptional service and support. They understood our needs perfectly and delivered a solution that boosted our sales by 40%.',
    image: '👩‍💼',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    title: 'Founder, StartUp Hub',
    content: 'Working with NewGig was a game-changer for our startup. Their expertise and dedication made all the difference.',
    image: '👨‍💻',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-dark text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
