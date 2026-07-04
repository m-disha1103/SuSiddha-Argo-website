"use client";

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
      <div className="h-2 w-2 rounded-full bg-[#C9A227]" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
    </div>
  );
}

export function PremiumBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#C9A227]/30 bg-white/80 px-5 py-2 text-sm font-medium text-[#B8860B] backdrop-blur-xl shadow-lg">
      {children}
    </span>
  );
}

export function WheatGlow() {
  return (
    <>
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#1F5132]/10 blur-3xl" />
    </>
  );
}

export function PremiumSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[#FFFCF6] ${className}`}
    >
      <WheatGlow />
      {children}
    </section>
  );
}