"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KeyMetricsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Ingestion Rate Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-muted" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Average Latency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-muted" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sector Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-muted" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Error Counts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] bg-muted" />
        </CardContent>
      </Card>
    </div>
  );
}
