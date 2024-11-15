import type { Metadata } from "next";
import "./globals.css";
import Header from "sbt/distro/header/Header";


export const metadata: Metadata = {
  title: "OWMC D3",
  description: "D3 data visualisation. Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks =[
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about/' },
    { title: 'Charts', url: '/charts/' },
  ];
  return (
    <html lang="en">
      <body className="font-sans">
        <Header navLinks={navLinks} />
        <main className="p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
