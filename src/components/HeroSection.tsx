import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
              Expert Physiotherapy & Fitness
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-orange-600 mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Health Journey
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-orange-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Expert physiotherapy, fitness training, and rehabilitation services. 
              Get personalized care to recover, strengthen, and achieve your health goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 w-full">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Book Free Consultation
              </Link>
              <Link 
                href="#services" 
                className="w-full sm:w-auto border-2 border-orange-300 hover:border-orange-600 text-orange-600 hover:text-orange-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center text-sm text-orange-600 w-full">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certified Physiotherapists
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Personalized Treatment Plans
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-4 sm:p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="bg-orange-50 rounded-xl p-2 sm:p-4 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-orange-600 text-sm sm:text-base">Physiotherapy</h3>
                    <p className="text-xs sm:text-sm text-orange-600">Pain Relief & Recovery</p>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-2 sm:p-4 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-orange-600 text-sm sm:text-base">Fitness Training</h3>
                    <p className="text-xs sm:text-sm text-orange-600">Strength & Conditioning</p>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-2 sm:p-4 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-orange-600 text-sm sm:text-base">Rehabilitation</h3>
                    <p className="text-xs sm:text-sm text-orange-600">Post-Surgery Care</p>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-2 sm:p-4 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-orange-600 text-sm sm:text-base">Wellness</h3>
                    <p className="text-xs sm:text-sm text-orange-600">Preventive Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 