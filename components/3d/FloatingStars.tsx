
const stars = [
  { top: "12%", left: "12%", delay: "0s", size: "text-xl" },
  { top: "25%", right: "9%", delay: "1s", size: "text-sm" },
  { top: "62%", left: "7%", delay: "2s", size: "text-lg" },
  { top: "78%", right: "12%", delay: "1.5s", size: "text-sm" },
  { top: "42%", right: "5%", delay: "0.5s", size: "text-xl" },
];

export default function FloatingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`absolute animate-twinkle ${star.size} text-[#C6A66B]/70`}
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            animationDelay: star.delay,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
