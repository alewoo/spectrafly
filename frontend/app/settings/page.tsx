import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Settings</h1>
      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="system-name">System Name</Label>
              <Input id="system-name" defaultValue="SpectraFly" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="timezone">Default Timezone</Label>
              <Select defaultValue="UTC">
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="EST">EST</SelectItem>
                  <SelectItem value="PST">PST</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="logging-level">Logging Level</Label>
              <Select defaultValue="INFO">
                <SelectTrigger id="logging-level">
                  <SelectValue placeholder="Select logging level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DEBUG">DEBUG</SelectItem>
                  <SelectItem value="INFO">INFO</SelectItem>
                  <SelectItem value="WARN">WARN</SelectItem>
                  <SelectItem value="ERROR">ERROR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Save Changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="users" className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>admin</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>2023-12-06 09:00</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Reset Pass
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>analyst</TableCell>
                <TableCell>Analyst</TableCell>
                <TableCell>2023-12-06 10:00</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Reset Pass
                  </Button>
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Add New User</h3>
            <div className="flex gap-2">
              <Input placeholder="Username" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="analyst">Analyst</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Button>Add User</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="sectors" className="mt-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="sector-rules">
                Sector Classification Rules (JSON)
              </Label>
              <textarea
                id="sector-rules"
                className="min-h-[300px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder='{"technology": ["AI", "blockchain", "cloud"], "finance": ["stocks", "bonds", "crypto"]}'
              ></textarea>
            </div>
            <Button>Update Sector Rules</Button>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="mt-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="ingestion-rate">
                Max Ingestion Rate (articles/minute)
              </Label>
              <Input id="ingestion-rate" type="number" defaultValue={250} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="concurrent-feeds">
                Max Concurrent Feed Processing
              </Label>
              <Input id="concurrent-feeds" type="number" defaultValue={10} />
            </div>
            <Button>Update Performance Settings</Button>
          </div>
        </TabsContent>
        <TabsContent value="integrations" className="mt-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="nlp-endpoint">External NLP Endpoint</Label>
              <Input
                id="nlp-endpoint"
                placeholder="https://api.nlp-service.com/v1/analyze"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="webhook-url">Webhook URL for New Articles</Label>
              <Input
                id="webhook-url"
                placeholder="https://your-service.com/webhook"
              />
            </div>
            <Button>Save Integration Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
