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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '761415753580352');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=761415753580352&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
