import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { QrMark } from '../components/Brand'
import CrystalizedBall from '../components/Crystalized_Ball'
import Icon from '../components/Icon'
import { useToast } from '../components/Shell'
import { profile } from '../data/profile'

const pills = [
  'LLM Agent 编排',
  '多模态工业质检',
  'Prompt 评估流(Eval)',
  '数据飞轮',
  '企业级 B2B SaaS',
]

const strengths = [
  { icon: 'hub', title: 'Agent 系统架构', text: 'Multi-Agent 路由设计、动态 Planning 拓扑与记忆持久化。' },
  { icon: 'rule', title: '模型评测体系', text: '自动化 Golden Dataset 构建与真实业务场景 Eval 回归基准。' },
  { icon: 'terminal', title: '上下文工程', text: 'Context Pruning、结构化 Schema 输出与微调对齐策略。' },
  { icon: 'database', title: '企业级 RAG', text: '混合检索(BM25+Dense)、分块重排与图谱上下文增强。' },
]

const hardSkills = [
  { icon: 'schema', title: 'Agent 编排与路由架构', text: 'ReAct 框架、多分支并行、长短期状态机机制、回滚与容错治理' },
  { icon: 'query_stats', title: '评估流设计 (Eval Design)', text: 'Golden Datasets 建设、合成数据清洗、基于 LLM-as-a-Judge 的多维打分矩阵' },
  { icon: 'manage_search', title: '企业级知识库与 RAG 优化', text: '分块策略、混合向量检索 (Hybrid Search)、重排序 (Reranking) 及事实性对齐' },
]

const leadership = [
  { title: '复杂系统工程抽象', text: '将非确定性黑盒转化为具备 SLA 保障的工业级接口' },
  { title: '跨学科团队协同', text: '同频算法研究员、数据工程师与前端体验设计师' },
  { title: '商业化与定价策略', text: 'Token 消耗经济模型计算、按席位 vs 按价值调用计费' },
  { title: '极限敏捷迭代推进', text: '7天内搭建 MVP，从线上 Bad Case 驱动周级模型更新' },
]

const tools = [
  'LangChain',
  'LlamaIndex',
  'Python/FastAPI',
  'Figma',
  'Weights & Biases',
  'Postman',
  'vLLM',
  'PostgreSQL / pgvector',
]

export default function HomePage() {
  const { hash } = useLocation()
  const toast = useToast()
  const [wechatOpen, setWechatOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [resumeAsk, setResumeAsk] = useState(false)

  useEffect(() => {
    if (!hash) return
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2500)
    } catch {
      toast('请手动复制邮箱')
    }
  }

  async function copyWechat() {
    try {
      await navigator.clipboard.writeText(profile.wechatHome)
      toast(`微信号 ${profile.wechatHome} 已复制`)
      setWechatOpen(false)
    } catch {
      toast('请手动复制微信号')
    }
  }

  return (
    <div className="flex flex-col">
      <section id="home" className="relative flex flex-col gap-space-lg overflow-hidden px-margin-mobile pt-space-lg pb-space-xl">
        <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-secondary-container/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-20 -z-10 h-64 w-64 rounded-full bg-surface-container-highest/20 blur-2xl" />

        <div className="inline-flex items-center gap-space-xs self-start rounded-full bg-surface-container-high/80 px-3 py-1.5 shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            AI Product Lead · Agentic Workflow & Multimodal
          </span>
        </div>

        <div className="flex items-center gap-space-md">
          <div className="relative shrink-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-surface-container-lowest shadow-md ring-1 ring-white/10">
              <CrystalizedBall
                preset="plasma"
                color="#F25BD0"
                size={0.7}
                crackle={0.85}
                fill={0.5}
                interactive
                hoverStrength={0.7}
                strands={6}
                flares={0.65}
                glow={0.9}
                sparks={0.6}
                particleCount={15000}
                motion="rise"
                particleShape="square"
                depth={0.6}
                sway={0.5}
                twinkle={0.5}
                haze={0.7}
                dustSpeed={1}
                speed={1}
                intro
                paused={false}
              />
            </div>
            <span className="absolute right-1 bottom-1 h-3.5 w-3.5 rounded-full bg-[#10b981] ring-2 ring-surface" />
          </div>
          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
                Mavien
              </h2>
              <span className="rounded bg-surface-container-highest px-2 py-0.5 font-label-sm text-label-sm text-primary">
                Beijing · Remote
              </span>
            </div>
            <p className="mt-0.5 truncate font-body-sm text-body-sm text-on-surface-variant">
              Ex-Unicorn AI Lab Lead · Agent Architect
            </p>
            <p className="mt-1 font-mono font-label-sm text-label-sm text-secondary-container">
              100M+ Daily API LLM Calls
            </p>
          </div>
        </div>

        <div className="space-y-space-xs">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-medium tracking-tight text-on-surface">
            让大模型智能以
            <span className="underline decoration-secondary-container decoration-2 underline-offset-4">
              优雅、可靠
            </span>
            的产品形态落地。
          </h1>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            沉淀理性工程化系统架构与极致克制的人机体验，专注于将前沿大语言模型与多模态技术解构为企业级确定性业务增长。
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {pills.map((pill) => (
            <span
              key={pill}
              className={`rounded-full px-3 py-1 font-label-sm text-label-sm ${
                pill.includes('Eval')
                  ? 'bg-secondary-container/20 text-secondary'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-space-xs pt-space-xs">
          <a
            href="#works"
            className="flex h-12 w-full items-center justify-center gap-space-xs rounded-xl bg-secondary-container text-white shadow-lg transition-all hover:opacity-95 active:scale-[0.99]"
          >
            <span className="font-label-lg text-label-lg font-medium">查看精选产品案例</span>
            <Icon name="arrow_downward" className="text-base" />
          </a>
          <div className="grid grid-cols-2 gap-space-xs">
            <Link
              to="/contact"
              className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-surface-container-high text-on-surface transition-colors hover:bg-surface-container-highest"
            >
              <Icon name="calendar_today" className="text-sm text-on-surface-variant" />
              <span className="font-label-md text-label-md">预约 1v1 交流</span>
            </Link>
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-surface-container-high font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-highest"
              onClick={() => setResumeAsk(true)}
            >
              <Icon name="download" className="text-sm text-on-surface-variant" />
              简历 (PDF)
            </button>
          </div>
          {resumeAsk ? (
            <div className="rounded-xl bg-surface-container-low p-space-sm font-body-sm text-body-sm text-on-surface-variant">
              即将下载【Mavien_AI产品总监_中英文完整履历.pdf】（2.4MB）。
              <div className="mt-2 flex gap-space-xs">
                <button
                  type="button"
                  className="h-9 flex-1 rounded-lg bg-secondary-container font-label-sm text-label-sm text-white"
                  onClick={() => {
                    setResumeAsk(false)
                    toast('PDF 简历生成打包中，已向直聘企业库发送最新版')
                  }}
                >
                  继续
                </button>
                <button
                  type="button"
                  className="h-9 flex-1 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface"
                  onClick={() => setResumeAsk(false)}
                >
                  取消
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="flex flex-col gap-space-lg bg-surface-container-low px-margin-mobile py-space-xl">
        <SectionLabel icon="psychology" meta="EST. 2019-2025">
          01 // Philosophy & Background
        </SectionLabel>
        <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-mono font-label-sm text-label-sm text-secondary">TRACK RECORD</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">2022 - 2024</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
            前独角兽 AI 创新实验室 · 产品负责人
          </h3>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            从 0 到 1 组建多模态工程与产品团队，主导面向全球开发者的智能体生态平台。从模型选型、推理成本优化到确定性兜底架构，推动单日调用量突破 1.2 亿次，达成 860 万美元 ARR。
          </p>
        </div>
        <div className="relative flex flex-col gap-space-xs overflow-hidden rounded-xl bg-surface-container-lowest p-space-md">
          <div className="absolute top-0 left-0 h-full w-1.5 bg-secondary-container" />
          <span className="font-mono font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Product Methodology
          </span>
          <blockquote className="font-body-lg text-body-lg leading-snug font-medium text-on-surface italic">
            “理性工程化思维 × 克制的人性化交互。不追求噱头式智能，只做真正产生商业价值与效率跃迁的系统级体验。”
          </blockquote>
          <p className="mt-1 font-label-sm text-label-sm text-on-surface-variant">
            拒绝伪需求对话框，让大模型隐退至高效交互的确定性底座。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-space-xs">
          {strengths.map((item) => (
            <div key={item.title} className="flex flex-col justify-between gap-space-sm rounded-xl bg-surface-container p-space-md">
              <Icon name={item.icon} className="text-2xl text-secondary" />
              <div>
                <h4 className="font-label-lg text-label-lg font-medium text-on-surface">{item.title}</h4>
                <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="works" className="flex flex-col gap-space-lg px-margin-mobile py-space-xl">
        <SectionLabel icon="code_blocks" meta="3 Production Projects">
          02 // Selected Works
        </SectionLabel>

        <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container shadow-md">
          <WorkHead label="Enterprise Agent Workflow" tag="B2B SaaS" dot="bg-secondary-container" />
          <div className="px-space-md pb-space-sm">
            <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
              NexusAgent: 企业级多智能体协同流水线
            </h3>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              针对跨部门复杂业务流（需求拆解-接口生成-校验审计），设计异步状态机调度多专业 Agent 协作闭环。
            </p>
          </div>
          <div className="mx-space-md flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-space-sm font-mono text-label-sm">
            <div className="flex items-center justify-between text-on-surface-variant">
              <span>TASK_INPUT</span>
              <Icon name="arrow_forward" className="text-xs" />
              <span className="font-medium text-secondary">[PLANNER_AGENT]</span>
              <Icon name="arrow_forward" className="text-xs" />
              <span>PARALLEL_EXEC</span>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center text-[10px]">
              <span className="rounded bg-surface-container p-1 text-on-surface">Data Fetch</span>
              <span className="rounded bg-surface-container p-1 text-on-surface">Schema Gen</span>
              <span className="rounded bg-secondary-container/30 p-1 font-bold text-secondary">Critic Judge</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-high">
              <div className="h-full w-[84%] bg-secondary-container" />
            </div>
            <div className="flex justify-between text-[10px] text-on-tertiary-container">
              <span>Auto-Recovery Rate: 84%</span>
              <span>P95 Latency: 1.2s</span>
            </div>
          </div>
          <MetricPair left="+42%" leftLabel="协同业务吞吐效率" right="-60%" rightLabel="端到端任务等待时延" />
          <WorkLink to="/works/nexusagent">查看架构拆解与 PRD 摘要</WorkLink>
        </article>

        <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container shadow-md">
          <WorkHead label="Multimodal Vision AI" tag="Smart Industry" dot="bg-secondary" />
          <div className="px-space-md pb-space-sm">
            <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
              OmniVision: 工业级多模态质检与视觉交互
            </h3>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              将视觉大模型轻量化与边缘端部署结合，攻克微小缺陷零样本泛化难题，打造产线巡检工人自然语言检索底座。
            </p>
          </div>
          <div className="mx-space-md flex flex-col gap-2 rounded-lg bg-surface-container-lowest p-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono font-label-sm text-label-sm text-on-surface-variant">
                Defect Detection Accuracy
              </span>
              <span className="font-mono font-label-sm text-label-sm font-bold text-secondary">99.42%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-container-high">
              <div className="h-full w-[99.4%] bg-secondary" />
            </div>
            <div className="flex items-center justify-between font-mono text-[10px] text-on-tertiary-container">
              <span>Baseline Model: 92.1%</span>
              <span>Fine-tuned + LoRA: 99.4%</span>
            </div>
          </div>
          <MetricPair left="¥4,300W+" leftLabel="客户年度品控挽回增收" right="18ms" rightLabel="边缘端推理帧率时延" />
          <WorkLink to="/contact">查阅技术演进与产品指标</WorkLink>
        </article>

        <article className="flex flex-col overflow-hidden rounded-xl bg-surface-container shadow-md">
          <WorkHead label="Evaluation Platform" tag="DevTools" dot="bg-primary-fixed-dim" tone="text-on-surface-variant" />
          <div className="px-space-md pb-space-sm">
            <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
              PromptPilot: 自动化提示词评估与回归测试系统
            </h3>
            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              解决大模型系统迭代中“盲改提示词、按下葫芦起了瓢”痛点。支持基准用例库持续打标、LLM-as-a-Judge 与自动化幻觉率评测。
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 px-space-md pb-space-sm">
            {['CI/CD Pipeline 集成', '语义漂移告警', 'Cost vs Quality Pareto'].map((tag) => (
              <span key={tag} className="rounded bg-surface-container-high px-2 py-1 font-label-sm text-label-sm text-on-surface-variant">
                {tag}
              </span>
            ))}
          </div>
          <WorkLink to="/contact">获取产品原型与测试用例模板</WorkLink>
        </article>
      </section>

      <section id="skills" className="flex flex-col gap-space-lg bg-surface-container-low px-margin-mobile py-space-xl">
        <SectionLabel icon="layers" meta="Engineering × Product">
          03 // Competency Matrix
        </SectionLabel>
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-container" />
            <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">产品硬技能 (Hard Skills)</h3>
          </div>
          {hardSkills.map((item) => (
            <div key={item.title} className="flex items-start gap-space-sm rounded-lg bg-surface-container p-space-sm">
              <Icon name={item.icon} className="mt-0.5 text-xl text-secondary" />
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-medium text-on-surface">{item.title}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-fixed-dim" />
            <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">系统认知与领导力 (Leadership)</h3>
          </div>
          <div className="grid grid-cols-2 gap-space-xs">
            {leadership.map((item) => (
              <div key={item.title} className="rounded-lg bg-surface-container p-space-sm">
                <span className="block font-label-md text-label-md font-medium text-on-surface">{item.title}</span>
                <span className="mt-1 block font-body-sm text-body-sm text-on-surface-variant">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-mono font-label-sm text-label-sm uppercase text-on-surface-variant">
            Production Tool Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span key={tool} className="rounded bg-surface-container-high px-3 py-1 font-mono text-label-sm text-on-surface">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="flex flex-col gap-space-lg px-margin-mobile py-space-xl">
        <SectionLabel icon="menu_book" meta="Thinking in Public">
          04 // Essays & Deep Dives
        </SectionLabel>
        <Link
          to="/articles/system-eval"
          className="flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-md shadow-sm transition-colors hover:bg-surface-container-high"
        >
          <div className="flex items-center justify-between">
            <span className="rounded bg-secondary-container/20 px-2 py-0.5 font-mono font-label-sm text-label-sm text-secondary">
              EVAL METHODOLOGY
            </span>
            <span className="font-mono font-label-sm text-label-sm text-on-surface-variant">12 min read</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm leading-snug font-medium text-on-surface">
            大模型时代产品经理的核心壁垒：从 Prompt Tuning 到系统级 Eval
          </h3>
          <p className="line-clamp-3 font-body-sm text-body-sm text-on-surface-variant">
            只靠写 Prompt 已经没有职业门槛。真正的护城河在于你是否能够将模糊的业务标准，解构成具备重现性的 Golden Dataset 与统计学指标体系，让算法团队心服口服地定向打怪。
          </p>
          <div className="flex items-center justify-between pt-space-xs">
            <span className="font-label-sm text-label-sm text-on-tertiary-container">行业复盘 · 5,200 字</span>
            <Icon name="arrow_forward" className="text-sm text-secondary" />
          </div>
        </Link>
        <article className="flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded bg-surface-container-high px-2 py-0.5 font-mono font-label-sm text-label-sm text-on-surface-variant">
              AGENT ARCHITECTURE
            </span>
            <span className="font-mono font-label-sm text-label-sm text-on-surface-variant">16 min read</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm leading-snug font-medium text-on-surface">
            为何很多企业级 Agent 在真实业务中频频“翻车”？谈确定性兜底设计
          </h3>
          <p className="line-clamp-3 font-body-sm text-body-sm text-on-surface-variant">
            演示 Demo 惊艳，上线实测崩溃。本文深度剖析非受控状态膨胀、长文本上下文迷失、幻觉幻读，以及如何用“状态机围栏 (State Machine Guardrails)”拯救大模型产品。
          </p>
          <div className="flex items-center justify-between pt-space-xs">
            <span className="font-label-sm text-label-sm text-on-tertiary-container">落地避坑指南 · 7,100 字</span>
            <Icon name="arrow_forward" className="text-sm text-secondary" />
          </div>
        </article>
      </section>

      <section id="contact" className="flex flex-col gap-space-lg bg-surface-container-low px-margin-mobile py-space-xl">
        <SectionLabel icon="contact_mail" meta="Available for Hire" metaClass="text-[#10b981]">
          05 // Initiate Dialogue
        </SectionLabel>
        <div className="space-y-space-xs">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile font-medium text-on-surface">
            随时开启一次高效的深度对谈
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            无论是 AI 产品合伙人机会、企业内训赋能，还是多模态/Agentic 系统落地的咨询顾问合作，我都乐于交流碰撞。
          </p>
        </div>
        <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container p-space-md shadow-sm">
          <span className="font-mono font-label-sm text-label-sm text-on-surface-variant">DIRECT INBOX</span>
          <div className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-space-sm">
            <span className="font-mono text-label-md text-on-surface select-all">{profile.email}</span>
            <button
              type="button"
              title="点击复制邮箱"
              className="rounded bg-surface-container-high p-1.5 text-on-surface transition-colors hover:bg-secondary-container hover:text-white"
              onClick={copyEmail}
            >
              <Icon name={emailCopied ? 'check' : 'content_copy'} className="text-base" />
            </button>
          </div>
          {emailCopied ? (
            <span className="font-label-sm text-label-sm text-secondary">✓ 邮箱已成功复制到剪贴板</span>
          ) : null}
        </div>
        <div className="flex items-center justify-between rounded-xl bg-surface-container p-space-md shadow-sm">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-highest text-secondary">
              <Icon name="qr_code_2" className="text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-medium text-on-surface">微信添加 (WeChat)</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">备注：公司 + 姓名 + 事项</span>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg bg-secondary-container px-3 py-1.5 font-label-sm text-label-sm text-white hover:opacity-90"
            onClick={() => setWechatOpen(true)}
          >
            扫码交换名片
          </button>
        </div>
        <div className="flex flex-col gap-space-xs rounded-xl bg-surface-container-lowest p-space-md font-mono text-label-sm text-on-surface-variant">
          <span className="font-semibold text-secondary">TYPICAL TOPICS:</span>
          <p>1. 企业内部 LLM Agent 选型与 ROI 论证</p>
          <p>2. RAG 知识检索准确度低于 80% 的诊断重构</p>
          <p>3. 传统 SaaS 产品的 AI Native 重塑方案</p>
        </div>
        <Link
          to="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary-container font-headline-sm text-headline-sm text-white"
        >
          <Icon name="send" className="text-lg" />
          前往完整联络页
        </Link>
      </section>

      {wechatOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-margin-mobile backdrop-blur-md"
          onClick={() => setWechatOpen(false)}
        >
          <div
            className="relative flex w-full max-w-xs flex-col items-center gap-space-md rounded-xl bg-surface-container-high p-space-lg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-on-surface-variant hover:text-on-surface"
              onClick={() => setWechatOpen(false)}
              aria-label="关闭"
            >
              <Icon name="close" className="text-xl" />
            </button>
            <div className="space-y-1 text-center">
              <h4 className="font-headline-sm text-headline-sm font-medium text-on-surface">微信沟通</h4>
              <p className="font-mono font-label-sm text-label-sm text-on-surface-variant">
                ID: {profile.wechatHome}
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-white p-3 shadow-inner">
              <QrMark />
            </div>
            <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
              长按识别或扫一扫
              <br />
              添加请注明来意与团队背景
            </p>
            <button
              type="button"
              className="w-full rounded-lg bg-surface-container py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-highest"
              onClick={copyWechat}
            >
              复制微信号
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function SectionLabel({ icon, meta, metaClass = 'text-on-surface-variant', children }) {
  return (
    <div className="flex items-center justify-between gap-space-sm">
      <div className="flex items-center gap-space-xs">
        <Icon name={icon} className="text-lg text-secondary-container" />
        <span className="font-mono font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
          {children}
        </span>
      </div>
      <span className={`shrink-0 font-mono font-label-sm text-label-sm ${metaClass}`}>{meta}</span>
    </div>
  )
}

function WorkHead({ label, tag, dot, tone = 'text-secondary' }) {
  return (
    <div className="flex items-center justify-between p-space-md pb-space-sm">
      <div className="flex items-center gap-space-xs">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <span className={`font-mono font-label-sm text-label-sm uppercase ${tone}`}>{label}</span>
      </div>
      <span className="rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
        {tag}
      </span>
    </div>
  )
}

function MetricPair({ left, leftLabel, right, rightLabel }) {
  return (
    <div className="grid grid-cols-2 gap-space-xs p-space-md pt-space-sm">
      <div className="flex flex-col rounded bg-surface-container-low p-space-sm">
        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">{left}</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{leftLabel}</span>
      </div>
      <div className="flex flex-col rounded bg-surface-container-low p-space-sm">
        <span className="font-headline-sm text-headline-sm font-semibold text-secondary">{right}</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{rightLabel}</span>
      </div>
    </div>
  )
}

function WorkLink({ to, children }) {
  return (
    <div className="px-space-md pb-space-md">
      <Link
        to={to}
        className="inline-flex items-center gap-1 font-label-md text-label-md text-on-surface transition-colors hover:text-secondary"
      >
        <span>{children}</span>
        <Icon name="arrow_outward" className="text-sm" />
      </Link>
    </div>
  )
}
