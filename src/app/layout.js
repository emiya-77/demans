import { DM_Serif_Display, PT_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const dm_serif_display = DM_Serif_Display({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: '--font-dm_serif_display'
});
const pt_sans = PT_Sans({ 
  subsets: ["latin"], 
  weight: "400",
  variable: '--font-pt_sans' 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pt_sans.variable} ${dm_serif_display.variable}`}>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
