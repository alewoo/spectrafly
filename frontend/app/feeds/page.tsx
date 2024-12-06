import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FeedsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Feeds</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Feed Overview</CardTitle>
            <CardDescription>
              Manage and monitor your data sources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm font-medium">Total Feeds</p>
                <p className="text-2xl font-bold">50</p>
              </div>
              <div>
                <p className="text-sm font-medium">Active Feeds</p>
                <p className="text-2xl font-bold">45</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Sync Attempt</p>
                <p className="text-2xl font-bold">2 min ago</p>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Financial Times</TableCell>
                  <TableCell>RSS</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bloomberg API</TableCell>
                  <TableCell>API</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Reuters</TableCell>
                  <TableCell>HTML</TableCell>
                  <TableCell>Inactive</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add New Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="feed-name">Feed Name</Label>
                <Input id="feed-name" placeholder="Enter feed name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="feed-url">URL</Label>
                <Input id="feed-url" placeholder="Enter feed URL" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="feed-type">Type</Label>
                <select
                  id="feed-type"
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option>RSS</option>
                  <option>API</option>
                  <option>HTML</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="poll-interval">Poll Interval (minutes)</Label>
                <Input
                  id="poll-interval"
                  type="number"
                  placeholder="Enter poll interval"
                />
              </div>
              <Button type="submit">Add Feed</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
