// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
// import { JetBrains_Mono as FontMono } from "next/font/google"
// import { GeistMono } from "geist/font/mono"
// import { GeistSans } from "geist/font/sans"

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

import * as stylex from "@stylexjs/stylex"

export const fonts = stylex.defineVars({
  fontMono: '"JetBrains Mono", monospace',
  fontSans: '"Noto Sans", sans-serif',
})

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })
