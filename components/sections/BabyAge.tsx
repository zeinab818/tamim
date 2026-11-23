
"use client";

import { useEffect, useState } from "react";
import { baby } from "../../data/baby";
import { calculateBabyAge } from "../../lib/age-calculator";

const formatNumber = (value: number) =>
  value.toLocaleString("en-US");

export default function BabyAge() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());

    update();

    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const age =
    now && baby.birthDate
      ? calculateBabyAge(baby.birthDate, now)
      : null;

  return (
    <section
      id="baby-age"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#F8F5EF] px-5 py-28 sm:px-8 md:py-36"
    >
      {/* Background ornaments */}
      <div className="pointer-events-none absolute -right-48 top-10 h-[480px] w-[480px] rounded-full border border-[#C6A66B]/15" />
      <div className="pointer-events-none absolute -right-36 top-22 h-[360px] w-[360px] rounded-full border border-[#C6A66B]/10" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full border border-[#71899B]/10" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center md:mb-20">
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#C6A66B]/60" />
            <span
              dir="ltr"
              className="text-[10px] tracking-[0.45em] text-[#A9855C]"
            >
              A BEAUTIFUL JOURNEY
            </span>
            <span className="h-px w-12 bg-[#C6A66B]/60" />
          </div>

          <h2 className="text-4xl font-medium leading-relaxed text-[#71899B] sm:text-5xl md:text-6xl">
            تكبر الحكاية
            <span className="mx-3 text-[#C6A66B]">✧</span>
            ويكبر الحب
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#958978]">
            كل لحظة معك نعمة، وكل يوم يحمل ذكرى جديدة
          </p>
        </div>

        {/* Royal age panel */}
        <div className="relative mx-auto max-w-5xl">

          {/* Outer frame */}
          <div className="absolute -inset-3 border border-[#C6A66B]/35 sm:-inset-5" />

          <div className="relative overflow-hidden bg-[#172B3D] px-5 py-14 text-center text-white sm:px-12 sm:py-20 md:px-20">

            {/* Panel ornaments */}
            <div className="pointer-events-none absolute inset-3 border border-[#C6A66B]/20 sm:inset-5" />

            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#D4B77D]/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D4B77D]/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#D4B77D]/10" />

            {/* Corner ornaments */}
            <span className="absolute right-7 top-7 text-xl text-[#C6A66B] sm:right-10 sm:top-10">✧</span>
            <span className="absolute left-7 top-7 text-xl text-[#C6A66B] sm:left-10 sm:top-10">✧</span>
            <span className="absolute bottom-7 right-7 text-xl text-[#C6A66B] sm:bottom-10 sm:right-10">✧</span>
            <span className="absolute bottom-7 left-7 text-xl text-[#C6A66B] sm:bottom-10 sm:left-10">✧</span>

            <div className="relative">

              <p
                dir="ltr"
                className="text-[10px] tracking-[0.4em] text-[#D7BD8D]"
              >
                SINCE THE DAY YOU ARRIVED
              </p>

              <div className="mx-auto mt-8 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#C6A66B]/50" />
                <span className="text-lg text-[#C6A66B]">♛</span>
                <span className="h-px w-10 bg-[#C6A66B]/50" />
              </div>

              {age ? (
                <>
                  {/* Main number */}
                  <div className="mt-9">
                    <p className="text-xs tracking-[0.25em] text-[#D7BD8D]">
                      أتمّ تميم حتى اليوم
                    </p>

                    <div
                      dir="ltr"
                      className="mt-5 font-serif text-[clamp(6rem,18vw,12rem)] font-light leading-none tracking-[-0.06em] text-[#E8D5B2] [text-shadow:0_8px_40px_rgba(198,166,107,0.16)]"
                    >
                      {formatNumber(age.totalDays)}
                    </div>

                    <p className="mt-5 text-base tracking-wide text-white/75">
                      يومًا جميلًا من عمر الحكاية
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mx-auto my-12 flex max-w-md items-center gap-5">
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A66B]/60" />
                    <span className="text-sm text-[#C6A66B]">✧</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A66B]/60" />
                  </div>

                  {/* Calendar age */}
                  <div>
                    <p className="mb-8 text-xs tracking-[0.2em] text-[#D7BD8D]">
                      عُمُرُهُ بِالتَّقْوِيم
                    </p>

                    <div className="mx-auto flex max-w-xl items-center justify-center">

                      <AgeUnit
                        value={age.years}
                        label="سنة"
                      />

                      <Separator />

                      <AgeUnit
                        value={age.months}
                        label="شهر"
                      />

                      <Separator />

                      <AgeUnit
                        value={age.days}
                        label="يوم"
                      />

                    </div>
                  </div>

                  {/* Weeks */}
                  <div className="mt-12">
                    <p className="text-sm text-white/65">
                      {formatNumber(age.weeks)} أسابيع
                      {age.remainingDays > 0 &&
                        ` و ${formatNumber(age.remainingDays)} أيام`}
                    </p>
                  </div>
                </>
              ) : (
                <div className="py-20">
                  <p className="text-sm text-white/70">
                    {now
                      ? "تاريخ الميلاد غير متاح أو لم يحن بعد"
                      : "نحسب لحظاتنا الجميلة..."}
                  </p>
                </div>
              )}

              <div className="mt-14">
                <p className="font-serif text-2xl tracking-wide text-[#E8D5B2]">
                  Tamim
                </p>

                <p className="mt-3 text-xs text-white/50">
                  وما زالت أجمل الحكايات في بدايتها
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#C6A66B]/50" />
          <p className="text-xs tracking-wide text-[#9A8A77]">
            الحمد لله على نعمة تميم
          </p>
          <span className="h-px w-12 bg-[#C6A66B]/50" />
        </div>

      </div>
    </section>
  );
}

function AgeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex-1 px-2 text-center">
      <p
        dir="ltr"
        className="font-serif text-4xl font-light tabular-nums text-[#E8D5B2] sm:text-6xl"
      >
        {formatNumber(value)}
      </p>

      <p className="mt-4 text-xs text-white/65">
        {label}
      </p>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-14 w-px bg-gradient-to-b from-transparent via-[#C6A66B]/50 to-transparent" />
  );
}
