export function LoadingDot() {
  return (
    <div className="flex items-center justify-center py-4 space-x-2">
      <div className="w-3 h-3 bg-black rounded-full fade-in-out"></div>
      <div className="w-3 h-3 bg-black rounded-full fade-in-out delay-1"></div>
      <div className="w-3 h-3 bg-black rounded-full fade-in-out delay-2"></div>
    </div>
  );
}
