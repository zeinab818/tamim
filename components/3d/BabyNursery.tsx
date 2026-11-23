
import NurseryScene from "./NurseryScene";
import FloatingStars from "./FloatingStars";

export default function BabyNursery() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] px-5 py-24 md:py-36">
      <FloatingStars />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-14 text-center md:mb-20">
          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#C6A66B]/60" />
            <p
              className="text-[10px] tracking-[0.35em] text-[#A9855C]"
              dir="ltr"
            >
              HIS LITTLE KINGDOM
            </p>
            <span className="h-px w-12 bg-[#C6A66B]/60" />
          </div>

          <h2 className="text-3xl font-semibold text-[#71899B] md:text-5xl">
            عالمٌ صُنع بحب
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-9 text-[#958978] md:text-base">
            هنا تبدأ حكاية أميرنا الصغير،
            عالم دافئ مليء بالأحلام والتفاصيل الجميلة.
          </p>
        </div>

        {/* 3D room frame */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-3 border border-[#C6A66B]/35 md:-inset-5" />

          <div className="relative border border-[#E8DCC9] bg-[#EDF2F3] p-2 shadow-[0_30px_90px_rgba(91,105,112,0.12)] md:p-4">
            <NurseryScene />
          </div>

          {/* Corner ornaments */}
          <span className="absolute -right-5 -top-5 text-2xl text-[#C6A66B]">
            ✧
          </span>
          <span className="absolute -bottom-5 -left-5 text-2xl text-[#C6A66B]">
            ✧
          </span>
        </div>

        {/* Caption */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="font-serif text-xl italic tracking-wider text-[#B99A68]">
            A room full of little dreams
          </p>

          <p className="text-xs text-[#9A8A77]">
            صُمّم هذا العالم الصغير خصيصًا لتميم
          </p>
        </div>
      </div>
    </section>
  );
}
