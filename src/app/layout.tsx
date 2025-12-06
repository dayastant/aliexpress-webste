import type { Metadata } from "next";
import { Barlow, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const interFont = Inter({ subsets: ['latin'] });
const barlowFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: "AliExpress",
  description: "Welcome aliexpress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${barlowFont.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
