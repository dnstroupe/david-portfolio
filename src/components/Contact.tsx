import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="card">
        <p className="mb-4">Use the form or email me directly.</p>
        <a href="mailto:d.n.stroupe@gmail.com" className="underline">d.n.stroupe@gmail.com</a>

        <div className="mt-3">
          <a className="underline" href="/david-stroupe.vcf" download>📇 Download vCard</a>
        </div>

        {/* Sends email via FormSubmit (no backend). Approve the first verification email they send you. */}
        <form className="grid gap-3 max-w-md mt-6"
              action="https://formsubmit.co/d.n.stroupe@gmail.com"
              method="POST">
          <input type="hidden" name="_subject" value="Portfolio contact from david-stroupe.github.io" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input className="border rounded-lg px-3 py-2 bg-white/80 dark:bg-slate-900/30" name="name" placeholder="Your name" required/>
          <input className="border rounded-lg px-3 py-2 bg-white/80 dark:bg-slate-900/30" name="email" placeholder="Your email" type="email" required/>
          <textarea className="border rounded-lg px-3 py-2 bg-white/80 dark:bg-slate-900/30" name="message" placeholder="Message" rows={4} required/>
          <button className="px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Send</button>
        </form>
      </div>
    </Section>
  )
}
