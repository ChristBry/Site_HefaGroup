import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import "./mainStyle.css";
import { I18nProvider } from "@/components/providers/I18nProvider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HefaGroup | Business Consulting",
  description:
    "HEFA Group is an innovative business development company led by a team of qualified, dedicated African consultants supporting business growth across Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full ${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
