import { 
  HeartIcon, 
  BoltIcon, 
  CpuChipIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: HeartIcon,
    title: "Physiotherapy",
    description: "Comprehensive physiotherapy treatment for pain relief, injury recovery, and mobility improvement. Personalized care plans for optimal results.",
    features: ["Pain Management", "Injury Rehabilitation", "Mobility Training", "Manual Therapy"],
    color: "green",
    price: "From ₹800"
  },
  {
    icon: BoltIcon,
    title: "Fitness Training",
    description: "Customized fitness programs designed to build strength, improve endurance, and achieve your health and fitness goals.",
    features: ["Strength Training", "Cardio Fitness", "Weight Management", "Sports Conditioning"],
    color: "blue",
    price: "From ₹1000"
  },
  {
    icon: CpuChipIcon,
    title: "Neuro Rehabilitation",
    description: "Specialized rehabilitation for neurological conditions, stroke recovery, and brain injury rehabilitation with expert care.",
    features: ["Stroke Recovery", "Brain Injury Care", "Neurological Assessment", "Cognitive Training"],
    color: "purple",
    price: "From ₹1200"
  },
  {
    icon: SparklesIcon,
    title: "Wellness Programs",
    description: "Holistic wellness programs focusing on preventive care, stress management, and overall health optimization.",
    features: ["Preventive Care", "Stress Management", "Nutrition Guidance", "Lifestyle Coaching"],
    color: "teal",
    price: "From ₹600"
  }
];

export default function ServicesPreview() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-xl text-orange-600 max-w-3xl mx-auto">
            Comprehensive healthcare services tailored to your needs. From physiotherapy to fitness training, 
            we provide expert care to help you achieve optimal health and wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-orange-600 mb-2 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-orange-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-orange-600">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={
                  service.color === 'green'
                    ? 'w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300'
                    : service.color === 'blue'
                    ? 'w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300'
                    : service.color === 'purple'
                    ? 'w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300'
                    : 'w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-300'
                }
              >
                Book Appointment
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10 sm:mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2 sm:mb-4">
              Ready to Start Your Health Journey?
            </h3>
            <p className="text-orange-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Book a free consultation with our expert physiotherapists and get a personalized treatment plan.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 text-sm sm:text-base">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 