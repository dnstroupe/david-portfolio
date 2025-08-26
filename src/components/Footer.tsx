export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container-nice text-sm opacity-80 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>© <span id="year">{new Date().getFullYear()}</span> David Stroupe</div>
        <div className="flex gap-4">
          <a className="underline" href="https://www.linkedin.com/in/david-stroupe" target="_blank">LinkedIn</a>
          <a className="underline" href="https://github.com/dnstroupe" target="_blank">GitHub</a>
          <a className="underline" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
