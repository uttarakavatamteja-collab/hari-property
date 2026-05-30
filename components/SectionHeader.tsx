export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 max-w-3xl animate-fade-in-up">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{title}</p>
      <h2 className="mt-3 text-3xl font-semibold text-brand sm:text-4xl">{subtitle}</h2>
    </div>
  )
}
