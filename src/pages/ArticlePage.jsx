import { useEffect, useState } from 'react'
import { Avatar } from '../components/Brand'
import Icon from '../components/Icon'
import { useToast } from '../components/Shell'

const layers = [
  {
    id: 'L1',
    title: 'Code-based Eval',
    tag: '硬性约束',
    accent: false,
    text: '无需消耗大模型 Token 的刚性断言。针对 JSON Schema 正则合规性、SQL 语法有效性、敏感词命中及 API Payload 完整度进行 100% 毫秒级阻断拦截。',
    stats: ['Latency: <15ms', 'Cost: $0.00 / query', 'Confidence: 100%'],
  },
  {
    id: 'L2',
    title: 'LLM-as-a-Judge',
    tag: '语义仲裁',
    accent: true,
    text: '利用头部旗舰模型（如 GPT-4o / Claude 3.5 Sonnet）根据预设的多维打分标准（Rubric）进行语义层打分。针对推理链（Chain-of-Thought）、幻觉检出、事实忠实度开展自动化回归扫描。',
    stats: ['Sampling: 15-20%', 'Rubric: 1-5 Scale', 'Agreement: 88.2%'],
  },
  {
    id: 'L3',
    title: 'Human Spot-checking',
    tag: '专家闭环',
    accent: false,
    text: '人类专家与业务 PM 抽检长尾异常样本。当裁判模型打分置信度低（Low Confidence Flag）或用户点击踩（Dislike）时触发回流机制，校准评分矩阵并更新微调黄金数据集。',
    stats: ['Daily: ~100 cases', 'Target: Active Learning', 'Ground Truth'],
  },
]

const pillars = [
  { icon: 'verified_user', title: '安全性与合规度 (Safety & Alignment)', weight: 'Weight: 35%', text: '提示词越狱防御、竞品敏感提及过滤、隐私数据（PII）防泄露边界。' },
  { icon: 'fact_check', title: '事实忠实度 (Faithfulness)', weight: 'Weight: 30%', text: '严防非受控生成，输出内容是否 100% 锚定在知识库召回的 Document Chunk 之中。' },
  { icon: 'checklist', title: '任务完整度 (Task Completeness)', weight: 'Weight: 20%', text: '多轮交互中意图拆解的完备性，是否有效触发并正确回填对应 Tool/Function Call。' },
  { icon: 'tune', title: '语气一致性 (Tone Consistency)', weight: 'Weight: 15%', text: '品牌 Persona 契合度、句式复杂度与行业专业术语密度的可控分布。' },
]

export default function ArticlePage() {
  const toast = useToast()
  const [progress, setProgress] = useState(0)
  const [bookmarked, setBookmarked] = useState(false)
  const [liked, setLiked] = useState(false)
  const [collected, setCollected] = useState(false)
  const likes = 612 + (liked ? 1 : 0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    function onScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight <= 0) return
      const next = Math.min(100, Math.max(0, Math.round((window.scrollY / scrollHeight) * 100)))
      setProgress(next)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleLike() {
    setLiked((current) => !current)
  }

  function subscribe(event) {
    event.preventDefault()
    if (!email.includes('@')) return
    setSubscribed(true)
    setEmail('')
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* toast still confirms the action */
    }
    toast('文章链接已复制至剪贴板')
  }

  return (
    <div className="flex flex-col space-y-space-lg px-gutter-mobile pb-margin">
      <div className="sticky top-16 z-30 -mx-gutter-mobile flex items-center justify-between bg-surface/90 px-gutter-mobile py-space-xs text-on-surface-variant backdrop-blur-md">
        <div className="flex items-center gap-space-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-container" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">PM Synthesis // V4.2</span>
        </div>
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            aria-label="收藏"
            className={`flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-low ${bookmarked ? 'text-secondary' : 'text-on-surface'}`}
            onClick={() => setBookmarked((value) => !value)}
          >
            <Icon name={bookmarked ? 'bookmark' : 'bookmark_border'} className="text-base" filled={bookmarked} />
          </button>
          <button
            type="button"
            aria-label="分享"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-low text-on-surface"
            onClick={copyLink}
          >
            <Icon name="ios_share" className="text-base" />
          </button>
          <div className="h-3.5 w-px bg-surface-variant" />
          <span className="font-label-sm text-label-sm text-outline">{progress}%</span>
        </div>
      </div>

      <article className="flex flex-col space-y-space-lg">
        <header className="flex flex-col space-y-space-md">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="rounded-full bg-secondary-container/20 px-2.5 py-0.5 font-label-sm text-label-sm text-secondary">
              Deep Dive
            </span>
            <span className="rounded-full bg-surface-container-high px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
              System Eval
            </span>
            <span className="rounded-full bg-surface-container-high px-2.5 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
              Architecture
            </span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight font-semibold tracking-tight text-on-surface">
            从 Prompt Engineering 到系统级 Eval：AI 产品经理的核心壁垒迁移
          </h1>
          <div className="flex items-center justify-between pt-space-xs">
            <div className="flex items-center gap-space-sm">
              <div className="relative">
                <Avatar className="h-10 w-10" mark="text-label-md" />
                <span className="absolute -right-0.5 -bottom-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-surface-container-lowest">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Mavien</span>
                  <Icon name="verified" className="text-sm text-secondary" filled />
                </div>
                <span className="font-label-sm text-label-sm text-outline">Principal AI PM · Oct 24</span>
              </div>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="flex items-center gap-1 font-label-sm text-label-sm text-outline">
                <Icon name="schedule" className="text-xs" />
                8 min read
              </span>
              <span className="font-label-sm text-label-sm text-secondary">4,820 views</span>
            </div>
          </div>
        </header>

        <div className="h-0.5 w-full overflow-hidden rounded-full bg-surface-container-high">
          <div className="h-full bg-secondary transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>

        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-sm">
          <Icon name="format_quote" className="pointer-events-none absolute -top-6 -right-4 text-7xl text-surface-container-high/40" />
          <div className="relative z-10 flex flex-col space-y-space-xs">
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary">
              <Icon name="lightbulb" className="text-sm" />
              <span className="font-medium tracking-wide uppercase">Core Thesis // 核心观点导读</span>
            </div>
            <blockquote className="font-body-lg text-body-lg leading-relaxed font-medium text-on-surface italic">
              “在过去一年，会写优质 Prompt 曾是 AI PM 的标志；但在大模型落地真实业务的深水区，构建高置信度的自动化评测基准（Eval）才是核心护城河。”
            </blockquote>
          </div>
        </div>

        <section className="flex flex-col space-y-space-md pt-space-xs">
          <Heading index="01 /" title="Prompt 的边际递减效应与“玄学优化”困局" />
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            在商业化 Agent 或生产级 RAG 系统的早期验证期，大部分团队都经历过“Prompt 魔法时刻”：调整一段 Few-shot、增加约束语调指令，测试集响应立刻变得惊艳。但随着模型面对千差万别的真实长尾用户请求，以单点 Prompt 为核心的调试模式迅速遭遇收益递减墙。
          </p>
          <div className="space-y-space-sm rounded-xl bg-surface-container p-space-md shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                <Icon name="warning" className="text-sm" />
                生产环境回归痛点 (Regression Dilemma)
              </span>
              <span className="shrink-0 font-label-sm text-label-sm text-outline">Empirical Case</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              “修改了一个 System Prompt 修复了财务报表摘要的单位混淆问题，却意外诱发了法律免责声明被截断的边缘 Bug——由于缺乏全局回归评测矩阵，这种劣化往往在用户投诉后才被发觉。”
            </p>
            <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
              <div className="flex flex-col rounded-lg bg-surface-container-high p-space-sm">
                <span className="font-label-sm text-label-sm text-outline">手工 Prompt 调试</span>
                <span className="mt-0.5 font-headline-sm text-headline-sm text-error">-34%</span>
                <span className="mt-0.5 font-label-sm text-label-sm text-on-surface-variant">多轮对话泛化度</span>
              </div>
              <div className="flex flex-col rounded-lg bg-surface-container-high p-space-sm">
                <span className="font-label-sm text-label-sm text-outline">评测集置信度</span>
                <span className="mt-0.5 font-headline-sm text-headline-sm text-secondary">&gt; 98.4%</span>
                <span className="mt-0.5 font-label-sm text-label-sm text-on-surface-variant">防隐蔽退化覆盖</span>
              </div>
            </div>
          </div>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            纯靠肉眼 review 输出或在 Playground 里反复碰运气的“玄学 Prompt 工程”，无法对抗大模型的随机性熵增。当业务迭代频率进入以天为单位时，没有基准（Baseline）的 Prompt 调整等同于没有单元测试就上线核心交易系统。
          </p>
        </section>

        <Divider />

        <section className="flex flex-col space-y-space-md">
          <Heading index="02 /" title="构建三层 Eval 体系（系统级防御工程）" />
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            一个具备工业级自愈与演化能力的生成式 AI 产品架构，必须构建递进式的多层次防御网络。根据我们在高并发企业级 Agent 的落地经验，Eval 系统应收敛为金字塔形的三层拓扑结构：
          </p>
          <div className="space-y-space-sm">
            {layers.map((layer) => (
              <div key={layer.id} className="flex flex-col space-y-space-xs rounded-xl bg-surface-container p-space-md shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded font-label-sm text-label-sm font-semibold ${
                        layer.accent ? 'bg-secondary-container/40 text-secondary' : 'bg-surface-container-high text-secondary'
                      }`}
                    >
                      {layer.id}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{layer.title}</h3>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 font-label-sm text-label-sm ${
                      layer.accent ? 'bg-secondary-container/20 text-secondary' : 'bg-surface-container-high text-outline'
                    }`}
                  >
                    {layer.tag}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{layer.text}</p>
                <div className="flex items-center justify-between gap-2 rounded-lg bg-surface-container-lowest p-space-xs font-label-sm text-label-sm text-secondary">
                  {layer.stats.map((stat, index) => (
                    <span key={stat} className={index === 1 ? '' : 'text-outline'}>
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-inner">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 font-label-sm text-label-sm text-outline">
                <Icon name="hub" className="text-sm" />
                PIPELINE SCHEMATIC // 评测流水线
              </span>
              <span className="font-label-sm text-label-sm text-secondary">Active CI/CD</span>
            </div>
            <div className="flex flex-col items-center space-y-2 py-2">
              <FlowRow>Prod Query + System Context</FlowRow>
              <FlowRow meta="99.9% Pass">[Filter 1] RegEx & Syntax Guards</FlowRow>
              <FlowRow meta="Rubric G-Eval">[Filter 2] Cross-Model Semantic Scorer</FlowRow>
              <div className="flex w-full items-center justify-between rounded-lg bg-secondary-container/30 px-3 py-2 font-label-sm text-label-sm text-secondary">
                <span>[Audit] Exception Store & PM Golden Set</span>
                <Icon name="sync" className="text-xs" />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section className="flex flex-col space-y-space-md">
          <Heading index="03 /" title="产品经理在评测流中的真实角色：定义“好”的标准" />
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            许多 AI PM 感到迷茫，认为自动化评测建立后，工作重心全部转移到了算法工程师与数据管线开发者手中。其实恰恰相反：工程师擅长优化损失函数，但只有产品经理能定义“什么是好的业务解”。
          </p>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            AI PM 必须将模糊的定性感受（如“回答缺乏同理心”、“语气显得太生硬”、“信息密度太低”）解构为四个严密的定量计算维度：
          </p>
          <div className="grid grid-cols-1 gap-space-xs">
            {pillars.map((item) => (
              <div key={item.title} className="flex items-start gap-space-sm rounded-lg bg-surface-container p-space-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-surface-container-high text-secondary">
                  <Icon name={item.icon} className="text-base" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{item.title}</span>
                    <span className="shrink-0 font-label-sm text-label-sm text-outline">{item.weight}</span>
                  </div>
                  <span className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-surface-container-low p-space-md">
            <h4 className="mb-1 flex items-center gap-1.5 font-label-md text-label-md font-semibold text-on-surface">
              <Icon name="psychology" className="text-sm text-secondary" />
              思维沉淀：PM 从“写手”向“裁判委员会主席”蜕变
            </h4>
            <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              未来两年，卓越的 AI PM 不会比谁记住了更多的 Prompt 框架句式，而是比谁能用敏锐的商业直觉，把业务 KPI 映射成一套连贯、冷酷且具有自修正能力的代码与评测基准体系。
            </p>
          </div>
        </section>

        <Divider />

        <section className="flex flex-col space-y-space-md">
          <Heading index="04 /" title="结语与互动" />
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            构建系统级 Eval 是痛苦且反人性的——它强迫我们放弃巧思与侥幸，直面大模型最脆弱的边界。但正如分布式系统依赖混沌工程淬炼，唯有置于严苛评测流水线中的大模型应用，才能真正撑起百亿美元规模的企业级信赖。
          </p>
          <div className="flex flex-col space-y-space-md rounded-xl bg-surface-container-low p-space-md">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm text-on-surface">你认可这篇深度复盘吗？</span>
              <span className="font-label-sm text-label-sm text-outline">已有点赞 {likes}</span>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                type="button"
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 font-headline-sm text-headline-sm transition-all active:scale-95 ${
                  liked ? 'bg-secondary text-on-secondary' : 'bg-secondary-container text-white'
                }`}
                onClick={toggleLike}
              >
                <Icon name={liked ? 'favorite' : 'favorite_border'} className="text-lg" filled={liked} />
                {liked ? `已共鸣 (${likes})` : `点赞共鸣 (${likes})`}
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-surface-container-high px-space-md py-2.5 font-headline-sm text-headline-sm text-on-surface"
                onClick={() => setCollected((value) => !value)}
              >
                <Icon name={collected ? 'star' : 'star_border'} className="text-lg" filled={collected} />
                {collected ? '已收藏' : '收藏沉淀'}
              </button>
            </div>
            <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-outline">
              <span className="flex items-center gap-1">
                <Icon name="edit_note" className="text-xs" />
                支持批注划线转为思维导图
              </span>
              <button type="button" className="flex items-center gap-0.5 text-secondary" onClick={() => toast('已生成高赞思维导图卡片')}>
                生成精简长图
                <Icon name="chevron_right" className="text-xs" />
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-surface-container p-space-md">
            <div className="flex items-center gap-space-sm">
              <Avatar className="h-12 w-12" mark="text-headline-sm" />
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">Mavien&apos;s Substack & 公众号</span>
                <span className="font-label-sm text-label-sm text-outline">每周四推送 1 篇硬核大模型系统设计与商业逻辑</span>
              </div>
            </div>
            <form className="flex gap-space-xs pt-space-sm" onSubmit={subscribe}>
              <input
                type="email"
                value={email}
                disabled={subscribed}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="输入邮箱地址订阅 Substack..."
                className="flex-1 rounded-lg bg-surface-container-lowest px-3 py-2 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:ring-1 focus:ring-secondary focus:outline-none"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="rounded-lg bg-secondary px-space-md py-2 font-headline-sm text-headline-sm text-on-secondary disabled:opacity-80"
              >
                {subscribed ? '已订阅' : '订阅'}
              </button>
            </form>
            {subscribed ? (
              <p className="pt-space-xs font-label-sm text-label-sm text-secondary">
                ✓ 订阅已确认，最新一期《Agent 运行时调度优化》已发送至邮箱。
              </p>
            ) : null}
          </div>

          <div className="flex flex-col space-y-space-sm pt-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-label-md font-semibold uppercase tracking-wider text-outline">
                Recommended Readings
              </span>
              <span className="font-label-sm text-label-sm text-secondary">全部 14 篇</span>
            </div>
            <Reading
              kicker="系统架构 · 6 min read"
              title="多智能体协作中，如何设计确定性的状态机流转？"
              text="状态漂移、死循环检测与反思环路工程化实践拆解。"
            />
            <Reading
              kicker="商业化洞察 · 11 min read"
              title="企业级 RAG 的成本账：向量检索与上下文窗口扩容的 ROI 临界点"
              text="百万 Token 成本崩塌之后，企业究竟该如何选型？"
            />
          </div>
        </section>
      </article>
    </div>
  )
}

function Heading({ index, title }) {
  return (
    <div className="flex items-baseline gap-space-xs">
      <span className="font-label-md text-label-md font-semibold text-secondary">{index}</span>
      <h2 className="font-headline-md text-headline-md font-medium tracking-tight text-on-surface">{title}</h2>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-1 py-space-xs text-outline-variant">
      <span className="h-1 w-1 rounded-full bg-outline-variant" />
      <span className="h-px w-8 bg-outline-variant" />
      <span className="h-1 w-1 rounded-full bg-outline-variant" />
    </div>
  )
}

function FlowRow({ children, meta }) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-surface-container-high px-3 py-2 font-label-sm text-label-sm text-on-surface">
      <span>{children}</span>
      {meta ? <span className="font-medium text-secondary">{meta}</span> : <Icon name="arrow_downward" className="text-xs text-outline" />}
    </div>
  )
}

function Reading({ kicker, title, text }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-space-md">
      <div className="flex flex-col space-y-1 pr-space-sm">
        <span className="font-label-sm text-label-sm text-secondary">{kicker}</span>
        <h4 className="line-clamp-1 font-headline-sm text-headline-sm text-on-surface">{title}</h4>
        <span className="line-clamp-1 font-body-sm text-body-sm text-on-surface-variant">{text}</span>
      </div>
      <Icon name="arrow_forward" className="shrink-0 text-outline" />
    </div>
  )
}
