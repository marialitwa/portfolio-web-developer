import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Developer Berlin | Maria Litwa",
  description:
    "Maria Litwa is a passionate Frontend Web Developer with a background in design and photography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
         dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Color gradient bubble 1 */}
        <div
          className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>

        {/* Color gradient bubble 2 */}
        <div
          className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] 
          right-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
          xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
