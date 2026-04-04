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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-[#FFFFFF] font-dm-sans selection:bg-[#71bf44] selection:text-[#0A0A0A] overflow-x-hidden">
        {children}
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
