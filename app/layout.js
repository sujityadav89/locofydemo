import { Inter } from "next/font/google";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Redington Apple Data Portal",
  description: "Welcome to Redington Apple Data Portal",
  icons: {
    icon: [{ url: "/logo.svg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    
    <>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </body>
      </html>
    </>
  );
}
