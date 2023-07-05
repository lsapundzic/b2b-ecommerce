"use client";

// Google fonts
import { Inter } from "next/font/google";

// Project components
import { Layout, Space } from "antd";
import Navbar from "@/app/components/Navbar";
import Footerc from "./components/FooterC";

const { Header, Footer, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sotla Laboratory Experts",
  description:
    "Manufacturers, distributors, and sellers of laboratory equipment & lab consumables",
};

// TODO: Something in the header layout is giving Navbar a padding that looks terrible

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingLeft: -50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Space>
          <Layout>
            {/* Force-changed style, otherwise it leaves a black padding box on both sides of the navbar */}
            <Header style={{ backgroundColor: "white" }}>
              <Navbar />
            </Header>
            <Content>{children}</Content>

            {/* TODO: Footer is producing <ul> & not displaying content */}
            <Footer>
              <Footerc />
            </Footer>
          </Layout>
        </Space>
      </body>
    </html>
  );
}
