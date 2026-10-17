import { createContext, useContext, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { activeNavId, navItems, profile } from '../data/profile'
import { Avatar, Logo } from './Brand'
import Icon from './Icon'

const ToastContext = createContext(() => {})

export function useToast() {
  return useContext(ToastContext)
}

const pageMeta = {
  '/contact': { eyebrow: 'Contact', title: 'Contact' },
  '/works/nexusagent': { eyebrow: 'Case Study', title: 'Case Study Detail', back: true },
  '/articles/system-eval': { eyebrow: 'Article', title: 'Article Reader', back: true },
}

export default function Shell() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState('')
  const meta = pageMeta[location.pathname] ?? { eyebrow: 'Home', title: 'Home' }
  const showNav = !meta.back
  const showFooter = location.pathname === '/' || location.pathname === '/contact'
  const current = activeNavId(location.pathname, location.hash)

  useEffect(() => {
    setMenuOpen(false)
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!toast) return undefined
    const timer = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(timer)
  }, [toast])

  function showToast(message) {
    setToast(message)
  }

  return (
    <ToastContext.Provider value={showToast}>
      <div className="min-h-dvh bg-surface-container-lowest font-body-md text-body-md text-on-surface">
        <div className="relative mx-auto min-h-dvh w-full max-w-[480px] bg-surface shadow-[0_0_80px_rgba(0,0,0,0.45)]">
          <header className="fixed top-0 z-50 w-full max-w-[480px] bg-surface/80 pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.25)] backdrop-blur-xl left-1/2 -translate-x-1/2">
            <div className="flex h-16 items-center justify-between gap-space-sm px-gutter-mobile">
              <div className="flex min-w-0 items-center gap-space-xs">
                {meta.back ? (
                  <button
                    type="button"
                    aria-label="返回"
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-low text-on-surface transition-colors hover:text-primary"
                    onClick={() => navigate(-1)}
                  >
                    <Icon name="arrow_back_ios_new" className="text-lg" />
                  </button>
                ) : null}
                <Link to="/" className="flex min-w-0 items-center gap-space-xs">
                  <Logo />
                  {meta.back ? (
                    <span className="truncate font-headline-sm text-headline-sm text-on-surface">
                      {meta.title}
                    </span>
                  ) : (
                    <span className="flex flex-col">
                      <span className="font-label-md text-label-md font-medium tracking-tight text-on-surface">
                        {profile.brand}
                      </span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                        {meta.eyebrow}
                      </span>
                    </span>
                  )}
                </Link>
              </div>
              <div className="flex items-center gap-space-xs">
                {meta.back ? null : (
                  <>
                    <span className="hidden items-center gap-1.5 rounded-full bg-surface-container-high/60 px-2.5 py-1 min-[380px]:inline-flex">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10b981]" />
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Open</span>
                    </span>
                    <button
                      type="button"
                      aria-label="菜单"
                      aria-expanded={menuOpen}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container-low/80 text-on-surface transition-colors hover:text-primary"
                      onClick={() => setMenuOpen((open) => !open)}
                    >
                      <Icon name={menuOpen ? 'close' : 'menu'} className="text-xl" />
                    </button>
                  </>
                )}
                <Link to="/contact" aria-label="联系 Mavien">
                  <Avatar />
                </Link>
              </div>
            </div>
          </header>

          <main className={`pt-16 ${showNav ? 'pb-4' : 'pb-10'}`}>
            <Outlet />
            {showFooter ? <SiteFooter /> : null}
          </main>

          {showNav ? <BottomNav current={current} /> : null}

          {menuOpen ? (
            <div
              className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            >
              <nav
                className="absolute top-20 left-1/2 w-[calc(100%-2.5rem)] max-w-[440px] -translate-x-1/2 rounded-xl border border-white/10 bg-surface-container p-space-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
                onClick={(event) => event.stopPropagation()}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={`flex items-center gap-space-sm rounded-lg px-space-sm py-3 font-label-md text-label-md ${
                      current === item.id
                        ? 'bg-surface-container-highest text-on-surface'
                        : 'text-on-surface-variant'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon name={item.icon} className="text-lg" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ) : null}

          {toast ? (
            <div className="fixed bottom-24 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-surface-bright px-4 py-2 font-label-sm text-label-sm text-on-surface shadow-xl">
              <Icon name="check_circle" className="text-sm text-secondary" />
              {toast}
            </div>
          ) : null}
        </div>
      </div>
    </ToastContext.Provider>
  )
}

function BottomNav({ current }) {
  return (
    <nav className="fixed bottom-0 z-50 w-full max-w-[480px] bg-surface/90 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.45)] backdrop-blur-xl left-1/2 -translate-x-1/2">
      <div className="flex h-16 items-center justify-around px-gutter-mobile">
        {navItems.map((item) => {
          const active = current === item.id
          return (
            <NavLink
              key={item.id}
              to={item.to}
              end={item.to === '/'}
              className={`flex h-12 min-w-12 flex-col items-center justify-center gap-0.5 rounded-lg transition-all ${
                active
                  ? 'bg-surface-container-highest/80 text-on-surface'
                  : 'text-on-surface-variant'
              }`}
            >
              <Icon name={item.icon} className="text-lg" filled={active} />
              <span className="font-label-sm text-label-sm">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center justify-center space-y-space-md bg-surface-container-lowest px-margin-mobile pt-space-xl pb-28 text-center">
      <button
        type="button"
        className="inline-flex items-center gap-space-xs rounded-full bg-surface-container px-3 py-1.5 font-label-sm text-label-sm text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrow_upward" className="text-sm" />
        <span>Back to top</span>
      </button>
      <div className="flex items-center justify-center gap-space-md text-on-surface-variant">
        {profile.links.map((link) => (
          <a
            key={link.key}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-container/40 font-label-sm text-label-sm transition-colors hover:text-on-surface"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.key}
          </a>
        ))}
      </div>
      <div className="space-y-1 font-label-sm text-label-sm text-on-surface-variant">
        <p>© 2025 Mavien. Crafted for AI Systems.</p>
        <p className="text-on-tertiary-container">Precision • Restraint • Technical Rigor</p>
      </div>
    </footer>
  )
}
