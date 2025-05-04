
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      title: "Apply for New Passport",
      description: "First-time passport application for Indian citizens",
      icon: (
        <div className="w-12 h-12 rounded-full bg-navy-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      url: "/apply/new",
    },
    {
      title: "Renew Passport",
      description: "Renew your existing passport that is expiring soon",
      icon: (
        <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saffron-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
      ),
      url: "/apply/renew",
    },
    {
      title: "Passport for Children",
      description: "Special application process for minors under 18 years",
      icon: (
        <div className="w-12 h-12 rounded-full bg-green-india-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-india-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      url: "/apply/minor",
    },
    {
      title: "Tatkaal Passport",
      description: "Expedited passport service for urgent requirements",
      icon: (
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      url: "/apply/tatkaal",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-navy-900">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of passport services designed to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="hover-card border-t-4 border-t-navy-600 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-navy-700 hover:text-navy-900 hover:bg-transparent">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-card bg-saffron-50 border-none">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saffron-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Book an Appointment</h3>
                <p className="text-sm text-muted-foreground mb-3">Schedule an appointment at your nearest Passport Seva Kendra</p>
                <Button className="bg-saffron-500 hover:bg-saffron-600 text-white">Book Now</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-card bg-green-india-50 border-none">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-india-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-india-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Document Advisor</h3>
                <p className="text-sm text-muted-foreground mb-3">Get a personalized list of documents required for your application</p>
                <Button className="bg-green-india-600 hover:bg-green-india-700 text-white">Check Requirements</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
