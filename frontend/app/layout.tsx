import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SpectraFly",
  description: "Real-time market insights from financial news articles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="min-h-screen flex">
            <aside className="w-64 border-r bg-card fixed h-screen">
              <div className="flex h-16 items-center px-4 border-b">
                <h1 className="text-xl font-bold">SpectraFly</h1>
              </div>
              <MainNav className="px-4" />
            </aside>
            <main className="flex-1 ml-64">
              <header className="border-b">
                <div className="flex h-16 items-center px-4">
                  <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                  </div>
                </div>
              </header>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
