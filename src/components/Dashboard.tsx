import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  AlertCircle,
  ArrowRight,
  Calendar,
  CalendarDays, 
  ChevronRight, 
  Clock, 
  Download, 
  FileCheck, 
  FileText, 
  Globe, 
  HelpCircle, 
  Info,
  Landmark, 
  CreditCard, 
  Settings, 
  Shield, 
  ThumbsUp, 
  Upload, 
  User, 
  MessageSquare,
  Bell,
  CheckCircle2,
  PlusCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ApplicationStatus from "./ApplicationStatus";
import InstructionsCard from "./InstructionsCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// SVG Background Component
const BackgroundSVG = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <svg className="absolute top-0 right-0 opacity-10" width="350" height="350" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0047AB" d="M38.9,-65.7C49.1,-57.1,55.3,-44.4,63.9,-31.7C72.6,-19,83.7,-6.1,83.7,6.8C83.6,19.6,72.4,32.6,60.8,42.1C49.2,51.7,37.3,57.9,24.5,63.9C11.7,70,-2,76,-16.7,75.3C-31.5,74.6,-47.2,67.1,-57.9,55.4C-68.5,43.7,-74.1,27.7,-75.7,11.2C-77.3,-5.3,-75,-22.4,-67.9,-37.2C-60.9,-52,-49.2,-64.6,-35.8,-71.8C-22.4,-78.9,-7.5,-80.5,4.2,-76.7C16,-72.9,28.7,-74.4,38.9,-65.7Z" transform="translate(100 100)" />
    </svg>
    <svg className="absolute bottom-0 left-0 opacity-10" width="350" height="350" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF8F00" d="M27.9,-48.2C35.6,-39.2,41,-30.3,49.1,-20.8C57.2,-11.3,68,–1.2,72.6,9.8C77.1,20.7,75.4,37.6,66.4,48C57.3,58.5,41.1,62.6,27,60.8C12.9,59,1,51.3,-12.8,48.3C-26.6,45.3,-42.3,47,-53.8,40.8C-65.3,34.7,-72.6,20.8,-72.1,7.6C-71.5,-5.5,-63.2,-18,-55.9,-31C-48.7,-44,-42.4,-57.7,-32.1,-65.4C-21.7,-73.2,-7.2,-75.1,1.6,-77.8C10.4,-80.6,20.2,-57.1,27.9,-48.2Z" transform="translate(100 100)" />
    </svg>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
    <motion.div 
      className="h-full bg-gradient-to-r from-green-400 to-emerald-500" 
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [viewAll, setViewAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Application data
  const applications = [
    {
      id: "PSP123456789",
      type: "New Passport",
      status: "In Progress",
      submittedOn: "2023-05-15",
      lastUpdated: "2023-05-20",
      progress: 50,
    }
  ];

  const applicationData = {
    id: "PSP123456789",
    type: "New Passport",
    submittedDate: "April 28, 2025",
    currentStatus: "In Progress",
    appointmentDate: "May 10, 2025 (10:30 AM)",
    steps: [
      {
        name: "Application Submission",
        status: "completed" as "completed" | "current" | "pending",
        date: "April 28, 2025",
      },
      {
        name: "Payment Confirmation",
        status: "completed" as "completed" | "current" | "pending",
        date: "April 28, 2025",
      },
      {
        name: "Document Verification",
        status: "current" as "completed" | "current" | "pending",
      },
      {
        name: "Biometric & Photo Capture",
        status: "pending" as "completed" | "current" | "pending",
      },
      {
        name: "Police Verification",
        status: "pending" as "completed" | "current" | "pending",
      },
      {
        name: "Passport Processing",
        status: "pending" as "completed" | "current" | "pending",
      },
      {
        name: "Passport Dispatch",
        status: "pending" as "completed" | "current" | "pending",
      },
    ],
  };

  const upcomingAppointment = {
    date: "May 10, 2025",
    time: "10:30 AM - 11:00 AM",
    location: "Passport Seva Kendra, Delhi",
    address: "Bhikaji Cama Place, New Delhi, Delhi 110066",
    requiredDocuments: [
      "Original Aadhaar Card",
      "Original Birth Certificate",
      "Address Proof",
      "Application Receipt",
    ],
  };

  const notifications = [
    {
      id: 1,
      title: "Document Verification In Progress",
      message: "Your documents are currently being verified. This process typically takes 1-2 business days.",
      date: "May 2, 2025",
      read: false,
      type: "info",
    },
    {
      id: 2,
      title: "Payment Confirmed",
      message: "We have received your payment of ₹1,500 for your passport application.",
      date: "April 28, 2025",
      read: true,
      type: "success",
    },
    {
      id: 3,
      title: "Application Submitted Successfully",
      message: "Your passport application has been successfully submitted.",
      date: "April 28, 2025",
      read: true,
      type: "success",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: "Passport Renewal",
      location: "Passport Seva Kendra, Mumbai",
      applicationId: "PSP987654321",
      date: "May 15, 2025",
      time: "11:00 AM - 11:30 AM",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const handleMarkAllRead = () => {
    // Frontend functionality for marking all notifications as read
    console.log("Marking all notifications as read");
    // In a real app, this would update state and possibly call an API
  };

  const handleNewApplication = () => {
    // Redirect to new application page or open modal
    console.log("Starting new application");
    // In a real app, this would redirect or open a modal
  };

  const handleAddToCalendar = () => {
    // Frontend functionality for adding appointment to calendar
    console.log("Adding appointment to calendar");
    // In a real app, this might interact with calendar APIs
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg className="animate-spin h-12 w-12 text-navy-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-navy-800 font-medium">Loading your dashboard...</p>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="py-10 relative bg-gradient-to-b from-white to-gray-50">
          <BackgroundSVG />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1 text-navy-900 flex items-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-navy-600 to-navy-800 text-white w-10 h-10 rounded-full"
                  >
                    <User className="h-5 w-5" />
                  </motion.span>
                  Welcome, Rahul
                </h1>
                <p className="text-muted-foreground">Manage your passport applications and appointments</p>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  onClick={handleNewApplication} 
                  className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white rounded-full shadow-lg shadow-saffron-200 transition-all duration-300 px-6"
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> New Application
                </Button>
              </motion.div>
            </motion.div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <TabsList className="bg-white border border-gray-100 p-1 rounded-full shadow-sm mx-auto flex justify-center overflow-x-auto">
                  <TabsTrigger 
                    value="overview"
                    className="data-[state=active]:bg-navy-700 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="applications"
                    className="data-[state=active]:bg-navy-700 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    My Applications
                  </TabsTrigger>
                  <TabsTrigger 
                    value="appointments"
                    className="data-[state=active]:bg-navy-700 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    Appointments
                  </TabsTrigger>
                  <TabsTrigger 
                    value="profile"
                    className="data-[state=active]:bg-navy-700 data-[state=active]:text-white rounded-full transition-all duration-300"
                  >
                    My Profile
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              <TabsContent value="overview" className="mt-8">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <Card className="overflow-hidden border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3 bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                        <CardTitle className="text-lg flex items-center gap-2 text-navy-800">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <FileText className="h-5 w-5 text-navy-600" />
                          </div>
                          <span>Active Applications</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-5">
                        <div className="flex items-end gap-2">
                          <div className="text-3xl font-bold text-navy-900">{applications.length}</div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 rounded-full">Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          You have {applications.length} application in progress
                        </p>
                        
                        <div className="mt-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-navy-700 font-medium">Progress</span>
                            <span>{applications[0].progress}%</span>
                          </div>
                          <ProgressBar progress={applications[0].progress} />
                        </div>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto mt-4 text-navy-700 hover:text-navy-900 transition-colors"
                          onClick={() => setActiveTab("applications")}
                        >
                          View All <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3 bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                        <CardTitle className="text-lg flex items-center gap-2 text-navy-800">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <Calendar className="h-5 w-5 text-navy-600" />
                          </div>
                          <span>Upcoming Appointment</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-5">
                        <div className="text-lg font-bold text-navy-900 flex items-center gap-2">
                          <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          {upcomingAppointment.date}
                        </div>
                        <div className="text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-1">
                          {upcomingAppointment.time}
                        </div>
                        <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-gray-400" />
                          {upcomingAppointment.location}
                        </p>
                        
                        <div className="flex justify-between mt-4">
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-navy-700 hover:text-navy-900 transition-colors"
                            onClick={() => setActiveTab("appointments")}
                          >
                            View Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                  <Calendar className="h-3.5 w-3.5" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Add to Calendar</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3 bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                        <CardTitle className="text-lg flex items-center gap-2 text-navy-800">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <Bell className="h-5 w-5 text-navy-600" />
                          </div>
                          <span>Notifications</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-5">
                        <div className="flex items-end gap-2">
                          <div className="text-3xl font-bold text-navy-900">{notifications.length}</div>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full">
                            {notifications.filter(n => !n.read).length} New
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          You have {notifications.filter(n => !n.read).length} unread notifications
                        </p>
                        
                        <div className="mt-4 space-y-2">
                          {notifications.filter(n => !n.read).slice(0, 1).map(notification => (
                            <div 
                              key={notification.id}
                              className="bg-blue-50 border border-blue-100 rounded-lg p-2 text-xs flex items-start gap-2"
                            >
                              <Info className="h-4 w-4 text-blue-500 mt-0.5" />
                              <div>
                                <p className="font-medium text-blue-800">{notification.title}</p>
                                <p className="text-blue-700 line-clamp-1">{notification.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto mt-4 text-navy-700 hover:text-navy-900 transition-colors"
                        >
                          View All <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <ApplicationStatus application={applicationData} />
                    </div>
                    
                    <div className="space-y-6">
                      <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 flex flex-row items-center gap-3 pb-3 border-b border-gray-100">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <Clock className="h-5 w-5 text-blue-600" />
                          </div>
                          <CardTitle className="text-lg text-navy-800">Your Appointment</CardTitle>
                        </CardHeader>
                        <CardContent className="p-5">
                          <motion.div 
                            className="space-y-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                                <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                  <p className="text-xs text-blue-700 font-medium">Date</p>
                                  <p className="font-semibold text-navy-800">{upcomingAppointment.date}</p>
                                </div>
                              </div>
                              
                              <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                  <p className="text-xs text-blue-700 font-medium">Time</p>
                                  <p className="font-semibold text-navy-800">{upcomingAppointment.time}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                              <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                              <div>
                                <p className="text-xs text-blue-700 font-medium">Location</p>
                                <p className="font-semibold text-navy-800">{upcomingAppointment.location}</p>
                                <p className="text-xs text-gray-600 mt-1">{upcomingAppointment.address}</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-end">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="text-xs rounded-full hover:bg-blue-50"
                                      onClick={handleAddToCalendar}
                                    >
                                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                                      Add to Calendar
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="text-xs">Add appointment to your calendar</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 flex flex-row items-center gap-3 pb-3 border-b border-gray-100">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <FileText className="h-5 w-5 text-emerald-600" />
                          </div>
                          <CardTitle className="text-lg text-navy-800">Required Documents</CardTitle>
                        </CardHeader>
                        <CardContent className="p-5">
                          <motion.ul
                            className="space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {upcomingAppointment.requiredDocuments.map((document, index) => (
                              <motion.li 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="flex items-center gap-2"
                              >
                                <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                </div>
                                <span className="text-sm text-navy-800">{document}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                          
                          <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-amber-800">Important</p>
                                <p className="text-xs text-amber-700">
                                  Please bring original documents along with photocopies. All documents must be valid and not expired.
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="mt-8">
                    <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                      <CardHeader className="border-b bg-gradient-to-r from-amber-50 to-amber-100">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2 text-navy-800">
                          <div className="bg-white p-2 rounded-full shadow-sm">
                            <CalendarDays className="h-5 w-5 text-amber-600" />
                          </div>
                          Upcoming Appointments
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        {upcomingAppointments.length > 0 ? (
                          <div className="space-y-4">
                            {upcomingAppointments.map((appointment) => (
                              <motion.div 
                                key={appointment.id} 
                                className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-amber-100/70 border border-amber-100 rounded-xl"
                                whileHover={{ scale: 1.01, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              >
                                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                                  <CalendarDays className="h-6 w-6 text-amber-600" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-medium text-navy-900">{appointment.type}</h4>
                                      <p className="text-sm text-gray-600">{appointment.location}</p>
                                    </div>
                                    <Badge variant="outline" className="text-xs bg-white border-amber-200 text-amber-800">
                                      {appointment.applicationId}
                                    </Badge>
                                  </div>
                                  <div className="mt-2 flex items-center text-sm">
                                    <CalendarDays className="h-4 w-4 mr-1.5 text-amber-500" />
                                    <span className="font-medium">{appointment.date}, {appointment.time}</span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                            <div className="flex justify-end mt-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="text-xs rounded-full hover:bg-amber-50"
                                onClick={handleAddToCalendar}
                              >
                                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                                Add to Calendar
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <motion.div 
                            className="text-center py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                              <CalendarDays className="h-8 w-8 text-amber-500" />
                            </div>
                            <h3 className="font-medium text-navy-800 mb-1.5">No Upcoming Appointments</h3>
                            <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">You don't have any scheduled appointments. Would you like to schedule a new one?</p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="rounded-full hover:bg-amber-50 border-amber-200 text-amber-800"
                            >
                              Schedule Appointment
                            </Button>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-gray-100/60 rounded-xl shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <div>
                          <CardTitle>My Applications</CardTitle>
                          <CardDescription>
                            View and manage all your passport applications
                          </CardDescription>
                        </div>
                        <Button className="bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white rounded-full w-full sm:w-auto">
                          <PlusCircle className="mr-2 h-4 w-4" /> New Application
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ApplicationStatus application={applicationData} />
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="appointments" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-gray-100/60 rounded-xl shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                        <div>
                          <CardTitle>My Appointments</CardTitle>
                          <CardDescription>
                            Manage your scheduled appointments
                          </CardDescription>
                        </div>
                        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full w-full sm:w-auto">
                          <Calendar className="mr-2 h-4 w-4" /> New Appointment
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 flex flex-row items-center gap-3 pb-3 border-b border-gray-100">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                              <Clock className="h-5 w-5 text-blue-600" />
                            </div>
                            <CardTitle className="text-lg text-navy-800">Your Appointment</CardTitle>
                          </CardHeader>
                          <CardContent className="p-5">
                            <div className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <div>
                                    <p className="text-xs text-blue-700 font-medium">Date</p>
                                    <p className="font-semibold text-navy-800">{upcomingAppointment.date}</p>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                                  <div>
                                    <p className="text-xs text-blue-700 font-medium">Time</p>
                                    <p className="font-semibold text-navy-800">{upcomingAppointment.time}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="bg-blue-50/50 rounded-lg p-3 flex items-start gap-2.5">
                                <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
                                <div>
                                  <p className="text-xs text-blue-700 font-medium">Location</p>
                                  <p className="font-semibold text-navy-800">{upcomingAppointment.location}</p>
                                  <p className="text-xs text-gray-600 mt-1">{upcomingAppointment.address}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                          <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 flex flex-row items-center gap-3 pb-3 border-b border-gray-100">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                              <FileText className="h-5 w-5 text-emerald-600" />
                            </div>
                            <CardTitle className="text-lg text-navy-800">Required Documents</CardTitle>
                          </CardHeader>
                          <CardContent className="p-5">
                            <ul className="space-y-2.5 mb-5">
                              {upcomingAppointment.requiredDocuments.map((document, index) => (
                                <li 
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                  </div>
                                  <span className="text-sm text-navy-800">{document}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <motion.div 
                          className="flex flex-col sm:flex-row justify-end gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Button 
                            variant="outline" 
                            className="rounded-full hover:bg-amber-50 border-amber-200 text-amber-800"
                          >
                            <Clock className="mr-2 h-4 w-4" />
                            Reschedule
                          </Button>
                          <Button 
                            variant="outline" 
                            className="rounded-full hover:bg-red-50 border-red-200 text-red-800"
                          >
                            Cancel Appointment
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="profile" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-gray-100/60 rounded-xl shadow-sm overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-navy-50 to-navy-100 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="bg-navy-700 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                          R
                        </div>
                        <div>
                          <CardTitle>My Profile</CardTitle>
                          <CardDescription>
                            View and update your personal information
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <p className="text-sm text-muted-foreground">Full Name</p>
                            <p className="font-medium">Rahul Singh</p>
                          </div>
                          <div className="space-y-1.5">
                            <p className="text-sm text-muted-foreground">Email Address</p>
                            <p className="font-medium">rahul.singh@example.com</p>
                          </div>
                          <div className="space-y-1.5">
                            <p className="text-sm text-muted-foreground">Phone Number</p>
                            <p className="font-medium">+91 98765 43210</p>
                          </div>
                          <div className="space-y-1.5">
                            <p className="text-sm text-muted-foreground">Date of Birth</p>
                            <p className="font-medium">15 May 1985</p>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="font-medium mb-3">Address Information</h3>
                          <p className="text-sm mb-4">
                            123, Sector 15, Vasant Kunj, New Delhi - 110070
                          </p>
                          <Button className="rounded-full bg-navy-700 hover:bg-navy-800 text-white">
                            <Settings className="mr-2 h-4 w-4" />
                            Edit Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>

            <motion.div 
              className="mt-10 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-blue-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg font-semibold flex items-center gap-2">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          <Bell className="h-5 w-5 text-blue-600" />
                        </div>
                        <span>Notifications</span>
                      </CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 px-3 text-xs hover:bg-blue-200 hover:text-blue-800 rounded-full"
                        onClick={handleMarkAllRead}
                      >
                        Mark All Read
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      <AnimatePresence>
                        {notifications.map((notification, index) => (
                          <motion.div 
                            key={notification.id} 
                            className={`p-4 ${notification.read ? '' : 'bg-blue-50'} hover:bg-gray-50 transition-colors`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            exit={{ opacity: 0, height: 0 }}
                            whileHover={{ backgroundColor: notification.read ? 'rgba(243, 244, 246, 1)' : 'rgba(219, 234, 254, 1)' }}
                          >
                            <div className="flex gap-3">
                              <div className={`flex-shrink-0 rounded-full w-8 h-8 flex items-center justify-center
                                ${notification.type === 'success' 
                                  ? 'bg-green-100 text-green-600' 
                                  : notification.type === 'warning' 
                                    ? 'bg-amber-100 text-amber-600' 
                                    : 'bg-blue-100 text-blue-600'
                                }`}
                              >
                                {notification.type === 'success' ? (
                                  <ThumbsUp className="h-4 w-4" />
                                ) : notification.type === 'warning' ? (
                                  <AlertCircle className="h-4 w-4" />
                                ) : (
                                  <Info className="h-4 w-4" />
                                )}
                              </div>
                              <div>
                                <h4 className={`font-medium text-sm ${notification.read ? 'text-gray-800' : 'text-navy-800'}`}>
                                  {notification.title}
                                </h4>
                                <p className="text-xs text-gray-600 mt-0.5">{notification.message}</p>
                                <div className="flex justify-between items-center mt-2">
                                  <p className="text-xs text-gray-400">{notification.date}</p>
                                  {!notification.read && (
                                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-[10px] px-1.5 py-0 h-4 rounded-full">New</Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      <div className="p-3 text-center">
                        <Button variant="link" size="sm" className="text-xs">
                          View All Notifications
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <div className="bg-white p-2 rounded-full shadow-sm">
                        <Activity className="h-5 w-5 text-purple-600" />
                      </div>
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <motion.div 
                        className="border rounded-xl p-4 bg-gradient-to-b from-white to-gray-50 hover:from-saffron-50 hover:to-saffron-100 hover:border-saffron-200 transition-all cursor-pointer flex flex-col items-center justify-center text-center h-28 shadow-sm hover:shadow"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/apply/new")}
                      >
                        <div className="bg-saffron-100 p-2 rounded-full mb-2">
                          <CreditCard className="h-5 w-5 text-saffron-600" />
                        </div>
                        <span className="text-sm font-medium text-navy-800">New Passport</span>
                      </motion.div>
                      
                      <motion.div 
                        className="border rounded-xl p-4 bg-gradient-to-b from-white to-gray-50 hover:from-blue-50 hover:to-blue-100 hover:border-blue-200 transition-all cursor-pointer flex flex-col items-center justify-center text-center h-28 shadow-sm hover:shadow"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/apply/renew")}
                      >
                        <div className="bg-blue-100 p-2 rounded-full mb-2">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-navy-800">Renew Passport</span>
                      </motion.div>
                      
                      <motion.div 
                        className="border rounded-xl p-4 bg-gradient-to-b from-white to-gray-50 hover:from-green-50 hover:to-green-100 hover:border-green-200 transition-all cursor-pointer flex flex-col items-center justify-center text-center h-28 shadow-sm hover:shadow"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/track")}
                      >
                        <div className="bg-green-100 p-2 rounded-full mb-2">
                          <Activity className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-navy-800">Track Status</span>
                      </motion.div>
                      
                      <motion.div 
                        className="border rounded-xl p-4 bg-gradient-to-b from-white to-gray-50 hover:from-purple-50 hover:to-purple-100 hover:border-purple-200 transition-all cursor-pointer flex flex-col items-center justify-center text-center h-28 shadow-sm hover:shadow"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate("/documents")}
                      >
                        <div className="bg-purple-100 p-2 rounded-full mb-2">
                          <Upload className="h-5 w-5 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-navy-800">Upload Documents</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border border-gray-100/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-5 items-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <MessageSquare className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-navy-900">Need Help?</h3>
                        <p className="text-sm text-gray-600 mt-1 max-w-lg">
                          Contact our support team for assistance with your passport application. We're available 24/7 to help you with any questions or issues.
                        </p>
                        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                          <Button size="sm" className="rounded-full bg-navy-700 hover:bg-navy-800 text-white">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Contact Support
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="rounded-full w-full"
                            onClick={() => navigate("/faqs")}
                          >
                            <HelpCircle className="mr-2 h-4 w-4" />
                            View FAQs
                          </Button>
                        </div>
                      </div>
                      
                      <div className="hidden md:block">
                        <div className="relative">
                          <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                            <path d="M126.5 32.5C126.5 46.031 115.531 57 102 57C88.469 57 77.5 46.031 77.5 32.5C77.5 18.969 88.469 8 102 8C115.531 8 126.5 18.969 126.5 32.5Z" fill="#EBF5FF" stroke="#BFDBFE"/>
                            <path d="M63.5 70.5C63.5 84.031 52.531 95 39 95C25.469 95 14.5 84.031 14.5 70.5C14.5 56.969 25.469 46 39 46C52.531 46 63.5 56.969 63.5 70.5Z" fill="#EBF5FF" stroke="#BFDBFE"/>
                          </svg>
                          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#2563EB"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
