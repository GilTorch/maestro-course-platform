
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["900"],
  display: 'swap'
});


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap'
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
