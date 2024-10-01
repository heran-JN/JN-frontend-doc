import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import Navbar from "@/components/Layout/navbar";
import Sidebar from "@/components/Layout/sidebar";
import EditorProvider from "@/context/editor-provider";

const poppins = Poppins({
  weight: ['300','400', '500', '600', '700'], 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JN",
  description: "JN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Navbar />
            <div className="flex overflow-hidden h-screen ">
              <div className="w-full">
                <EditorProvider>
                    {children}
                </EditorProvider>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
