import React from 'react';

const testimonials = [
  {
    quote: "RenewPlanner helped me understand the true value of installing solar panels on my property. The AI estimations were surprisingly accurate!",
    author: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote: "As a small business owner, I needed to make smart choices about renewable energy. This tool made the decision process crystal clear.",
    author: "Michael Chen",
    role: "Restaurant Owner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    quote: "The comparison feature saved me thousands by helping me find the most cost-effective renewable solution for my farm.",
    author: "Emma Rodriguez",
    role: "Agricultural Producer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people making informed decisions about their renewable energy projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-5xl text-green-200">"</div>
                <p className="text-gray-700 mb-6 relative z-10 pl-6 pt-2">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;