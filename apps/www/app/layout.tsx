import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import * as stylex from "@stylexjs/stylex"

import { siteConfig } from "@/config/site"
import { fonts } from "@/lib/fonts.stylex"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "mksingh",
      url: "https://mksingh.in",
    },
  ],
  creator: "mksingh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ca_mksingh",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

const styles = stylex.create({
  antialiased: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  body: {
    minHeight: "100vh",
    backgroundColor: "black",
  },
  mainWrapper: {
    position: "relative",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: "black",
  },
  main: {
    flex: "1 1 100%",
  },
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body {...stylex.props(styles.body, styles.antialiased)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div {...stylex.props(styles.mainWrapper, styles.antialiased)}>
              <SiteHeader />
              <main {...stylex.props(styles.main)}>{children}</main>
              <SiteFooter />
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />
            <Analytics />
            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
