import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ApiDocsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">API Documentation</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              How to authenticate your API requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use JWT tokens or API keys for authentication. Include the token
              in the Authorization header:
            </p>
            <pre className="bg-muted p-2 rounded-md mt-2">
              Authorization: Bearer YOUR_TOKEN_HERE
            </pre>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Endpoints</CardTitle>
            <CardDescription>
              Available API endpoints and their usage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">GET /articles</h3>
            <p>Retrieve a list of articles.</p>
            <h4 className="font-semibold mt-4 mb-2">Parameters:</h4>
            <ul className="list-disc list-inside">
              <li>page (optional): Page number for pagination</li>
              <li>limit (optional): Number of items per page</li>
              <li>sector (optional): Filter by sector</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-2">
              GET /articles/{"{id}"}
            </h3>
            <p>Retrieve a specific article by ID.</p>
            <h3 className="text-lg font-semibold mt-6 mb-2">GET /stream</h3>
            <p>Open a real-time stream of new articles.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Error Handling</CardTitle>
            <CardDescription>
              Common error codes and their meanings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>400 Bad Request: Invalid parameters</li>
              <li>401 Unauthorized: Invalid or missing authentication</li>
              <li>403 Forbidden: Insufficient permissions</li>
              <li>404 Not Found: Resource not found</li>
              <li>429 Too Many Requests: Rate limit exceeded</li>
              <li>500 Internal Server Error: Unexpected server error</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rate Limits</CardTitle>
            <CardDescription>API usage limits and quotas</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The API is rate-limited to 1000 requests per hour per API key. If
              you exceed this limit, youll receive a 429 Too Many Requests
              response.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
