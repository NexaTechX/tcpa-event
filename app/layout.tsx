import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "@/components/loading-provider"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "TPCA 2025 - The Pacesetters Conference Africa",
  description:
    "REDEFINITION: Stepping Beyond the Usual. Join hundreds of Africa's boldest thinkers, builders, and changemakers.",
  keywords: ["TPCA", "Conference", "Africa", "Pacesetters", "Leadership", "Innovation", "Networking"],
  authors: [{ name: "TPCA Team" }],
  creator: "TPCA",
  publisher: "The Pacesetters Conference Africa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tpca-conference.com"),
  openGraph: {
    title: "TPCA 2025 - The Pacesetters Conference Africa",
    description: "REDEFINITION: Stepping Beyond the Usual. Join Africa's boldest thinkers and changemakers.",
    url: "https://tpca-conference.com",
    siteName: "TPCA 2025",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TPCA 2025 Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TPCA 2025 - The Pacesetters Conference Africa",
    description: "REDEFINITION: Stepping Beyond the Usual. Join Africa's boldest thinkers and changemakers.",
    images: ["/og-image.jpg"],
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSansPro.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
