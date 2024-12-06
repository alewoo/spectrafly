import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SystemHealthWidgets() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Queue Depth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">DB Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">Good</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">API Latency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">50ms</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">75%</div>
        </CardContent>
      </Card>
    </div>
  );
}
