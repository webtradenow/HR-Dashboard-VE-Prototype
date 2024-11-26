import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StatsCard } from "@/components/ui/stats-card";
import { RecentReviewsTable } from "@/components/ui/recent-reviews-table";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { Card } from "@/components/ui/card";
import { User, Mail, FileText, Building2, Phone, MapPin } from "lucide-react";

const mockReviews = [
  { candidate: "John Doe", status: "Complete" as const, date: "2024-01-15" },
  { candidate: "Jane Smith", status: "Pending" as const, date: "2024-01-14" },
];

const mockActivities = [
  {
    type: "New review initiated",
    description: "Background check requested for John Doe",
    time: "2 minutes ago",
  },
  {
    type: "Review completed",
    description: "Background check completed for Sarah Wilson",
    time: "1 hour ago",
  },
];

export function NewReview() {
  return (
    <div className="w-full min-h-full bg-gray-100">
      <div className="px-4 py-6 lg:px-8 xl:px-10 max-w-[2000px] mx-auto">
        <div className="grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Reviews"
              value={128}
              description="All time background checks"
              onDownload={() => {}}
            />
            <StatsCard
              title="Pending Review"
              value={45}
              description="Awaiting verification"
              onDownload={() => {}}
            />
            <StatsCard
              title="Completed"
              value={83}
              description="Processed checks"
              onDownload={() => {}}
            />
            <StatsCard
              title="Requires Action"
              value={12}
              description="Need attention"
              onDownload={() => {}}
            />
          </div>

          <Card className="p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-6">
              New Background Check Request
            </h2>
            <form className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="firstName" className="pl-9" placeholder="John" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="lastName" className="pl-9" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="email" type="email" className="pl-9" placeholder="john.doe@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="phone" type="tel" className="pl-9" placeholder="(555) 123-4567" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="company">Company</Label>
                  <div className="relative mt-1">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company" className="pl-9" placeholder="Company Name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="address" className="pl-9" placeholder="123 Business Ave" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <div className="relative mt-1">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea 
                      id="notes" 
                      className="pl-9 min-h-[100px]" 
                      placeholder="Any additional information..."
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-900 hover:bg-blue-800 mt-2">
                  Submit Request
                </Button>
              </div>
            </form>
          </Card>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentReviewsTable
                reviews={mockReviews}
                onExport={() => {}}
              />
            </div>
            <div>
              <ActivityFeed activities={mockActivities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}