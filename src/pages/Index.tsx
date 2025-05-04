import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import ServiceCards from "@/components/ServiceCards";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickActions />
        <ServiceCards />
        <NewsUpdates />
        
        {/* FAQ Teaser Section - Instead of full FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-navy-900">Common Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to frequently asked questions about passport services
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto text-center">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-medium text-lg mb-2">How long does it take to get a passport?</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Processing times vary by service type. Normal applications take 4-6 weeks, 
                    while Tatkaal services are processed within 1-3 working days.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-medium text-lg mb-2">What documents are required?</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    Required documents include proof of identity, address proof, 
                    date of birth certificate, and recent passport-sized photographs.
                  </p>
                </div>
              </div>
              
              <Link to="/faqs">
                <Button className="bg-navy-700 hover:bg-navy-800">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
