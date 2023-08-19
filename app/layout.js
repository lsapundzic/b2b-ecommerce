"use client";

// Google fonts
import { Inter } from "next/font/google";

// React
import { useState, createContext } from "react";

// CONTEXTS

/*
   This state has been parentified, in practice it is for communication between navbar and product pages. 
   Navbar provides the key which is used for filtering products by category.
*/
export const PageCategoryContext = createContext();

// Project
import CustomBanner from "./components/CustomBanner";
import CustomHeader from "./components/CustomHeader";
import CustomFooter from "./components/CustomFooter";

// AntD
import { Layout } from "antd";
const { Header, Content } = Layout;
import { Footer } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// ! Metadata disabled: in production Vercel throws an error that it conflicts with "use client "
// export const metadata = {
//   title: "Sotla Laboratory Experts",
//   description:
//     "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
// };

// Styling

// Used so that the content stretches throughout the page
const globalLayoutStyle = {
  minHeight: "100vh",
};

// Prevents black boxes appearing on the sides of the navbar
const headerStyle = {
  backgroundColor: "white",
};

export default function RootLayout({ children }) {
  const [pageCategory, setPageCategory] = useState("home");

  return (
    <html lang="en">
      <PageCategoryContext.Provider value={{ pageCategory, setPageCategory }}>
        <body className={inter.className}>
          <Layout style={globalLayoutStyle}>
            <CustomHeader />
            {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
            <Header style={headerStyle}>
              <Navbar />
            </Header>
            <CustomBanner bannerContent={""} />
            <Content>{children}</Content>
            <Footer>
              <CustomFooter />
            </Footer>
          </Layout>
        </body>
      </PageCategoryContext.Provider>
    </html>
  );
}
