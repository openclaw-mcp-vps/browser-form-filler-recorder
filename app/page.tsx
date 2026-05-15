export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Record &amp; Replay Complex<br />
          <span className="text-[#58a6ff]">Form Filling Workflows</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Capture every click, keystroke, and conditional branch in your browser. Store them as smart scripts and replay them instantly — no coding required.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $16/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#8b949e]">
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Chrome Extension Included</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Conditional Logic Support</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Script Dashboard</li>
          <li className="flex items-center gap-1"><span className="text-[#58a6ff]">✓</span> Cancel Anytime</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$16<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate form workflows</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Chrome extension recorder",
              "Unlimited saved scripts",
              "Conditional logic & branching",
              "One-click replay from dashboard",
              "Script editor with syntax highlight",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does the recording work?</h3>
            <p className="text-[#8b949e] text-sm">Install the Chrome extension, click Record, and interact with any form normally. The extension captures every DOM event — clicks, inputs, selects — and sends them to your dashboard as a structured, editable script.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I add conditional logic to my scripts?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The script editor lets you add if/else branches based on field values or page state. For example, fill a different address field depending on a country dropdown selection.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my data secure?</h3>
            <p className="text-[#8b949e] text-sm">Scripts are stored encrypted in your private account. Sensitive field values can be masked so they never leave your browser in plain text. You can delete any script at any time.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} FormRecorder. All rights reserved.
      </footer>
    </main>
  )
}
