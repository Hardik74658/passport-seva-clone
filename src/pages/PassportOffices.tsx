import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Search, MapPin, Phone, Mail, Clock, ExternalLink, Map } from "lucide-react";

// Mock data for passport offices
const passportOffices = [
  {
    id: 1,
    name: "Delhi Regional Passport Office",
    type: "Regional",
    address: "CPV Division, Ministry of External Affairs, Patiala House Annexe, Tilak Marg, New Delhi - 110001",
    phone: "011-23387013",
    email: "rpo.delhi@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Delhi+Regional+Passport+Office",
    coordinates: { lat: 28.6139, lng: 77.2090 },
    website: "https://www.passportindia.gov.in",
    states: ["Delhi", "Haryana", "Uttar Pradesh"]
  },
  {
    id: 2,
    name: "Mumbai Regional Passport Office",
    type: "Regional",
    address: "4th Floor, New Marine Lines, Churchgate, Mumbai - 400020",
    phone: "022-22033300",
    email: "rpo.mumbai@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Mumbai+Regional+Passport+Office",
    coordinates: { lat: 18.9398, lng: 72.8354 },
    website: "https://www.passportindia.gov.in",
    states: ["Maharashtra", "Goa", "Daman and Diu"]
  },
  {
    id: 3,
    name: "Kolkata Regional Passport Office",
    type: "Regional",
    address: "4 Brabourne Road, Kolkata - 700001",
    phone: "033-22834676",
    email: "rpo.kolkata@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Kolkata+Regional+Passport+Office",
    coordinates: { lat: 22.5726, lng: 88.3639 },
    website: "https://www.passportindia.gov.in",
    states: ["West Bengal", "Sikkim", "Andaman and Nicobar Islands"]
  },
  {
    id: 4,
    name: "Chennai Regional Passport Office",
    type: "Regional",
    address: "Rayala Towers, 3rd Floor, Anna Salai, Chennai - 600002",
    phone: "044-28522500",
    email: "rpo.chennai@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Chennai+Regional+Passport+Office",
    coordinates: { lat: 13.0827, lng: 80.2707 },
    website: "https://www.passportindia.gov.in",
    states: ["Tamil Nadu", "Puducherry"]
  },
  {
    id: 5,
    name: "Ahmedabad Passport Seva Kendra",
    type: "PSK",
    address: "Gulbai Tekra, Ahmedabad - 380015",
    phone: "079-26305905",
    email: "psk.ahmedabad@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Ahmedabad+Passport+Seva+Kendra",
    coordinates: { lat: 23.0225, lng: 72.5714 },
    website: "https://www.passportindia.gov.in",
    states: ["Gujarat"]
  },
  {
    id: 6,
    name: "Bengaluru Passport Seva Kendra",
    type: "PSK",
    address: "80 Feet Road, Koramangala, Bengaluru - 560095",
    phone: "080-25704800",
    email: "psk.bengaluru@mea.gov.in",
    hours: "9:30 AM - 4:30 PM (Mon-Fri)",
    mapUrl: "https://maps.google.com/?q=Bengaluru+Passport+Seva+Kendra",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    website: "https://www.passportindia.gov.in",
    states: ["Karnataka"]
  }
];

const PassportOffices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOffices, setFilteredOffices] = useState(passportOffices);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredOffices(passportOffices);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = passportOffices.filter(
        office => 
          office.name.toLowerCase().includes(query) || 
          office.address.toLowerCase().includes(query) ||
          office.states.some(state => state.toLowerCase().includes(query))
      );
      setFilteredOffices(filtered);
    }
  }, [searchQuery]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-700 to-navy-900 text-white py-16">
          <div className="container">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Passport Offices in India</h1>
              <p className="text-lg max-w-2xl mx-auto text-gray-100">
                Find the nearest passport office or Passport Seva Kendra for your application needs
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search by city, state or office name..." 
                  className="pl-10 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-white/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-1 top-1 rounded-full h-10 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white border-none">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Offices List Section */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
              <TabsList className="w-full justify-start mb-6 overflow-x-auto flex-nowrap bg-navy-50">
                <TabsTrigger value="all">All Offices</TabsTrigger>
                <TabsTrigger value="regional">Regional Passport Offices</TabsTrigger>
                <TabsTrigger value="PSK">Passport Seva Kendras</TabsTrigger>
                <TabsTrigger value="POPSK">Post Office PSKs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOffices.length > 0 ? (
                    filteredOffices.map((office) => (
                      <motion.div 
                        key={office.id}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                          <div className="bg-navy-50 h-3"></div>
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-semibold text-lg text-navy-900">{office.name}</h3>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                  <MapPin className="h-4 w-4 mr-1 text-saffron-600" />
                                  <span>{office.address}</span>
                                </div>
                              </div>
                              <div className="bg-navy-100 text-navy-700 text-xs font-medium py-1 px-2 rounded-full">
                                {office.type}
                              </div>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2 text-navy-600" />
                                <span>{office.phone}</span>
                              </div>
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-navy-600" />
                                <span>{office.email}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-navy-600" />
                                <span>{office.hours}</span>
                              </div>
                            </div>
                            
                            <div className="mt-6 flex items-center justify-between">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-navy-700 border-navy-200 hover:bg-navy-50"
                                asChild
                              >
                                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                                  <Map className="h-4 w-4 mr-1" />
                                  View on Map
                                </a>
                              </Button>
                              
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-navy-700 hover:bg-navy-50"
                                asChild
                              >
                                <a href={office.website} target="_blank" rel="noopener noreferrer">
                                  Website
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">No offices found</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        We couldn't find any passport offices matching your search query. Please try a different search term.
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="regional" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOffices.filter(office => office.type === "Regional").length > 0 ? (
                    filteredOffices
                      .filter(office => office.type === "Regional")
                      .map((office) => (
                        <motion.div 
                          key={office.id}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {/* Same card as above */}
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <div className="bg-navy-50 h-3"></div>
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="font-semibold text-lg text-navy-900">{office.name}</h3>
                                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-4 w-4 mr-1 text-saffron-600" />
                                    <span>{office.address}</span>
                                  </div>
                                </div>
                                <div className="bg-navy-100 text-navy-700 text-xs font-medium py-1 px-2 rounded-full">
                                  {office.type}
                                </div>
                              </div>
                              
                              <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                  <Phone className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.phone}</span>
                                </div>
                                <div className="flex items-center">
                                  <Mail className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.email}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.hours}</span>
                                </div>
                              </div>
                              
                              <div className="mt-6 flex items-center justify-between">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="text-navy-700 border-navy-200 hover:bg-navy-50"
                                  asChild
                                >
                                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                                    <Map className="h-4 w-4 mr-1" />
                                    View on Map
                                  </a>
                                </Button>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-navy-700 hover:bg-navy-50"
                                  asChild
                                >
                                  <a href={office.website} target="_blank" rel="noopener noreferrer">
                                    Website
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p>No regional passport offices match your search criteria.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              {/* Similar TabsContent for PSK and POPSK */}
              <TabsContent value="PSK" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOffices.filter(office => office.type === "PSK").length > 0 ? (
                    filteredOffices
                      .filter(office => office.type === "PSK")
                      .map((office) => (
                        <motion.div 
                          key={office.id}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {/* Same card structure */}
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <div className="bg-navy-50 h-3"></div>
                            <CardContent className="p-6">
                              {/* Same card content as above */}
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="font-semibold text-lg text-navy-900">{office.name}</h3>
                                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="h-4 w-4 mr-1 text-saffron-600" />
                                    <span>{office.address}</span>
                                  </div>
                                </div>
                                <div className="bg-navy-100 text-navy-700 text-xs font-medium py-1 px-2 rounded-full">
                                  {office.type}
                                </div>
                              </div>
                              
                              <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                  <Phone className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.phone}</span>
                                </div>
                                <div className="flex items-center">
                                  <Mail className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.email}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-navy-600" />
                                  <span>{office.hours}</span>
                                </div>
                              </div>
                              
                              <div className="mt-6 flex items-center justify-between">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="text-navy-700 border-navy-200 hover:bg-navy-50"
                                  asChild
                                >
                                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                                    <Map className="h-4 w-4 mr-1" />
                                    View on Map
                                  </a>
                                </Button>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="text-navy-700 hover:bg-navy-50"
                                  asChild
                                >
                                  <a href={office.website} target="_blank" rel="noopener noreferrer">
                                    Website
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p>No Passport Seva Kendras match your search criteria.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="POPSK" className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOffices.filter(office => office.type === "POPSK").length > 0 ? (
                    filteredOffices
                      .filter(office => office.type === "POPSK")
                      .map((office) => (
                        <motion.div 
                          key={office.id}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {/* Same card structure */}
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            {/* Same card content */}
                          </Card>
                        </motion.div>
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p>No Post Office PSKs match your search criteria.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PassportOffices;
