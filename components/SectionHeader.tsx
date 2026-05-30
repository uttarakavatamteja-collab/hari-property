export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-14 max-w-4xl animate-fade-in-up space-y-3">
      {/* Editorial Luxury Badge */}
      <div className="flex items-center gap-3">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">
          {title}
        </p>
        <div className="h-px flex-1 max-w-[60px] bg-gold/50"></div>
      </div>
      {/* Cormorant Display Subtitle */}
      <h2 className="text-3xl font-light tracking-tight text-brand sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-serif">
        {subtitle}
      </h2>
    </div>
  )
}
