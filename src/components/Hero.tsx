
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-navy-800 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-900 to-navy-700 opacity-90"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Indian passport and globe"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Passport Journey,<br/> 
              <span className="text-saffron-400">Simplified</span>
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-lg">
              A modern platform for Indian passport services - applying, renewing, and tracking your passport application made easy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/apply">
                <Button className="bg-saffron-500 hover:bg-saffron-600 text-white">
                  Apply for Passport
                </Button>
              </Link>
              <Link to="/track">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Track Application
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-16 right-0 w-80 h-80 bg-saffron-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-16 w-72 h-72 bg-green-india-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-saffron-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Application Status</h3>
                    <p className="text-xs text-gray-300">Last updated: Just now</p>
                  </div>
                </div>
                <div className="text-green-india-400 text-sm font-medium">Active</div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Application Submitted</div>
                    <div className="text-xs text-green-india-400">Complete</div>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <div className="bg-green-india-500 h-1 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Document Verification</div>
                    <div className="text-xs text-green-india-400">In Progress</div>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <div className="bg-green-india-500 h-1 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Appointment Scheduled</div>
                    <div className="text-xs text-gray-400">Pending</div>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <div className="bg-gray-700 h-1 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Passport Processing</div>
                    <div className="text-xs text-gray-400">Pending</div>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-1">
                    <div className="bg-gray-700 h-1 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
