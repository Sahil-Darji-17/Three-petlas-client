import { 
  UserGroupIcon, 
  ClockIcon, 
  StarIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';
import Team from './Team';

const stats = [
  {
    icon: UserGroupIcon,
    number: "5000+",
    label: "Patients Treated",
    description: "Successfully helped thousands of patients recover and improve their health"
  },
  {
    icon: ClockIcon,
    number: "10+",
    label: "Years Experience",
    description: "Over a decade of expertise in physiotherapy and rehabilitation"
  },
  {
    icon: StarIcon,
    number: "98%",
    label: "Success Rate",
    description: "High success rate in patient recovery and satisfaction"
  },
  {
    icon: ShieldCheckIcon,
    number: "100%",
    label: "Certified Experts",
    description: "All our physiotherapists are certified and experienced professionals"
  }
];

const features = [
  {
    title: "Personalized Care",
    description: "Every treatment plan is customized to your specific needs and goals",
    icon: "🎯"
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art equipment and facilities for optimal treatment",
    icon: "🏥"
  },
  {
    title: "Expert Team",
    description: "Experienced physiotherapists with specialized training",
    icon: "👨‍⚕️"
  },
  {
    title: "Convenient Location",
    description: "Easy to reach location with flexible appointment timings",
    icon: "📍"
  },
  {
    title: "Affordable Pricing",
    description: "Competitive pricing with various payment options available",
    icon: "💰"
  },
  {
    title: "Follow-up Care",
    description: "Continuous support and follow-up to ensure long-term results",
    icon: "📞"
  }
];

export default function WhyChooseUs() {
  return (
    <>
      <section id="about" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Why Choose Three Petals?
            </h2>
            <p className="text-xl text-orange-600 max-w-3xl mx-auto">
              We combine expertise, experience, and personalized care to deliver exceptional results 
              for our patients. Your health and recovery are our top priorities.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-orange-600 mb-3">
                  {stat.label}
                </div>
                <p className="text-orange-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-orange-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied patients who have transformed their health with our expert care. 
                Book your consultation today and take the first step towards better health.
              </p>
              <button className="bg-white text-orange-600 hover:bg-orange-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
} 