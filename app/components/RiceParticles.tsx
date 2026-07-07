"use client";
export default function RiceParticles() {
const grains = Array.from({ length: 18 });
return (
<div className="pointer-events-none absolute inset-0 overflow-hidden">
{grains.map((_, i) => (
    <span
        key={i}
        className="absolute h-[5px] w-[12px] rounded-full bg-[#F7E7AE]/70 animate-pulse"
        style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
            transform:`rotate(${Math.random()*360}deg)`,
            animationDelay:`${i*0.4}s`,
        }}
    />
))}
</div>
);
}