import type { Metadata } from "next";
import { Inter } from "next/font/google";

// styles
import "./globals.css";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import StoreProvider from "@/lib/redux/StoreProvider";

// init font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Expert | Streamlining Your Productivity",
  description:
    "Task Expert is all you'll ever need for seamless workflow management of your everyday responsibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-textMainColor antialiased`}>
        <StoreProvider>
          {/* react toastify */}
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            transition={Slide}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
