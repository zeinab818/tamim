
import BabyNursery from "../../components/3d/BabyNursery";
import BabyAge from "../../components/sections/BabyAge";
import Hero from "../../components/sections/Hero";

const navLinks = [
  { href: "#kingdom", label: "عالم تميم" },
  { href: "#arrival", label: "حكاية الميلاد" },
  { href: "#prayer", label: "دعاؤنا له" },
];

export default function Home() {
  return (
    <main
      id="home"
      dir="rtl"
      lang="ar"
      className="min-h-screen overflow-hidden bg-[#F8F5EF] text-[#665C50] selection:bg-[#C6A66B]/20"
    >
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-5 md:px-10 md:pt-7">
        <nav className="mx-auto flex max-w-[1350px] items-center justify-between rounded-full border border-[#D8C8AC]/45 bg-[#FBF9F4]/75 px-5 py-3 shadow-[0_8px_35px_rgba(112,99,78,0.045)] backdrop-blur-xl md:px-8 md:py-3.5">

          {/* Logo */}
          <a
            href="#home"
            dir="ltr"
            className="group flex items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A66B]/50 text-sm text-[#B99A68] transition duration-500 group-hover:rotate-12">
              ♛
            </span>

            <span className="font-serif text-[15px] tracking-[0.2em] text-[#71899B] md:text-base">
              TAMIM
              <span className="text-[#C6A66B]">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[12px] tracking-wide text-[#827866] transition-colors duration-300 hover:text-[#71899B]"
              >
                {link.label}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#C6A66B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Story Link */}
          <a
            href="#arrival"
            className="flex items-center gap-2 rounded-full border border-[#C6A66B]/55 px-4 py-2 text-[11px] text-[#947C57] transition-all duration-300 hover:border-[#71899B] hover:bg-[#71899B] hover:text-white md:px-5"
          >
            <span>اكتشف الحكاية</span>
            <span className="text-[13px]">✧</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <div id="home-hero" className="relative">
        <Hero />
      </div>

      {/* Elegant Transition */}
      <div className="relative z-10 flex items-center justify-center gap-5 bg-[#F8F5EF] py-9">
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C6A66B]/50 md:w-28" />
        <span className="text-sm text-[#C6A66B]">✧</span>
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C6A66B]/50 md:w-28" />
      </div>

      {/* 3D Nursery */}
      <section
        id="kingdom"
        className="relative scroll-mt-10"
      >
        <BabyNursery />
      </section>

      {/* Birth Story */}
      <section
        id="arrival"
        className="relative scroll-mt-10 overflow-hidden bg-[#F0EBE1] px-6 py-24 md:py-36"
      >
        {/* Background Details */}
        <div className="pointer-events-none absolute -right-36 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#C6A66B]/15" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-[#C6A66B]/15" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#D9D1C1]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">

          {/* Story Text */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="h-px w-8 bg-[#C6A66B]" />
              <p
                dir="ltr"
                className="text-[9px] tracking-[0.35em] text-[#A9855C] md:text-[10px]"
              >
                THE DAY OUR WORLD CHANGED
              </p>
            </div>

            <h2 className="mt-7 text-4xl font-medium leading-[1.8] text-[#71899B] md:text-6xl">
              يومٌ أصبح
              <br />
              للعُمر معنى آخر
            </h2>

            <div className="mt-7 flex items-center justify-center gap-3 md:justify-start">
              <span className="text-sm text-[#C6A66B]">✧</span>
              <span className="text-sm text-[#A9855C]">
                يوم ميلاد تميم
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-md text-[13px] leading-[2.5] text-[#8F8372] md:mx-0 md:text-[14px]">
              في هذا اليوم بدأت حكاية جديدة، وأصبح للحب اسم وملامح،
              وصار في قلوبنا مكان لا يشبه أي مكان.
            </p>
          </div>

          {/* Birth Date Card */}
          <div className="relative mx-auto w-full max-w-[390px]">
            <div className="absolute -inset-3 border border-[#C6A66B]/35" />

            <div className="relative border border-[#C6A66B]/20 bg-[#F8F5EF] px-7 py-14 text-center shadow-[0_20px_60px_rgba(105,91,69,0.055)] md:px-12 md:py-16">
              <span className="text-3xl text-[#C6A66B]">✧</span>

              <p className="mt-7 text-[9px] tracking-[0.4em] text-[#A9855C]">
                HIS ARRIVAL
              </p>

              <p
                dir="ltr"
                className="mt-5 font-serif text-7xl font-light tracking-wider text-[#71899B] md:text-8xl"
              >
                02
              </p>

              <div className="mx-auto my-6 h-px w-16 bg-[#C6A66B]/60" />

              <p
                dir="ltr"
                className="text-[12px] tracking-[0.35em] text-[#9A876B]"
              >
                NOVEMBER
              </p>

              <p
                dir="ltr"
                className="mt-3 font-serif text-3xl font-light tracking-widest text-[#71899B]"
              >
                2026
              </p>

              <p className="mt-9 text-base text-[#9A876B]">
                أَهْلًا بِكَ يَا تَمِيم
              </p>

              <span className="mt-7 inline-block text-xl text-[#C6A66B]">
                ♛
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Baby Age */}
      <div className="relative bg-[#F8F5EF]">
        <BabyAge />
      </div>

      {/* Prayer */}
      <section
        id="prayer"
        className="relative scroll-mt-10 overflow-hidden bg-[#71899B] px-6 py-24 text-center text-white md:py-36"
      >
        {/* Frame */}
        <div className="pointer-events-none absolute inset-4 border border-white/15 md:inset-8" />
        <div className="pointer-events-none absolute inset-7 border border-white/[0.07] md:inset-12" />

        {/* Soft Decoration */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="text-3xl text-[#E8D5B2]">۞</span>

          <p className="mt-8 text-[9px] tracking-[0.4em] text-[#E8D5B2] md:text-[10px]">
            OUR DEAREST PRAYER
          </p>

          <h2 className="mt-8 text-[22px] font-medium leading-[2.2] md:text-4xl">
            اللهم أنبته نباتًا حسنًا،
            <br />
            واجعله من الصالحين،
            <br />
            وقرّة عينٍ لوالديه.
          </h2>

          <div className="mx-auto mt-9 flex max-w-[220px] items-center justify-center gap-4">
            <span className="h-px flex-1 bg-white/30" />
            <span className="text-[#E8D5B2]">✧</span>
            <span className="h-px flex-1 bg-white/30" />
          </div>

          <p className="mt-7 text-[12px] leading-8 text-white/75 md:text-sm">
            اللهم احفظ تميم وبارك فيه واجعله من أهل القرآن.
          </p>
        </div>
      </section>

      {/* Closing */}
      <footer className="relative overflow-hidden bg-[#F8F5EF] px-6 py-20 text-center md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent" />

        <p
          dir="ltr"
          className="text-[9px] tracking-[0.4em] text-[#A9855C] md:text-[10px]"
        >
          A LITTLE PRINCE, A LIFETIME OF LOVE
        </p>

        <h2
          dir="ltr"
          className="mt-7 font-serif text-6xl font-light tracking-[0.12em] text-[#71899B] md:text-8xl"
        >
          Tamim
        </h2>

        <p className="mt-5 text-[13px] leading-8 text-[#9A8A77]">
          حكاية حب بدأت، وستظل تكبر كل يوم.
        </p>

        <span className="mt-8 inline-block text-2xl text-[#C6A66B]">
          ♛
        </span>

        <p
          dir="ltr"
          className="mt-9 text-[9px] tracking-[0.35em] text-[#B49B75]"
        >
          MADE WITH LOVE · 2026
        </p>
      </footer>
    </main>
  );
}
