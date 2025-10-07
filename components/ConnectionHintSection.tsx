export function ConnectionHintSection() {
  return (
    <div className="mx-6 mb-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100/50 relative overflow-hidden" data-bravo="[container]">
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-200/30 to-teal-200/30 rounded-full translate-y-12 -translate-x-12"></div>
      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-2xl">
            🔗
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2" data-bravo="[text]">Built for Connection</h3>
            <p className="text-slate-700 leading-relaxed" data-bravo="[text]">
              Meet like-minded travelers, join local communities, and create unforgettable memories together. 
              Your next adventure buddy is just a tap away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}