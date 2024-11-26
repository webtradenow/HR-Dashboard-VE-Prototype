import { Card } from "@/components/ui/card";

interface Activity {
  type: string;
  description: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Activity Feed</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="text-sm font-medium text-gray-900">{activity.type}</div>
            <div className="text-sm text-gray-500">{activity.description}</div>
            <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}