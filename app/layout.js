import Navbar from "../components/layout/header/Navbar"; 
import Footer from "../components/layout/footer/Footer"; 
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
