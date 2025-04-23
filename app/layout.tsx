'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { COMPANY_NAME } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

// Metadata cannot be exported from Client Components
// This will need to be handled differently

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <style jsx global>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
            
            @keyframes float-delay {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
            
            @keyframes scroll-indicator {
              0% { transform: translateY(0); opacity: 1; }
              75% { transform: translateY(5px); opacity: 0; }
              80% { transform: translateY(0); opacity: 0; }
              100% { opacity: 1; }
            }
            
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
            
            .animate-float-delay {
              animation: float-delay 5s ease-in-out infinite;
              animation-delay: 1s;
            }
            
            .animate-scroll-indicator {
              animation: scroll-indicator 2s ease-in-out infinite;
            }
            
            .bg-grid-pattern {
              background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
            
            .bg-grid-pattern-dark {
              background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            }
          `}</style>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}