export function AppBannerSection() {
  return (
    <div className="mx-6 mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100/50 relative overflow-hidden" data-bravo="[container]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
            🌍
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2" data-bravo="[text]">explori</h3>
            <p className="text-slate-700 leading-relaxed" data-bravo="[text]">
              Your ultimate travel companion. Discover places, join events, and connect with fellow adventurers wherever your journey takes you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}