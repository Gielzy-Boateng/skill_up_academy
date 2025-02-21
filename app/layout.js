import { MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/carousel/styles.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export const metadata = {
  title: "SkillUp Academy 🏫",
  description:
    "SkillUp Academy offers expert-led courses and practical training to help you develop in-demand skills and advance your career.",
  icons: {
    icon: "/assets/home/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased overflow-x-hidden scroll-smooth`}>
        <NavBar />
        <MantineProvider>{children}</MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
