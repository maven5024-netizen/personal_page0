import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { useToast } from '../components/Shell'

const pipeline = [
  { step: '01', title: 'Router Agent', detail: '语义意图消歧与路由分类', badge: '99.2% 准度', accent: false },
  { step: '02', title: 'Planner Agent', detail: 'DAG 拓扑任务细分与并行解耦', badge: '无环有向图', accent: false },
  { step: '03', title: 'Worker Agents 集群', detail: '专精子工具：API 调用 / SQL 提取 / 知识检索', badge: '40+ Tools', accent: false },
  { step: '04', title: 'Verifier (校验引擎)', detail: '强类型 Schema 校验 + 自动重试修正', badge: '', accent: true },
]

const metrics = [
  { label: '整体人效提升', value: '+42%', note: '超越基准 15%', up: true },
  { label: '模型幻觉率压缩', value: '1.4%', strike: '18.2%', note: '收敛幅度 -92.3%', accent: true },
  { label: '端到端耗时 (p95)', value: '-58%', note: 'DAG 并行化收益' },
  { label: '每月节省工时', value: '12,000h', note: '跨 4 个核心业务线' },
]

export default function CaseStudyPage() {
  const toast = useToast()

  return (
    <div className="flex flex-col space-y-space-xl px-gutter-mobile pt-space-md pb-12">
      <section className="flex flex-col space-y-space-md">
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Enterprise Production AI
          </span>
          <span className="rounded-full bg-surface-container-low px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant">
            0-to-1 Architecture
          </span>
        </div>
        <div className="space-y-space-xs">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight font-medium text-on-surface">
            NexusAgent 企业级复杂场景多智能体协同平台
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            针对高容错成本、跨业务长链路协作的企业级多智能体编排与执行引擎。
          </p>
        </div>
        <div className="space-y-space-md rounded-xl bg-surface-container-low p-space-md shadow-sm">
          <div className="grid grid-cols-2 gap-space-sm">
            <Meta label="角色" value="Lead AI PM" />
            <Meta label="交付周期" value="6 个月 (端到端孵化)" />
            <Meta label="核心受众" value="跨部门运营 / 风险核查" />
            <Meta label="底座基建" value="Hybrid LLM + Vector DB" />
          </div>
          <div className="flex items-center justify-between rounded-lg bg-surface-container p-space-sm">
            <div className="flex items-center space-x-2">
              <Icon name="bolt" className="text-lg text-secondary" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">日均系统级调度</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">5,000,000+ 次</span>
          </div>
        </div>
      </section>

      <section className="space-y-space-md">
        <SectionKicker index="01 / Challenge" aside="痛点拆解" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface">
          单体大模型在复杂长链业务下的确定性崩塌
        </h3>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          企业业务跨越 ERP、CRM、风控及数据湖四大离散系统。尝试直接利用单一大模型（Single LLM）承载长达 18 步的复合任务时，系统面临严峻瓶颈：
        </p>
        <div className="space-y-space-sm">
          <Pain
            icon="warning"
            title="逻辑迷航与幻觉积聚"
            badge="18.2% 幻觉率"
            text="长上下文下多约束条件丢失，中间步骤推理错误级联放大，导致不可逆的业务决策失误。"
          />
          <Pain
            icon="timer_off"
            title="执行阻塞与长尾超时"
            badge="p99 > 42s"
            muted
            text="同步阻塞式的全量上下文传递使得 API 响应呈指数级波动，无法承载企业级高并发 SLA。"
          />
        </div>
      </section>

      <section className="space-y-space-md">
        <SectionKicker index="02 / Architecture" aside="分层解耦拓扑" />
        <div className="space-y-1">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">确定性编排与多智能体分治协同</h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            构建“分流-编排-分治-校验-旁路兜底”五位一体的企业级多 Agent 工作流：
          </p>
        </div>
        <div className="space-y-3 rounded-xl bg-surface-container-low p-space-md">
          {pipeline.map((node, index) => (
            <div key={node.step}>
              <div
                className={`flex items-center justify-between rounded-lg p-space-sm ${
                  node.accent ? 'bg-surface-container-high' : 'bg-surface-container'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded font-label-sm text-label-sm font-medium ${
                      node.accent
                        ? 'bg-secondary-container font-semibold text-on-secondary-container'
                        : 'bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {node.step}
                  </div>
                  <div>
                    <span className="block font-label-md text-label-md font-medium text-on-surface">{node.title}</span>
                    <span className={`font-label-sm text-label-sm ${node.accent ? 'text-secondary' : 'text-outline'}`}>
                      {node.detail}
                    </span>
                  </div>
                </div>
                {node.accent ? (
                  <Icon name="verified" className="text-base text-secondary" />
                ) : (
                  <span className="rounded bg-surface-container-lowest px-2 py-0.5 font-label-sm text-label-sm text-secondary">
                    {node.badge}
                  </span>
                )}
              </div>
              {index < pipeline.length - 1 ? (
                <div className="-my-1 flex justify-center text-outline">
                  <Icon name="arrow_downward" className="text-sm" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-space-sm">
          <div className="space-y-1.5 rounded-xl bg-surface-container-low p-space-md">
            <div className="flex items-center space-x-2 text-on-surface">
              <Icon name="touch_app" className="text-lg text-secondary" />
              <h4 className="font-label-lg text-label-lg font-medium">人机协同阻断机制 (Human-in-the-loop)</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              设计可配置置信度阈值机制。当 Verifier 置信评分低于 0.85 或涉及金额资金、外呼动作等高敏感行为时，任务毫秒级进入人工审查队列，附带结构化推理溯源上下文。
            </p>
          </div>
          <div className="space-y-1.5 rounded-xl bg-surface-container-low p-space-md">
            <div className="flex items-center space-x-2 text-on-surface">
              <Icon name="shield" className="text-lg text-secondary" />
              <h4 className="font-label-lg text-label-lg font-medium">前置零信任敏感数据动态脱敏</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              在数据灌入 LLM Prompt 之前通过轻量级本地化 NER 算法实现 PII（个人身份信息）实时掩码，保障金融级别数据合规要求。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-space-md">
        <SectionKicker index="03 / Metrics & Impact" aside="投产收益" />
        <h3 className="font-headline-sm text-headline-sm text-on-surface">量化表现：确定性与吞吐效能跃升</h3>
        <div className="grid grid-cols-2 gap-space-sm">
          {metrics.map((item) => (
            <div key={item.label} className="flex flex-col justify-between space-y-3 rounded-xl bg-surface-container-low p-space-md">
              <div className="space-y-0.5">
                <span className="font-label-sm text-label-sm text-outline">{item.label}</span>
                {item.strike ? (
                  <div className="flex items-baseline space-x-1">
                    <span className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-secondary">
                      {item.value}
                    </span>
                    <span className="font-label-sm text-label-sm text-outline line-through">{item.strike}</span>
                  </div>
                ) : (
                  <p className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-on-surface">
                    {item.value}
                  </p>
                )}
              </div>
              {item.up ? (
                <div className="flex items-center gap-1 text-secondary">
                  <Icon name="trending_up" className="text-xs" />
                  <span className="font-label-sm text-label-sm">{item.note}</span>
                </div>
              ) : (
                <span className="font-label-sm text-label-sm text-on-surface-variant">{item.note}</span>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-2 rounded-xl bg-surface-container-low p-space-md">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md font-medium text-on-surface">全场景自动化最终采纳率</span>
            <span className="font-label-md text-label-md font-medium text-secondary">87.0%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
            <div className="h-full w-[87%] rounded-full bg-secondary" />
          </div>
          <div className="flex items-center justify-between text-outline">
            <span className="font-label-sm text-label-sm">人工干预阻断: 13.0%</span>
            <span className="font-label-sm text-label-sm">合规审计零越权</span>
          </div>
        </div>
      </section>

      <section className="space-y-space-md">
        <SectionKicker index="04 / Retrospective" aside="方法论沉淀" />
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md">
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-secondary" />
          <p className="pl-2 font-body-lg text-body-lg text-on-surface italic">
            “好的 AI 产品不是迷信更大的模型，而是通过确定性工程框架，把概率性模型管束在绝对安全的业务边界之内。”
          </p>
        </div>
        <div className="space-y-space-sm">
          <Note
            title="1. 状态管理是 Agent 可靠性的分水岭"
            text="摒弃单一庞大的对话记忆串联，采用基于 Redis 状态机快照机制。任一节点崩溃后支持幂等重试，规避重新计算的冗余成本。"
          />
          <Note
            title="2. 演进路线：模型蒸馏与私有化边缘部署"
            text="针对 Router 与格式校验等单功能 Agent，采用高质数据微调 7B / 14B 轻量级模型，目标将单次推理 API 调用成本下降 70%，并落地端侧私有化交付。"
          />
        </div>
      </section>

      <section className="space-y-space-sm pt-space-md">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl bg-surface-container-low p-space-md text-left"
          onClick={() => toast('下一篇案例整理中')}
        >
          <span className="min-w-0 space-y-0.5">
            <span className="block font-label-sm text-label-sm text-outline">下一篇案例</span>
            <span className="block truncate font-label-lg text-label-lg font-medium text-on-surface">
              FinCopilot: 混合检索增强（RAG）投研平台
            </span>
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container text-on-surface">
            <Icon name="arrow_forward" className="text-lg" />
          </span>
        </button>
        <Link
          to="/#works"
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-secondary py-3 font-label-lg text-label-lg font-medium text-on-secondary"
        >
          <Icon name="grid_view" className="text-lg" />
          <span>返回作品列表</span>
        </Link>
      </section>
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div className="space-y-0.5">
      <span className="font-label-sm text-label-sm uppercase text-outline">{label}</span>
      <p className="font-body-md text-body-md font-medium text-on-surface">{value}</p>
    </div>
  )
}

function SectionKicker({ index, aside }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">{index}</span>
        <div className="h-px w-8 bg-surface-variant" />
      </div>
      <span className="font-label-sm text-label-sm text-outline">{aside}</span>
    </div>
  )
}

function Pain({ icon, title, badge, text, muted = false }) {
  return (
    <div className="flex items-start gap-3.5 rounded-xl bg-surface-container-low p-space-md">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-container-high">
        <Icon name={icon} className={`text-base ${muted ? 'text-outline' : 'text-secondary'}`} />
      </div>
      <div className="min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-label-lg text-label-lg font-medium text-on-surface">{title}</h4>
          <span
            className={`shrink-0 rounded px-2 py-0.5 font-label-sm text-label-sm ${
              muted ? 'bg-surface-container text-outline-variant' : 'bg-surface-container-highest text-secondary'
            }`}
          >
            {badge}
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{text}</p>
      </div>
    </div>
  )
}

function Note({ title, text }) {
  return (
    <div className="space-y-1 rounded-xl bg-surface-container p-space-md">
      <h4 className="font-label-lg text-label-lg font-medium text-on-surface">{title}</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{text}</p>
    </div>
  )
}
