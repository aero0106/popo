import { ArrowRight, CheckCircle, Clock, Shield, DollarSign, Users, Star } from 'lucide-react';
import FAQSection from '../components/FAQSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Get your LLC formed in as little as 1-2 business days with our expedited service.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Transparent pricing starting at just $99. No hidden fees or surprises.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Bank-level security and 100% satisfaction guarantee for peace of mind.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support from LLC formation specialists ready to help.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Founder',
      content: 'OGS Solution made forming my LLC incredibly easy. The process was straightforward and completed in just 3 days!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Consultant',
      content: 'Best decision for my business. The Epic package included everything I needed, and support was outstanding.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Real Estate Investor',
      content: 'Professional, efficient, and affordable. I\'ve recommended OGS Solution to all my business partners.',
      rating: 5,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your State',
      description: 'Select the state where you want to form your LLC using our interactive tool.',
    },
    {
      number: '02',
      title: 'Select a Package',
      description: 'Pick the service package that best fits your business needs and budget.',
    },
    {
      number: '03',
      title: 'Complete the Form',
      description: 'Fill out our simple step-by-step form with your business information.',
    },
    {
      number: '04',
      title: 'We Handle Everything',
      description: 'Sit back and relax while we file your LLC and handle all the paperwork.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-20 transition-colors overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up-in">
              Start Your LLC Today
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-slide-up-in stagger-child-1">
              Form your Limited Liability Company in any U.S. state with confidence.
              Simple, affordable, and secure business formation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-in stagger-child-2">
              <button
                onClick={() => onNavigate('get-started')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-5 w-5 icon-bounce" />
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-500 transition-all font-semibold text-lg active:scale-95 hover:-translate-y-1"
              >
                Learn How It Works
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400 animate-slide-up-in stagger-child-3">
              <div className="flex items-center space-x-2 hover-glow p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 animate-bounce-soft" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow p-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 animate-bounce-soft" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose OGS Solution?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make LLC formation easy, fast, and affordable for entrepreneurs nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 card-hover animate-slide-up-in stagger-child-${(index % 5) + 1}`}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:animate-spin-slow" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Four simple steps to get your LLC up and running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`relative animate-slide-up-in stagger-child-${(index % 5) + 1}`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 card-hover group">
                  <div className="text-5xl font-bold text-blue-100 dark:text-blue-900/30 mb-4 group-hover:text-blue-200 dark:group-hover:text-blue-900/50 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-700 hover:w-12 hover:bg-blue-500 transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={() => onNavigate('get-started')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl inline-flex items-center space-x-2 active:scale-95 hover:-translate-y-1 group animate-pulse-glow"
            >
              <span>Start Your LLC Now</span>
              <ArrowRight className="h-5 w-5 icon-bounce" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who trust OGS Solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-all card-hover animate-slide-up-in stagger-child-${index + 1} group`}
              >
                <div className="flex mb-4 group-hover:scale-110 transition-transform origin-left">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-bounce-soft" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="py-20 bg-blue-600 dark:bg-blue-700 transition-colors overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-40 h-40 bg-white rounded-full animate-float-up"></div>
          <div className="absolute bottom-0 left-10 w-32 h-32 bg-white rounded-full animate-float-up" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up-in">
            Ready to Start Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-slide-up-in stagger-child-1">
            Join thousands of entrepreneurs who have successfully formed their LLCs with OGS Solution.
          </p>
          <button
            onClick={() => onNavigate('get-started')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:shadow-xl inline-flex items-center space-x-2 active:scale-95 hover:-translate-y-1 animate-slide-up-in stagger-child-2 group animate-pulse-glow"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5 icon-bounce" />
          </button>
        </div>
      </section>
    </div>
  );
}
