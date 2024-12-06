import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">SpectraFly</span>
        </h1>

        <p className="mt-3 text-2xl">
          Real-time market insights from financial news articles
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/dashboard"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dashboard &rarr;</h3>
            <p className="mt-4 text-xl">
              View real-time metrics and recent articles
            </p>
          </Link>

          <Link
            href="/feeds"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Feeds &rarr;</h3>
            <p className="mt-4 text-xl">Manage and monitor your data sources</p>
          </Link>

          <Link
            href="/api-docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">API Docs &rarr;</h3>
            <p className="mt-4 text-xl">Explore our API documentation</p>
          </Link>

          <Link
            href="/settings"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Settings &rarr;</h3>
            <p className="mt-4 text-xl">
              Configure system parameters and user management
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
