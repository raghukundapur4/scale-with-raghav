function BrowserMockup({ url = 'scalewithraghav.com', children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-white shadow-elevated ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-center text-[11px] font-medium text-text-muted">
          {url}
        </span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}

export default BrowserMockup
