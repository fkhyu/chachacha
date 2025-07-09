export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-600 bg-white/70 backdrop-blur-sm">
      {children}
    </div>
  );
}
