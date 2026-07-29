type Brand = {
  name: string;
  className?: string;
  crop?: boolean;
  logo?: string;
  logoClassName?: string;
  wordmark?: string;
};

const brandRows: Brand[][] = [
  [
    {
      name: 'KS ENDURANCE',
      logo: '/assets/clients/ks-endurance.png',
      logoClassName: 'brand-logo--ks',
    },
    { name: 'MEGÈVE', logo: '/assets/clients/megeve.svg', logoClassName: 'brand-logo--megeve' },
    {
      name: 'SCORPIO MOTORSPORT',
      logo: '/assets/clients/scorpio-motorsport.png',
      logoClassName: 'brand-logo--wide',
    },
    { name: 'SAMUEL ROSEI MANAGEMENT', className: 'font-medium tracking-[0.11em]' },
    { name: 'CHEZ MARIE DU ROSAY', className: 'font-serif font-medium tracking-[0.08em]' },
    {
      name: 'KARDPAY',
      logo: '/assets/clients/kardpay-icon.png',
      logoClassName: 'brand-logo--mark',
      wordmark: 'kardpay',
      className: 'font-bold tracking-[-0.04em] lowercase',
    },
    { name: 'THETIC.AE', className: 'font-semibold tracking-[0.16em]' },
    {
      name: 'HORS PISTE',
      logo: '/assets/clients/hors-piste.jpg',
      logoClassName: 'brand-logo--hors-piste',
      crop: true,
    },
  ],
  [
    { name: 'ESME', logo: '/assets/clients/esme.png', logoClassName: 'brand-logo--square' },
    { name: 'CASH IN MIND', className: 'font-semibold tracking-[0.12em]' },
    {
      name: 'ICON MARGENCEL',
      logo: '/assets/clients/icon-margencel.png',
      logoClassName: 'brand-logo--wide',
    },
    { name: 'SIMOND', logo: '/assets/clients/simond.svg?v=2b1e3d', logoClassName: 'brand-logo--simond' },
    { name: 'MASTERLAB', wordmark: '◈ MASTERLAB', className: 'font-bold tracking-[-0.01em]' },
    { name: 'ARCHI KARE', className: 'font-serif font-medium tracking-[0.1em]' },
    {
      name: 'ROBINWOOD',
      logo: '/assets/clients/robinwood.svg',
      logoClassName: 'brand-logo--robinwood',
    },
    {
      name: 'LE HARAS DU DIAMANT NOIR',
      logo: '/assets/clients/haras-diamant-noir.png',
      logoClassName: 'brand-logo--haras',
    },
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
          <span className="brand-lockup">
            {brand.logo &&
              (brand.crop ? (
                <span className="brand-logo-crop">
                  <img
                    src={brand.logo}
                    alt={duplicate ? '' : brand.name}
                    className={`brand-logo ${brand.logoClassName ?? ''}`}
                    decoding="async"
                    draggable={false}
                  />
                </span>
              ) : (
                <img
                  src={brand.logo}
                  alt={duplicate ? '' : brand.name}
                  className={`brand-logo ${brand.logoClassName ?? ''}`}
                  decoding="async"
                  draggable={false}
                />
              ))}
            {(!brand.logo || brand.wordmark) && (
              <span className={`brand-wordmark ${brand.className ?? ''}`}>
                {brand.wordmark ?? brand.name}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientShowcaseSection() {
  return (
    <section
      className="brand-showcase relative z-20 overflow-hidden bg-ivory py-[clamp(3.25rem,5vw,5rem)]"
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
            onPointerEnter={(event) =>
              event.currentTarget.querySelector('.brand-marquee-track')?.getAnimations().forEach((animation) => {
                animation.playbackRate = 0
              })
            }
            onPointerLeave={(event) =>
              event.currentTarget.querySelector('.brand-marquee-track')?.getAnimations().forEach((animation) => {
                animation.playbackRate = 1
              })
            }
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
