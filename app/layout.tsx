import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar"

export const metadata = {
  title: 'Flexibble',
  description: 'Discover and showcase amazing developer projects!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
