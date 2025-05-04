import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  ChevronDown, 
  Globe, 
  HelpCircle, 
  Mail, 
  Shield, 
  FileText,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); 
  const location = useLocation();

  const mainNavItems = [
    { 
      title: "Passport Services", 
      href: "/services" 
    },
    { 
      title: "Track Application", 
      href: "/track" 
    },
    { 
      title: "Document Requirements", 
      href: "/documents" 
    },
    { 
      title: "Passport Offices", 
      href: "/offices" 
    },
    { 
      title: "Contact Us", 
      href: "#",
      items: [
        {
          title: "Help & Support",
          href: "/help",
          description: "Get assistance with your queries",
          icon: <HelpCircle className="h-5 w-5 text-navy-600" />
        },
        {
          title: "Feedback",
          href: "/feedback",
          description: "Share your experience with us",
          icon: <Mail className="h-5 w-5 text-navy-600" />
        }
      ]
    },
  ];

  const quickNavItems = [
    { title: "FAQs", href: "/faqs" },
    { title: "Fee Calculator", href: "/fees" },
  ];

  const isActiveLink = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleSubItemClick = (href) => {
    setActiveTab(href); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white border-b transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top Bar */}
      <div className="relative bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 text-white py-2.5 overflow-hidden">
        <div className="container flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-3 text-xs md:text-sm">
            <span className="px-2.5 py-1.5 rounded-full hover:bg-white/10 transition-colors duration-300">
              Ministry of External Affairs
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs md:text-sm">
            <motion.button 
              className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1.5 rounded-full hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">English</span>
              <ChevronDown className="h-3 w-3 ml-0.5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.div 
        className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container flex justify-between items-center">
          {/* Text Logo */}
          <Link to="/" className="group flex items-center gap-3 relative">
            <div className="hidden sm:block">
              <h1 className="font-bold text-navy-900 text-lg leading-tight tracking-tight">
                Passport Seva
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-saffron-400 to-green-india-500 transition-all duration-300"></div>
              </h1>
              <p className="text-xs text-navy-600 font-medium">Ministry of External Affairs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  item.items ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger 
                        className={cn(
                          "h-auto py-2 px-4 text-sm font-medium rounded-full transition-all duration-300",
                          activeTab.startsWith(item.href) 
                            ? "text-white bg-gradient-to-r from-navy-600 to-navy-700 shadow-md" 
                            : "text-navy-700 hover:bg-navy-50"
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="mt-2">
                        <motion.div 
                          className="w-[400px] lg:w-[500px] p-5 rounded-2xl border border-gray-100 shadow-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="grid grid-cols-1 gap-3">
                            {item.items.map((subItem) => (
                              <NavigationMenuLink asChild key={subItem.title}>
                                <Link 
                                  to={subItem.href}
                                  onClick={() => handleSubItemClick(subItem.href)} 
                                  className="flex items-start gap-3 rounded-xl p-3 hover:bg-gray-50 transition-colors group"
                                >
                                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-50 to-navy-100 text-navy-700 shadow-sm group-hover:scale-110 transition-transform duration-200">
                                    {subItem.icon}
                                  </span>
                                  <div>
                                    <div className="font-medium text-navy-900 group-hover:text-navy-700">{subItem.title}</div>
                                    <p className="text-sm text-gray-600">{subItem.description}</p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </motion.div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link 
                          to={item.href}
                          onClick={() => handleSubItemClick(item.href)}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                ))}
                {/* Add Dashboard link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </motion.div>

      {/* Sub Navbar */}
      <div className="hidden md:block bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-gray-100">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {quickNavItems.map((item) => (
                <Link 
                  key={item.title}
                  to={item.href}
                  className="py-2.5 text-sm font-medium relative group"
                >
                  <span className={`${isActiveLink(item.href) ? 'text-navy-700' : 'text-gray-600 group-hover:text-navy-600'} transition-colors duration-300`}>
                    {item.title}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-saffron-400 to-green-india-500 transition-all duration-300 ${isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
