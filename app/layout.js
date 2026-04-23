import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";



export const metadata = {
  title: "TourGEE | Explore with ease",
  description: "The Nigerian home of nature and beauty",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}