import { useState } from 'react'
import { QrMark } from '../components/Brand'
import Icon from '../components/Icon'
import { profile } from '../data/profile'

const focusAreas = ['大模型应用', '多模态智能', 'Agentic 平台架构', '企业级 AI 效率工具']

const topics = [
  { value: 'full-time', label: '💼 全职契机 (Full-Time AI PM Lead)' },
  { value: 'advisory', label: '🧭 顾问咨询 (Product / Model Strategy)' },
  { value: 'partnership', label: '⚡ 项目合作 (Agent POC / Ecosystem)' },
  { value: 'essay-talk', label: '💬 技术随笔与学术交流 (Open Dialogue)' },
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  topic: 'full-time',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [phase, setPhase] = useState('idle')
  const [sent, setSent] = useState(false)
  const [emailLabel, setEmailLabel] = useState('复制')
  const [wechatOpen, setWechatOpen] = useState(false)
  const [wechatLabel, setWechatLabel] = useState('一键复制微信号')
  const [resumeOpen, setResumeOpen] = useState(false)
  const [downloadPhase, setDownloadPhase] = useState('idle')

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submitInquiry(event) {
    event.preventDefault()
    setPhase('sending')
    setTimeout(() => {
      setPhase('done')
      setSent(true)
      setForm(initialForm)
      setTimeout(() => setPhase('idle'), 4000)
    }, 900)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setEmailLabel('已复制')
      setTimeout(() => setEmailLabel('复制'), 2000)
    } catch {
      setEmailLabel('已选中文本')
    }
  }

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(profile.wechatContact)
      setWechatLabel('✓ 微信号已复制到剪贴板')
      setTimeout(() => setWechatLabel('一键复制微信号'), 2200)
    } catch {
      setWechatLabel('请手动复制')
    }
  }

  function startDownload() {
    setResumeOpen(false)
    setDownloadPhase('loading')
    setTimeout(() => {
      setDownloadPhase('done')
      setTimeout(() => setDownloadPhase('idle'), 2500)
    }, 700)
  }

  return (
    <div className="flex flex-col pb-8">
      <section className="flex flex-col space-y-space-md px-margin-mobile pt-space-md">
        <div className="flex items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm text-on-surface-variant">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-container" />
            DISPATCH // CONTACT & OPPORTUNITY
          </span>
        </div>
        <div className="flex flex-col space-y-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-surface">
            建立连接{' '}
            <span className="ml-1 font-label-lg text-label-lg font-normal text-on-surface-variant">
              / Get in Touch
            </span>
          </h1>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            无论探讨前沿 AI 产品落地、深度团队顾问咨询、还是全职合作契机，随时欢迎交流。
          </p>
        </div>
        <div className="relative flex flex-col space-y-space-sm overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-container opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="font-label-sm text-label-sm font-medium uppercase tracking-wider text-on-surface">
                当前工作状态 / Status
              </span>
            </div>
            <span className="rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
              Q1–Q2 2025
            </span>
          </div>
          <div className="font-headline-sm text-headline-sm text-on-surface">
            接受 Full-time (Remote / Hybrid) 及 Advisory 深度顾问
          </div>
          <div className="flex flex-col space-y-1.5 pt-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              偏好领域 / Focus Areas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {focusAreas.map((area) => (
                <span key={area} className="rounded bg-surface-container-high px-2.5 py-1 font-label-sm text-label-sm text-on-surface">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-space-sm px-margin-mobile pt-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            01 / 档案速递 CURRICULUM VITAE
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">v2.4 • Updated</span>
        </div>
        <div className="flex flex-col space-y-space-md rounded-xl bg-surface-container p-space-md shadow-md">
          <div className="flex items-start gap-space-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest text-secondary shadow-sm">
              <Icon name="description" className="text-2xl" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="truncate font-label-md text-label-md font-medium text-on-surface">
                Mavien_AI_Product_Manager_Resume.pdf
              </div>
              <div className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                最新中英双语版 • AI 原生架构与商业化落地实践记录 (PDF 1.8MB)
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-space-xs pt-1">
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-surface-container-high font-label-md text-label-md text-on-surface transition-all hover:bg-surface-container-highest active:scale-[0.98]"
              onClick={() => setResumeOpen(true)}
            >
              <Icon name="visibility" className="text-base" />
              在线预览
            </button>
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-surface-variant font-label-md text-label-md text-on-surface transition-all hover:bg-surface-bright active:scale-[0.98]"
              onClick={startDownload}
            >
              <Icon
                name={downloadPhase === 'loading' ? 'sync' : downloadPhase === 'done' ? 'check' : 'file_download'}
                className={`text-base ${downloadPhase === 'loading' ? 'animate-spin' : ''} ${downloadPhase === 'done' ? 'text-secondary' : ''}`}
              />
              {downloadPhase === 'loading' ? '传输中...' : downloadPhase === 'done' ? '已开始下载' : '一键下载'}
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-space-sm px-margin-mobile pt-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            02 / 发送意向与留言 DIRECT INQUIRY
          </span>
          <span className="font-label-sm text-label-sm text-on-tertiary-container">24h 内反馈</span>
        </div>
        <div className="rounded-xl bg-surface-container p-space-md shadow-lg">
          <form className="flex flex-col space-y-space-md" onSubmit={submitInquiry}>
            <Field label="您的姓名 / NAME" hint="Required" hintClass="text-on-tertiary-container">
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="例如：Dr. Alex Chen"
                className={inputClass}
              />
            </Field>
            <Field label="公司 / 机构 / 团队 / ORGANIZATION" hint="Optional" hintClass="text-outline">
              <input
                name="company"
                value={form.company}
                onChange={update}
                placeholder="例如：Linear Labs / Stealth Startup"
                className={inputClass}
              />
            </Field>
            <Field label="联络邮箱 / EMAIL" hint="Required" hintClass="text-on-tertiary-container">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="alex.chen@domain.ai"
                className={inputClass}
              />
            </Field>
            <Field label="探讨议题 / PURPOSE OF CONTACT">
              <div className="relative">
                <select
                  name="topic"
                  value={form.topic}
                  onChange={update}
                  className={`${inputClass} cursor-pointer appearance-none pr-9`}
                >
                  {topics.map((topic) => (
                    <option key={topic.value} value={topic.value} className="bg-surface-container-high">
                      {topic.label}
                    </option>
                  ))}
                </select>
                <Icon
                  name="expand_more"
                  className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xl text-on-surface-variant"
                />
              </div>
            </Field>
            <Field label="留言内容 / MESSAGE" hint="Markdown support" hintClass="text-on-tertiary-container">
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={update}
                placeholder="简述您的背景、团队愿景、或计划讨论的具体技术方向..."
                className={`${inputClass} h-auto resize-none py-space-sm leading-relaxed`}
              />
            </Field>
            <div className="flex flex-col space-y-2 pt-1">
              <button
                type="submit"
                disabled={phase !== 'idle'}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary-container font-headline-sm text-headline-sm text-white shadow-lg transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-90"
              >
                <Icon
                  name={phase === 'sending' ? 'refresh' : phase === 'done' ? 'task_alt' : 'send'}
                  className={`text-lg ${phase === 'sending' ? 'animate-spin' : ''}`}
                />
                <span>
                  {phase === 'sending'
                    ? '正在建立加密连接...'
                    : phase === 'done'
                      ? '已成功递送 / Message Dispatched'
                      : '发送联络留言 (Dispatch Message)'}
                </span>
              </button>
              {sent ? (
                <div className="rounded bg-surface-container-high px-3 py-2 text-center font-label-sm text-label-sm text-on-surface">
                  ✓ 消息已加密记录，感谢联络！我将在 24 小时内查阅并回复。
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </section>

      <section className="flex flex-col space-y-space-sm px-margin-mobile pt-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            03 / 即时联络渠道 DIRECT CHANNELS
          </span>
          <span className="font-label-sm text-label-sm text-on-tertiary-container">Global • Direct</span>
        </div>
        <div className="flex items-center justify-between gap-space-sm rounded-xl bg-surface-container p-space-md shadow-md">
          <div className="flex min-w-0 items-center gap-space-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface">
              <Icon name="mail" className="text-xl" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                电子邮箱 / EMAIL
              </span>
              <span className="truncate font-label-md text-label-md font-medium text-on-surface select-all">
                {profile.email}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="flex h-9 shrink-0 items-center gap-1 rounded-lg bg-surface-container-high px-3 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container-highest"
            onClick={copyEmail}
          >
            <Icon name="content_copy" className="text-sm" />
            {emailLabel}
          </button>
        </div>
        <div className="flex flex-col space-y-space-sm rounded-xl bg-surface-container p-space-md shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface">
                <Icon name="chat" className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                  微信沟通 / WECHAT
                </span>
                <span className="font-label-md text-label-md font-medium text-on-surface">{profile.wechatContact}</span>
              </div>
            </div>
            <button
              type="button"
              className="flex h-9 items-center gap-1 rounded-lg bg-surface-container-high px-3 font-label-sm text-label-sm text-on-surface transition-colors hover:bg-surface-container-highest"
              onClick={() => setWechatOpen(true)}
            >
              <Icon name="qr_code_2" className="text-sm" />
              扫码添加
            </button>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            添加时请备注：“公司/姓名 + 探讨意图”，以便快速通过验证与分类归档。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-space-xs pt-1">
          {['IN', 'GH', 'X', 'JK'].map((key) => profile.links.find((link) => link.key === key)).map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-space-xs rounded-xl bg-surface-container p-space-sm transition-all hover:bg-surface-container-high"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-container-highest font-label-sm text-label-sm font-semibold text-on-surface">
                {link.key === 'X' ? '𝕏' : link.key}
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate font-label-md text-label-md text-on-surface transition-colors group-hover:text-primary">
                  {link.label}
                </span>
                <span className="truncate font-label-sm text-label-sm text-on-surface-variant">{link.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="flex flex-col space-y-space-xs px-margin-mobile pt-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            04 / 常驻节点 LOCATION & TIMING
          </span>
          <span className="font-label-sm text-label-sm text-on-tertiary-container">UTC+8 / Asia</span>
        </div>
        <div className="flex flex-col space-y-space-sm rounded-xl bg-surface-container p-space-md shadow-md">
          <div className="flex items-center justify-between text-on-surface">
            <div className="flex items-center gap-2">
              <Icon name="location_on" className="text-base text-secondary" />
              <span className="font-body-md text-body-md font-medium">上海 · 漕河泾 / 深圳 · 科技园</span>
            </div>
            <span className="rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
              Remote Worldwide
            </span>
          </div>
          <div className="relative h-32 overflow-hidden rounded-lg bg-surface-container-lowest">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,180,169,0.18),transparent_28%),linear-gradient(160deg,#1a2433,#12131a_55%,#1c1816)]" />
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
            <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm text-on-surface drop-shadow">
                Active Base: Shanghai & Shenzhen Core Hub
              </span>
            </div>
          </div>
        </div>
      </section>

      {wechatOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 p-gutter-mobile backdrop-blur-md"
          onClick={() => setWechatOpen(false)}
        >
          <div
            className="relative flex w-full max-w-xs flex-col items-center space-y-space-md rounded-xl bg-surface-container p-space-md shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="qr_code_2" className="text-lg text-secondary" />
                <span className="font-label-md text-label-md font-medium text-on-surface">微信名片 QR Code</span>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high text-on-surface"
                onClick={() => setWechatOpen(false)}
                aria-label="关闭"
              >
                <Icon name="close" className="text-sm" />
              </button>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-surface-bright p-3 shadow-inner">
              <div className="rounded bg-white p-2">
                <QrMark />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-1 text-center">
              <span className="font-label-sm text-label-sm font-semibold tracking-wider text-on-surface">
                微信号: {profile.wechatContact}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">长按识别二维码或搜索 ID 添加</span>
            </div>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface"
              onClick={copyWechat}
            >
              <Icon name="content_copy" className="text-sm" />
              {wechatLabel}
            </button>
          </div>
        </div>
      ) : null}

      {resumeOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/85 p-gutter-mobile backdrop-blur-md"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="flex max-h-[80dvh] w-full max-w-sm flex-col space-y-space-md rounded-xl bg-surface-container p-space-md shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="badge" className="text-lg text-secondary" />
                <span className="font-label-md text-label-md font-medium text-on-surface">
                  CV 速览 / Executive Abstract
                </span>
              </div>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-high"
                onClick={() => setResumeOpen(false)}
                aria-label="关闭"
              >
                <Icon name="close" className="text-sm" />
              </button>
            </div>
            <div className="flex-1 space-y-space-sm overflow-y-auto">
              <div className="flex flex-col space-y-1 rounded-lg bg-surface-container-low p-3">
                <span className="font-label-sm text-label-sm font-medium text-secondary">CORE IDENTITY</span>
                <p className="font-body-sm text-body-sm text-on-surface">
                  Lead AI Product Manager • 6+ 年 AI 系统架构与商业产品化经验
                </p>
              </div>
              <div className="flex flex-col space-y-1 rounded-lg bg-surface-container-low p-3">
                <span className="font-label-sm text-label-sm font-medium text-secondary">HIGHLIGHT TRACK RECORD</span>
                <ul className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  <li>• 主导百亿参数 Enterprise Multi-Agent 协作网络，召回准确度 94.6%</li>
                  <li>• 落地千万级 Token 吞吐量企业 RAG Pipeline，响应延迟下降 42%</li>
                  <li>• 操盘生成式 AI 生产力应用从 0 到 100 万 MAU 规模增长</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-1 rounded-lg bg-surface-container-low p-3">
                <span className="font-label-sm text-label-sm font-medium text-secondary">TECH REPERTOIRE</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  LangChain / LlamaIndex / Agentic Workflows / PyTorch / VectorDB (Qdrant) / Eval Harness
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-secondary-container font-label-md text-label-md text-white"
              onClick={startDownload}
            >
              <Icon name="download" className="text-base" />
              下载完整中英文双语版
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

const inputClass =
  'h-11 w-full rounded-lg bg-surface-container-low px-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline transition-all focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_rgba(255,180,169,0.3)] focus:outline-none'

function Field({ label, hint, hintClass = '', children }) {
  return (
    <label className="flex flex-col space-y-1">
      <span className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
        <span>{label}</span>
        {hint ? <span className={hintClass}>{hint}</span> : null}
      </span>
      {children}
    </label>
  )
}
