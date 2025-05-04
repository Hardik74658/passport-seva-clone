import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

interface ApplicationStatusProps {
  application: {
    id: string;
    type: string;
    submittedDate: string;
    currentStatus: string;
    appointmentDate?: string;
    steps: {
      name: string;
      status: "completed" | "current" | "pending";
      date?: string;
    }[];
  };
}

const ApplicationStatus = ({ application }: ApplicationStatusProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case "submitted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "verified":
      case "completed":
        return "bg-green-india-100 text-green-india-800 border-green-india-200";
      case "in progress":
        return "bg-saffron-100 text-saffron-800 border-saffron-200";
      case "pending":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

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
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-navy-50 to-navy-100 p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <motion.div 
              initial={{ x: -20, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-700">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              <CardTitle className="text-lg font-medium">Application #{application.id}</CardTitle>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className={`${getStatusColor(application.currentStatus)} text-sm px-3 py-1 rounded-full border shadow-sm`}>
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${
                    application.currentStatus.toLowerCase() === "completed" ? "bg-green-india-500" :
                    application.currentStatus.toLowerCase() === "submitted" ? "bg-blue-500" :
                    application.currentStatus.toLowerCase() === "in progress" ? "bg-saffron-500" : 
                    "bg-gray-500"
                  } animate-pulse`}></span>
                  {application.currentStatus}
                </span>
              </Badge>
            </motion.div>
          </div>
          <motion.div 
            className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Type: <span className="font-medium text-foreground">{application.type}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Submitted: <span className="font-medium text-foreground">{application.submittedDate}</span>
            </div>
            {application.appointmentDate && (
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Appointment: <span className="font-medium text-foreground">{application.appointmentDate}</span>
              </div>
            )}
          </motion.div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-700">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <h4 className="text-sm font-semibold">Application Progress</h4>
            </div>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {application.steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={itemVariants}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  {index !== application.steps.length - 1 && (
                    <div className="absolute top-6 left-3.5 w-0.5 h-full bg-gradient-to-b from-gray-200 to-gray-100"></div>
                  )}
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 ${
                        step.status === "completed" ? "bg-gradient-to-r from-green-india-500 to-green-india-600 text-white" :
                        step.status === "current" ? "bg-gradient-to-r from-saffron-500 to-saffron-600 text-white" :
                        "bg-gray-200 text-gray-500"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.status === "completed" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <span className="text-xs font-medium">{index + 1}</span>
                      )}
                    </motion.div>
                    <div className={`flex-1 pt-1 rounded-lg p-3 transition-all duration-300 ${isHovered === index ? 'bg-gray-50' : ''}`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="font-medium flex items-center gap-1.5">
                          {step.status === "current" && (
                            <span className="inline-block w-2 h-2 bg-saffron-500 rounded-full animate-pulse"></span>
                          )}
                          {step.name}
                        </div>
                        {step.date && (
                          <div className="text-xs text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-full">
                            {step.date}
                          </div>
                        )}
                      </div>
                      <div className={`text-sm ${
                        step.status === "completed" ? "text-green-india-600" : 
                        step.status === "current" ? "text-saffron-600" : 
                        "text-muted-foreground"
                      }`}>
                        {step.status === "completed" ? (
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            Completed
                          </span>
                        ) : step.status === "current" ? (
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 12L3 12"></path>
                              <path d="M15 5l7 7-7 7"></path>
                            </svg>
                            In Progress
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <Separator className="bg-gray-100" />
          
          <motion.div 
            className="p-4 sm:p-5 flex flex-wrap gap-3 justify-end"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              View Details
            </Button>
            <Button 
              size="sm" 
              className="bg-navy-700 hover:bg-navy-800 text-white rounded-full shadow-sm hover:shadow transition-all gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Receipt
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApplicationStatus;
