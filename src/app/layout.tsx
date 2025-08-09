import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Footer from "./footer";
import Header from "./header";


export const metadata: Metadata = {
  title: "Yee Ming",
  description: "You're viewing: Yee Ming Tan's portfolio",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>

    </html>
  );
}
