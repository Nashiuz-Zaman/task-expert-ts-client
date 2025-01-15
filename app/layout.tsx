import type { Metadata } from "next";
import { Inter } from "next/font/google";

// styles
import "./globals.css";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

// redux store
import StoreProvider from "@/lib/redux/StoreProvider";
import { checkForLogins } from "@/utils/checkForLogins";
import { cookies } from "next/headers";

// init font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Expert | Streamlining Your Productivity",
  description:
    "Task Expert is all you'll ever need for seamless workflow management of your everyday responsibilities",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get cookie and send them in the HTTP request
  const cookieStr = (await cookies()).toString();
  const data = await checkForLogins(cookieStr);
  

  return (
    <html lang="en">
      <body className={`${inter.className} text-neutral-800 antialiased`}>
        <StoreProvider
          initialAuthData={data.status === "success" ? data.user : null}
        >
          {/* react toastify */}
          <ToastContainer
            position="bottom-left"
            autoClose={2700}
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
