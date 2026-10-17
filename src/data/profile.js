export const profile = {
  name: 'Mavien',
  brand: 'Mavien.ai',
  email: 'mavien.ai.pm@gmail.com',
  wechatHome: 'mavien_ai_lead',
  wechatContact: 'Mavien_AIPM',
  links: [
    { key: 'GH', label: 'GitHub', handle: '@mavien-systems', href: 'https://github.com' },
    { key: 'X', label: 'X / Twitter', handle: '@mavien_ai', href: 'https://twitter.com' },
    { key: 'IN', label: 'LinkedIn', handle: '@mavien-ai', href: 'https://linkedin.com' },
    { key: 'JK', label: '即刻 Jike', handle: '@Mavien', href: 'https://okjike.com' },
  ],
}

export const navItems = [
  { id: 'home', label: 'Home', icon: 'home', to: '/' },
  { id: 'works', label: 'Works', icon: 'terminal', to: '/#works' },
  { id: 'skills', label: 'Skills', icon: 'hub', to: '/#skills' },
  { id: 'articles', label: 'Articles', icon: 'article', to: '/#articles' },
  { id: 'contact', label: 'Contact', icon: 'alternate_email', to: '/contact' },
]

export function activeNavId(pathname, hash) {
  if (pathname.startsWith('/works')) return 'works'
  if (pathname.startsWith('/articles')) return 'articles'
  if (pathname === '/contact') return 'contact'
  if (hash === '#works') return 'works'
  if (hash === '#skills') return 'skills'
  if (hash === '#articles') return 'articles'
  if (hash === '#contact') return 'contact'
  return 'home'
}
