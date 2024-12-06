"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GlobalStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234,567</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ingestion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">250/min</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Feeds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">50</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">99.9%</div>
        </CardContent>
      </Card>
    </div>
  );
}
