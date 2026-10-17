export function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#18181b" />
      <rect
        x="0.6"
        y="0.6"
        width="30.8"
        height="30.8"
        rx="7.4"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
      />
      <path
        d="M8 23V11.2L16 17.2 24 11.2V23"
        fill="none"
        stroke="#ffb4a9"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Avatar({ className = 'h-8 w-8', mark = 'text-[11px]' }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_32%_22%,#5c5368,transparent_42%),linear-gradient(165deg,#2c2636,#12131a)] ring-1 ring-white/10 ${className}`}
    >
      <span className={`font-headline-sm font-medium text-primary ${mark}`}>M</span>
    </span>
  )
}

export function QrMark() {
  return (
    <svg className="h-40 w-40 text-black" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <rect x="5" y="5" width="28" height="28" />
      <rect x="9" y="9" width="20" height="20" fill="white" />
      <rect x="13" y="13" width="12" height="12" />
      <rect x="67" y="5" width="28" height="28" />
      <rect x="71" y="9" width="20" height="20" fill="white" />
      <rect x="75" y="13" width="12" height="12" />
      <rect x="5" y="67" width="28" height="28" />
      <rect x="9" y="71" width="20" height="20" fill="white" />
      <rect x="13" y="75" width="12" height="12" />
      <rect x="38" y="10" width="6" height="6" />
      <rect x="50" y="8" width="6" height="6" />
      <rect x="42" y="24" width="6" height="6" />
      <rect x="10" y="42" width="6" height="6" />
      <rect x="22" y="50" width="6" height="6" />
      <rect x="40" y="40" width="20" height="20" />
      <rect x="44" y="44" width="12" height="12" fill="white" />
      <rect x="48" y="48" width="4" height="4" fill="#921510" />
      <rect x="66" y="42" width="6" height="6" />
      <rect x="80" y="50" width="6" height="6" />
      <rect x="40" y="70" width="8" height="6" />
      <rect x="54" y="80" width="8" height="8" />
      <rect x="70" y="74" width="10" height="6" />
      <rect x="84" y="84" width="8" height="8" />
    </svg>
  )
}
