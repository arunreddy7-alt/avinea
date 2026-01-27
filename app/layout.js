import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Avinea Hadapsar Pune | Luxury 2-6 BHK Apartments Near Magarpatta & Kharadi",
  description: "Discover Avinea, premium 2-6 BHK residences in Hadapsar, Pune. Enjoy modern amenities, biophilic design, 24/7 security, and easy access to Magarpatta, Kharadi IT hubs, schools, and shopping destinations. Book your dream home in Hadapsar today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans overflow-x-hidden`}
        suppressHydrationWarning
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
