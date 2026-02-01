import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TXRT52KK');`}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased font-sans overflow-x-hidden`}
        suppressHydrationWarning
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXRT52KK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
