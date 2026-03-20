import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

export const metadata = {
  title: "Lonestar Plumbing",
  description: "Premium plumbing website demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatAssistant />
      </body>
    </html>
  );
}