import Section from './Section'

const Stat = ({ value, label, desc }: { value: string; label: string; desc: string }) => (
  <div className="card text-center">
    <div className="text-4xl font-bold">{value}</div>
    <div className="mt-1 font-medium">{label}</div>
    <div className="mt-1 text-sm opacity-80">{desc}</div>
  </div>
)

export default function Wins() {
  return (
    <Section id="wins" title="Featured Wins">
      <div className="grid md:grid-cols-3 gap-6">
        <Stat
          value="+1,000"
          label="SharePoint engagement (6 months)"
          desc="Grew usage from ~30 baseline to 1,000+ views by re-structuring content and navigation."
        />
        <Stat
          value="5,000+"
          label="Legacy files migrated"
          desc="Consolidated into a governed repository with improved search, version control, and tagging."
        />
        <Stat
          value="3"
          label="DISA Knowledge Base articles"
          desc='Authored and successfully published three critical knowledge articles on DISA services, including a comprehensive "DMCC-S Device Destruction" guide outlining essential security protocols.'
        />
      </div>
    </Section>
  )
}
