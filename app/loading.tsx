export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F8F4E8] z-[9999]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#B8860B] border-t-transparent"></div>
    </div>
  );
}