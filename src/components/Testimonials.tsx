import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Recovered from Back Pain",
    content: "Three Petals helped me recover from severe back pain. The physiotherapy treatment was excellent and the staff was very caring. I'm now pain-free and back to my normal activities!",
    rating: 5,
    avatar: "PS",
    condition: "Back Pain"
  },
  {
    name: "Rajesh Kumar",
    role: "Post-Surgery Rehabilitation",
    content: "After my knee surgery, the rehabilitation program at Three Petals was outstanding. The therapists are highly skilled and the recovery was faster than expected. Highly recommended!",
    rating: 5,
    avatar: "RK",
    condition: "Knee Surgery"
  },
  {
    name: "Anita Patel",
    role: "Fitness Training Client",
    content: "The fitness training program helped me lose weight and build strength. The trainers are motivating and the results are amazing. I feel healthier and more confident now.",
    rating: 5,
    avatar: "AP",
    condition: "Weight Loss"
  },
  {
    name: "Suresh Reddy",
    role: "Stroke Recovery Patient",
    content: "The neuro rehabilitation program helped me regain mobility after my stroke. The therapists are patient and the treatment plan was perfect for my recovery journey.",
    rating: 5,
    avatar: "SR",
    condition: "Stroke Recovery"
  },
  {
    name: "Meera Singh",
    role: "Sports Injury Recovery",
    content: "As an athlete, I needed specialized care for my sports injury. Three Petals provided excellent treatment and I'm back to playing sports without any issues.",
    rating: 5,
    avatar: "MS",
    condition: "Sports Injury"
  },
  {
    name: "Vikram Malhotra",
    role: "Wellness Program Client",
    content: "The wellness program helped me manage stress and improve my overall health. The holistic approach and lifestyle guidance have made a significant difference in my life.",
    rating: 5,
    avatar: "VM",
    condition: "Stress Management"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-orange-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our patients have to say about their 
            experience and recovery journey with Three Petals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Condition Badge */}
              <div className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.condition}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-orange-600 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-orange-600">{testimonial.name}</div>
                  <div className="text-sm text-orange-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-8 h-8 text-orange-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-2">
              4.9/5 Average Rating
            </h3>
            <p className="text-orange-600 mb-6">
              Based on 500+ patient reviews
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-orange-600">Recovery Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-orange-600">Patient Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-orange-600">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-orange-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Happy Patients
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Experience the same exceptional care and results that our patients rave about. 
              Start your recovery journey today with Three Petals.
            </p>
            <button className="bg-white text-orange-600 hover:bg-orange-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
              Start Your Recovery Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 