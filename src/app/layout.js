import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Villa Aura | Private Villa di Ubud",
  description:
    "Villa privat dengan arsitektur tenang, kolam infinity, dan pemandangan hutan tropis di Ubud, Bali.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
