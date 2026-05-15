import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FormRecorder – Record & Replay Form Workflows",
  description: "Record browser interactions to create replayable form-filling scripts with conditional logic. Built for QA engineers and web developers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="64bcb3c8-14f8-482b-a980-12421342aa55"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  )
}
