import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  onDownload: () => void;
}

export function StatsCard({ title, value, description, onDownload }: StatsCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDownload}
          className="h-8 w-8 text-gray-500 hover:text-gray-700"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Card>
  );
}