import type { Metadata } from 'next';
import { Sora, Source_Code_Pro, Space_Grotesk } from 'next/font/google';
import './globals.css';

const SoraFont = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const SourceCodeFont = Source_Code_Pro({
  variable: '--font-code',
  subsets: ['latin'],
});

const groteskFont = Space_Grotesk({
  variable: '--font-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Brainwave',
  icons: {
    icon: '/assets/brainwave-symbol.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${SoraFont.variable} ${SourceCodeFont.variable} ${groteskFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
