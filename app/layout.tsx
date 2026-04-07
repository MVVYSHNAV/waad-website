import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono, Pinyon_Script } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WAAD | Strategic software developers",
  description: "WAAD is a bold, high-energy software development company specializing in neobrutalist design and digital excellence.",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} ${pinyonScript.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground font-dm selection:bg-lime selection:text-black overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const observerOptions = {
                threshold: 0.1
              };
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                  }
                });
              }, observerOptions);
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
