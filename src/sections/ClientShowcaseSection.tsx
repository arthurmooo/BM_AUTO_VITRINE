type Brand = {
  name: string;
  className: string;
};

const brandRows: Brand[][] = [
  [
    { name: 'KS ENDURANCE', className: 'font-semibold tracking-[0.14em]' },
    { name: 'MEGÈVE', className: 'font-serif font-medium tracking-[0.1em]' },
    { name: 'SCORPIO RACING', className: 'font-bold tracking-[0.04em]' },
    { name: 'SAMUEL ROSEI MANAGEMENT', className: 'font-medium tracking-[0.11em]' },
    { name: 'CHEZ MARIE DU ROSAY', className: 'font-serif font-medium tracking-[0.08em]' },
    { name: 'KART PAY', className: 'font-bold tracking-[-0.01em]' },
    { name: 'THETIC.AE', className: 'font-semibold tracking-[0.16em]' },
    { name: 'HORS PISTE ESME', className: 'font-medium tracking-[0.08em]' },
  ],
  [
    { name: 'ESME', className: 'font-serif font-medium tracking-[0.16em]' },
    { name: 'CASH IN MIND', className: 'font-semibold tracking-[0.12em]' },
    { name: 'ICON MARGENCEL', className: 'font-bold tracking-[0.02em]' },
    { name: 'SIMOND', className: 'font-semibold tracking-[0.18em]' },
    { name: 'MASTERLAB', className: 'font-bold tracking-[-0.01em]' },
    { name: 'ARCHI KARE', className: 'font-serif font-medium tracking-[0.1em]' },
    { name: 'ROBINWOOD', className: 'font-semibold tracking-[0.13em]' },
  ],
];

function BrandGroup({ brands, duplicate = false }: { brands: Brand[]; duplicate?: boolean }) {
  return (
    <ul
      className={`brand-marquee-copy ${duplicate ? 'brand-marquee-copy--duplicate' : ''}`}
      aria-hidden={duplicate ? true : undefined}
    >
      {brands.map((brand) => (
        <li key={brand.name} className="brand-wordmark-item">
          <span className={`brand-wordmark ${brand.className}`}>{brand.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientShowcaseSection() {
  return (
    <section
      className="brand-showcase relative z-20 overflow-hidden border-y border-gold/10 bg-white py-[clamp(3.25rem,5vw,5rem)]"
      aria-labelledby="client-showcase-title"
    >
      <div className="relative z-10 mx-auto flex max-w-[1040px] flex-col items-center px-[6vw] text-center">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="micro-label text-gold tracking-[0.18em]">RÉFÉRENCES</span>
          <div className="h-px w-8 bg-gold/40" />
        </div>

        <h2
          id="client-showcase-title"
          className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.02] tracking-[-0.025em] text-violet"
        >
          Ils nous ont confié leurs process.
        </h2>
      </div>

      <div
        className="brand-marquee mt-[clamp(2.25rem,3.5vw,3rem)] space-y-2.5 sm:space-y-3"
        aria-label="Entreprises accompagnées par BM Automation"
      >
        {brandRows.map((brands, rowIndex) => (
          <div
            key={rowIndex}
            className={`brand-marquee-row ${rowIndex === 1 ? 'brand-marquee-row--reverse' : ''}`}
          >
            <div className="brand-marquee-track">
              <BrandGroup brands={brands} />
              <BrandGroup brands={brands} duplicate />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
