
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

const NewsUpdates = () => {
  const news = [
    {
      title: "Policy Update: Simplified Renewal Process",
      date: "May 2, 2025",
      description: "The passport renewal process has been simplified. Applicants now need fewer documents for passport renewal.",
      tag: "Policy",
    },
    {
      title: "New Passport Seva Kendra Opens in Jaipur",
      date: "April 28, 2025",
      description: "A new Passport Seva Kendra has been inaugurated in Jaipur to serve the growing demand.",
      tag: "Announcement",
    },
    {
      title: "Extended Working Hours at Delhi Office",
      date: "April 20, 2025",
      description: "The Delhi Passport Office will now operate with extended hours on weekdays from 8 AM to 7 PM.",
      tag: "Service Update",
    },
  ];

  const notifications = [
    {
      title: "Scheduled Maintenance",
      date: "May 5, 2025",
      description: "The Passport Seva portal will be under maintenance from 1 AM to 5 AM IST. Please plan accordingly.",
      priority: "high",
    },
    {
      title: "Holiday Notice",
      date: "May 1, 2025",
      description: "All Passport Seva Kendras will remain closed on May 1, 2025 on account of Labor Day.",
      priority: "medium",
    },
    {
      title: "Fee Revision Notice",
      date: "April 15, 2025",
      description: "Passport application fees will be revised effective June 1, 2025. Check the fee calculator for details.",
      priority: "medium",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-navy-900">News & Updates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest changes and announcements from Passport Seva
          </p>
        </div>

        <Tabs defaultValue="news" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="notifications">
              Notifications <Bell className="ml-2 h-4 w-4" />
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="mt-6">
            <div className="grid gap-6">
              {news.map((item, i) => (
                <Card key={i} className="overflow-hidden hover-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <Badge variant="outline" className="mb-3">
                          {item.tag}
                        </Badge>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="ghost" className="p-0 h-auto text-navy-700 hover:text-navy-900 hover:bg-transparent">
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <div className="grid gap-6">
              {notifications.map((item, i) => (
                <Card key={i} className={`overflow-hidden hover-card border-l-4 ${
                  item.priority === 'high' ? 'border-l-red-500' : 
                  item.priority === 'medium' ? 'border-l-amber-500' : 
                  'border-l-blue-500'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline">View All Updates</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
