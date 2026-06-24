import Head from 'next/head';
import { useState } from 'react';
import { 
  GraduationCap, 
  Cpu, 
  LineChart, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink
} from 'lucide-react';
import SidebarNav from '@/components/SidebarNav';

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    const email = 'f20220956@pilani.bits-pilani.ac.in';
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        })
        .catch((err) => {
          console.error('Could not copy email using clipboard API:', err);
          fallbackCopyText(email);
        });
    } else {
      fallbackCopyText(email);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    }
    document.body.removeChild(textArea);
  };

  // Marquee baby care case study state
  const [caseStudyExpanded, setCaseStudyExpanded] = useState({
    thesis: false,
    sizing: false,
    competition: false,
    heuristics: false,
  });

  const [sizingModel, setSizingModel] = useState('bottomUp'); // 'bottomUp' or 'topDown'

  // Marine autonomy case study state
  const [tritonExpanded, setTritonExpanded] = useState({
    thesis: false,
    economics: false,
    competition: false,
    heuristics: false,
  });

  // Hybrid LCV case study state
  const [hybridExpanded, setHybridExpanded] = useState({
    thesis: false,
    economics: false,
    competition: false,
    heuristics: false,
  });

  // AI Developer Tooling case study state
  const [devToolingExpanded, setDevToolingExpanded] = useState({
    thesis: false,
    economics: false,
    competition: false,
    heuristics: false,
  });

  const toggleCaseStudy = (key) => {
    setCaseStudyExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTriton = (key) => {
    setTritonExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleHybrid = (key) => {
    setHybridExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDevTooling = (key) => {
    setDevToolingExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Head>
        <title>Sarthak Juneja | Venture Capital Portfolio</title>
        <meta name="description" content="Institutional portfolio, deal ledger, and technical due diligence frameworks for early-stage Venture Capital." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
        {/* Decorative Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f11_1px,transparent_1px),linear-gradient(to_bottom,#0f0f11_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Global Outer Wrapper */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            
            {/* STICKY SIDEBAR NAVIGATION */}
            <SidebarNav />

            {/* MAIN CANVAS */}
            <div className="flex-1 max-w-3xl space-y-24">
              
              {/* SECTION 1: PROFILE SNAPSHOT */}
              <section id="profile" className="scroll-mt-24 space-y-8 animate-fade-in-up">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent font-sans">
                    Sarthak Juneja
                  </h1>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Associate, Campus Fund
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                    I operate as a T-shaped asset with both the technical depth to understand complex engineering and the breadth to evaluate a business. I can speak a deep-tech founder&apos;s language, break down their core technology, and immediately translate that into institutional financial models and venture-scale investment theses.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a 
                      href="/Sarthak_Resume.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                    >
                      DOWNLOAD RESUME
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/sarthakjuneja-bits/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                    >
                      LINKEDIN
                    </a>
                    <button 
                      onClick={copyEmailToClipboard}
                      className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                    >
                      {emailCopied ? 'EMAIL COPIED!' : 'EMAIL ME'}
                    </button>
                  </div>
                </div>

                {/* 10-Second Credential Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-zinc-900 py-6 font-mono">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                      <GraduationCap className="h-3.5 w-3.5" /> ACADEMIC CORE
                    </div>
                    <div className="text-xs text-zinc-200">
                      M.Sc. Physics + B.E. EEE<br />
                      <span className="text-zinc-500">BITS Pilani</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5" /> FINANCE ALIGNMENT
                    </div>
                    <div className="text-xs text-zinc-200">
                      CFA Level II Cleared<br />
                      <span className="text-zinc-500">Minor in Finance, BITS Pilani</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                      <LineChart className="h-3.5 w-3.5" /> OPERATIONAL VELOCITY
                    </div>
                    <div className="text-xs text-zinc-200">
                      100+ Startups Evaluated<br />
                      <span className="text-zinc-500">Associate @ Campus Fund ($100M corpus)</span>
                    </div>
                  </div>
                </div>

              </section>

              {/* SECTION 01 // TRIAGE ENGINE */}
              <section id="triage" className="scroll-mt-24 space-y-8 animate-fade-in-up delay-150">
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">SECTION 01 // TRIAGE ENGINE</h2>
                  <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-sans">Triage Engine & Hard Disqualifiers</h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    While every startup is a unique case requiring a different analytical framework, these filters eliminate mismatches right at the top of the funnel. This protects my bandwidth, allowing me to focus my introductory calls entirely on high-conviction startups.
                  </p>
                </div>

                {/* 4-Step Funnel Metrics Stack */}
                <div className="space-y-1.5 py-4">
                  {/* Step 1 */}
                  <div className="w-full mx-auto flex items-center justify-between px-6 py-4 border border-zinc-900 bg-zinc-950/40 rounded-lg hover:border-zinc-800 transition-colors duration-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">01 // Sourced</span>
                    <div className="flex-1 mx-6 border-t border-dashed border-zinc-900/60"></div>
                    <span className="text-xl font-extrabold text-white tracking-tight font-sans">100+</span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1">
                    <div className="h-4 w-px bg-zinc-900/60"></div>
                  </div>

                  {/* Step 2 */}
                  <div className="w-[85%] mx-auto flex items-center justify-between px-6 py-4 border border-zinc-900 bg-zinc-950/40 rounded-lg hover:border-zinc-800 transition-colors duration-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">02 // Deep Diligence</span>
                    <div className="flex-1 mx-6 border-t border-dashed border-zinc-900/60"></div>
                    <span className="text-xl font-extrabold text-white tracking-tight font-sans">30+</span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1">
                    <div className="h-4 w-px bg-zinc-900/60"></div>
                  </div>

                  {/* Step 3 */}
                  <div className="w-[70%] mx-auto flex items-center justify-between px-6 py-4 border border-zinc-900 bg-zinc-950/40 rounded-lg hover:border-zinc-800 transition-colors duration-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">03 // IC Submission</span>
                    <div className="flex-1 mx-6 border-t border-dashed border-zinc-900/60"></div>
                    <span className="text-xl font-extrabold text-white tracking-tight font-sans">3</span>
                  </div>

                  {/* Connector */}
                  <div className="flex justify-center -my-1">
                    <div className="h-4 w-px bg-emerald-900/40"></div>
                  </div>

                  {/* Step 4 */}
                  <div className="w-[55%] mx-auto flex items-center justify-between px-6 py-4 border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-emerald-950/40 rounded-lg hover:border-emerald-400/40 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.08)] group scale-[1.02]">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      04 // Deployed
                    </span>
                    <div className="flex-1 mx-6 border-t border-dashed border-emerald-500/20"></div>
                    <span className="text-xl font-black text-emerald-400 tracking-tight font-sans group-hover:text-emerald-300 transition-colors">1</span>
                  </div>
                </div>

                {/* Triage Engine Block */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/50 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 shadow-xl shadow-black/30">
                  {/* 3-Column Minimalist Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500/80 animate-pulse"></span>
                        THE Services business TRAP
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        Focus on the immediate elimination of disguised IT services, localized consulting, or agency models. While these may constitute viable cash-flow businesses, they fail to represent venture-scale, non-linear investments.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500/80 animate-pulse"></span>
                        THE B2C BRAND TEST
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        Focus on the disqualification of B2C product businesses lacking a visceral, highly differentiated narrative or design sense or native loops capable of driving organic distribution.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500/80 animate-pulse"></span>
                        MOAT DEGRADATION
                      </h4>
                      <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                        Focus on the rejection of low-defensibility layers reliant purely on execution speed or transient first-mover advantages rather than any structural moats.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 2: DEAL LEDGER */}
              <section id="ledger" className="scroll-mt-24 space-y-8 animate-fade-in-up delay-300">
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">SECTION 02 // DEAL LEDGER</h2>
                  <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-sans">Portfolio & Pipeline Ledger</h3>
                  <p className="text-sm text-zinc-400 font-sans">
                    An anonymous ledger showcasing a curated selection of deals (representing a much larger pipeline I have evaluated)—detailing the technical due diligence, commercial metrics, and specific rationale behind why I approved or passed on each opportunity.
                  </p>
                </div>

                {/* Marquee Case Study */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/50 via-zinc-950/60 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 space-y-6 shadow-xl shadow-black/40">
                  {/* Case Study Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-900/40">
                        CLOSED DEAL
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                      Vertical Quick-Commerce in India’s $33B Baby Care Market
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans border-l-2 border-zinc-800 pl-4 italic">
                      &quot;Evaluated, led diligence, and successfully pitched a ₹9 Cr pre-seed round to the Investment Committee in January 2025. The thesis demonstrates why category-focused quick-commerce models targeting premium urban parents represent a high-margin opportunity.&quot;
                    </p>
                  </div>

                  {/* Accordion Menus */}
                  <div className="space-y-3 pt-2">
                    
                    {/* Accordion 1: Core Thesis */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleCaseStudy('thesis')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">01 //</span> Core Thesis & Structural Shifts
                        </span>
                        {caseStudyExpanded.thesis ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>
                      
                      {caseStudyExpanded.thesis && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Horizontal Q-Commerce vs. Specialized Vertical</h4>
                              <p>
                                Legacy parenting marketplaces rely on broad SKU variety but suffer from same-day or multi-day delivery latency, failing to address immediate, urgent parental needs. Conversely, generic horizontal quick-commerce players fail to offer the specialized SKU density (prenatal and developmental products) or the lifecycle-based curation essential for parental decision-making.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Dual-Income Imperative</h4>
                              <p>
                                Rising dual-income households in urban centers create intense time scarcity. Parents increasingly delegate convenience to digital platforms. This convenience-driven shift is reflected in a 34% year-over-year increase in digital childcare purchases, elevating quick delivery from a luxury to a baseline expectation.
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2 border border-emerald-500/20 bg-emerald-950/5 p-4 rounded-md shadow-[0_0_15px_rgba(16,185,129,0.02)]">
                            <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-semibold">Core Thesis: Private Label Margin Play</h4>
                            <p className="text-zinc-300">
                              Modern urban parents display a strong brand-agnostic mindset, prioritizing product safety, certified ingredients, and functionality over legacy brand recall. This provides a high-margin opportunity for private labels, which can capture trust through direct quality assurances and earn higher margins (e.g., benchmarked by FirstCry scaling private labels to approximately 65% of overall revenues).
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: Rigorous Market Sizing */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleCaseStudy('sizing')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">02 //</span> Rigorous Market Sizing Models
                        </span>
                        {caseStudyExpanded.sizing ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {caseStudyExpanded.sizing && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 space-y-6">
                          {/* Toggle Sizing Model buttons */}
                          <div className="flex border border-zinc-900 rounded p-1 max-w-xs bg-zinc-950 font-mono text-xs">
                            <button
                              onClick={() => setSizingModel('bottomUp')}
                              className={`flex-1 py-1.5 rounded transition-all duration-200 ${
                                sizingModel === 'bottomUp'
                                  ? 'bg-zinc-900 text-white font-semibold'
                                  : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                            >
                              BOTTOM-UP MODEL
                            </button>
                            <button
                              onClick={() => setSizingModel('topDown')}
                              className={`flex-1 py-1.5 rounded transition-all duration-200 ${
                                sizingModel === 'topDown'
                                  ? 'bg-zinc-900 text-white font-semibold'
                                  : 'text-zinc-500 hover:text-zinc-300'
                              }`}
                            >
                              TOP-DOWN TRIANGULATION
                            </button>
                          </div>

                          {sizingModel === 'bottomUp' ? (
                            <div className="overflow-x-auto">
                              <table className="w-full text-left font-mono text-xs border-collapse">
                                <thead>
                                  <tr className="text-zinc-500 border-b border-zinc-900">
                                    <th className="pb-2 font-medium">SEGMENT FILTER</th>
                                    <th className="pb-2 font-medium">METRIC / WORKING</th>
                                    <th className="pb-2 font-medium text-right">VALUATION LAYER</th>
                                  </tr>
                                </thead>
                                <tbody className="text-zinc-300 divide-y divide-zinc-900/50">
                                  <tr>
                                    <td className="py-3 font-medium text-white">Gross Spend/Child (0-6 Y)</td>
                                    <td className="py-3 text-zinc-400">Essentials + Fashion + Toys</td>
                                    <td className="py-3 text-right text-white">₹5.38 Lakhs cumulative</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 font-medium text-white">Effective Annual ARPU</td>
                                    <td className="py-3 text-zinc-400">Blended spend at 50% capture feasibility</td>
                                    <td className="py-3 text-right text-white">₹44,866 addressable</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 font-medium text-white">Target Income Cohort</td>
                                    <td className="py-3 text-zinc-400">9% of Indian families earning &gt; ₹20 LPA</td>
                                    <td className="py-3 text-right text-white">28.5M Addressable Cohort</td>
                                  </tr>
                                  <tr className="bg-zinc-900/20">
                                    <td className="py-3 font-medium text-emerald-400">Total Addressable Market (TAM)</td>
                                    <td className="py-3 text-zinc-400">Income-filtered addressable demand base</td>
                                    <td className="py-3 text-right font-bold text-emerald-400">₹76,722 Crore ($8.43B)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 font-medium text-white">Serviceable Available Market (SAM)</td>
                                    <td className="py-3 text-zinc-400">Top 7 urban GDP centers (27.4% GDP proxy)</td>
                                    <td className="py-3 text-right text-white">₹21,007 Crore ($2.30B)</td>
                                  </tr>
                                  <tr className="bg-zinc-900/40">
                                    <td className="py-3 font-medium text-white">Serviceable Obtainable Market (SOM)</td>
                                    <td className="py-3 text-zinc-400">Target 10% near-term execution penetration</td>
                                    <td className="py-3 text-right font-bold text-white">₹2,101 Crore ($230M)</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <div className="overflow-x-auto">
                              <table className="w-full text-left font-mono text-xs border-collapse">
                                <thead>
                                  <tr className="text-zinc-500 border-b border-zinc-900">
                                    <th className="pb-2 font-medium">MARKET SEGMENT</th>
                                    <th className="pb-2 font-medium">FILTER VALUE / FIT</th>
                                    <th className="pb-2 font-medium text-right">VALUATION LAYER</th>
                                  </tr>
                                </thead>
                                <tbody className="text-zinc-300 divide-y divide-zinc-900/50">
                                  <tr>
                                    <td className="py-3 font-medium text-white">India&apos;s Childcare Market</td>
                                    <td className="py-3 text-zinc-400">Broad estimated retail universe</td>
                                    <td className="py-3 text-right text-white">₹302,400 Crore ($33.2B)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 font-medium text-white">Channel-Fit Filter</td>
                                    <td className="py-3 text-zinc-400">Organized retail and Q-comm compatibility</td>
                                    <td className="py-3 text-right text-white">27%</td>
                                  </tr>
                                  <tr className="bg-zinc-900/20">
                                    <td className="py-3 font-medium text-emerald-400">TAM (Channel Adjusted)</td>
                                    <td className="py-3 text-zinc-400">Vetted channel addressable universe</td>
                                    <td className="py-3 text-right font-bold text-emerald-400">₹81,648 Crore ($8.97B)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 font-medium text-white">Consumption by &quot;India 1&quot;</td>
                                    <td className="py-3 text-zinc-400">Top 30% consumption cohort (Premium spend)</td>
                                    <td className="py-3 text-right text-white">30%</td>
                                  </tr>
                                  <tr className="bg-zinc-900/40">
                                    <td className="py-3 font-medium text-white">SAM (Target Cohort)</td>
                                    <td className="py-3 text-zinc-400">Organized, digital-ready urban addressable</td>
                                    <td className="py-3 text-right font-bold text-white">₹24,494 Crore ($2.69B)</td>
                                  </tr>
                                  <tr className="bg-zinc-900/60">
                                    <td className="py-3 font-medium text-white">SOM (10% Penetration)</td>
                                    <td className="py-3 text-zinc-400">Target obtained revenue market share</td>
                                    <td className="py-3 text-right font-bold text-white">₹2,449 Crore ($269M)</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          )}
                          <p className="text-xs text-zinc-500 font-mono italic">
                            * Note: Triangulating bottom-up and top-down models yields a coherent addressable TAM range between ₹76k Cr and ₹81k Cr, ensuring robust margins.
                          </p>
                          <div className="pt-4 border-t border-zinc-900/60 space-y-3 font-sans text-base text-zinc-400">
                            <h4 className="text-sm font-mono uppercase tracking-wider text-white">Exit Scenario & Valuation Benchmarking</h4>
                            <p>
                              Vetted against late-stage peer multiples: FirstCry (8.0x EV/Rev), SuperBottoms (6.5x EV/Rev), and Zepto (5.5x EV/Rev). At a conservative <strong>7.0x EV/Revenue exit multiple</strong>, a specialized vertical platform is projected to reach a ₹17,258 Cr valuation by 2032 (requiring a ₹2,465 Cr ARR run-rate). This yields a projected <strong>71.0x MoIC return</strong> on initial capital over a 7-year investment horizon.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 3: Competitive Landscape */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleCaseStudy('competition')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">03 //</span> Competitive Landscape & Margin Moats
                        </span>
                        {caseStudyExpanded.competition ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {caseStudyExpanded.competition && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Incumbent Flaw</h4>
                              <p>
                                Legacy category players (e.g. FirstCry) operate slow logistics pipelines optimized for central warehouse distribution and offline franchise setups. Because franchise models have heavy fixed sunk costs, they cannot easily retrofit their networks into localized, high-frequency dark stores delivering in 30–60 minutes, leaving a high-trust convenience white space.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Margin Disruption Moat</h4>
                              <p>
                                Traditional grocery quick commerce is structurally constrained by compressed ~5% contribution margins due to thin commodity prices and high perishability. In contrast, vertical platforms in this category can operate on a **22–30% blended gross margin** by driving high-AOV orders (~₹1,200) focused on essentials, clothing, and toys, enhanced by high-margin private labels.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 4: Founder Heuristics */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleCaseStudy('heuristics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">04 //</span> Founder Evaluation & Execution Bench
                        </span>
                        {caseStudyExpanded.heuristics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {caseStudyExpanded.heuristics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Founder-Market Fit Scorecard</h4>
                              <p>
                                The CEO possesses an elite pedigree (Stanford MBA), combined with a successful consumer exit to a food-delivery unicorn (Zomato) where they managed post-acquisition operations scaling from 0 to over 150 million transactions. This operational maturity mitigates execution risk at the zero-to-one phase.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Weaponized Execution Bench</h4>
                              <p>
                                Risk mitigators include hiring senior leadership directly from category giants: Operations is headed by a former Dark Store Expansion lead from Blinkit, Growth is led by a former Category Director from Swiggy, and Product/Design is led by a veteran Kidswear designer from Reliance Retail.
                              </p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6 border-t border-zinc-900/60 pt-4 mt-4">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Expert & Customer Vetting</h4>
                              <p>
                                Validated via expert call with Biju Kurien (former President of Reliance Retail / CEO of Titan) confirming the recurring, need-driven category mechanics. Customer references in Delhi NCR confirm high order frequency (2-3x weekly) and strong organic NPS.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Vetted Risk Disclosures</h4>
                              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-500 font-sans">
                                <li><strong>Pre-Scale Maturity</strong>: Limited historical cohort data for early web/mobile builds.</li>
                                <li><strong>Execution Complexity</strong>: Operational reliance on dark stores, inventory turns, and kidswear returns.</li>
                                <li><strong>Incumbent Response</strong>: Margin pressure if horizontal quick-commerce players discount aggressively.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Marine Autonomy Passed Deal */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/40 via-zinc-950/50 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 space-y-6 mt-8 shadow-xl shadow-black/40">
                  {/* Case Study Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-500 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/40 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                        PASSED // SEGMENT MISALIGNMENT
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                      Autonomous Boats and Marine Mobility
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans border-l-2 border-zinc-800 pl-4 italic">
                      &quot;Evaluated and led early-stage diligence on a proposed $1.5M seed round in September 2025. Passed on the opportunity prior to IC submission.&quot;
                    </p>
                  </div>

                  {/* Accordion Menus */}
                  <div className="space-y-3 pt-2">
                    
                    {/* Accordion 1: Core Thesis, Product, & Target Markets */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleTriton('thesis')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">01 //</span> Core Thesis, Product, & Target Markets
                        </span>
                        {tritonExpanded.thesis ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>
                      
                      {tritonExpanded.thesis && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Full-Electric Autonomy Core</h4>
                              <p>
                                The startup is developing a full-stack, all-electric autonomous navigation system (targeting Level 4-5 autonomy) for marine vessels. The technology utilizes a proprietary sensor array and AI vision pilot software designed to run on bespoke electric passenger boats or as a retrofit suite.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Target Segments & Exit Rationale</h4>
                              <p>
                                The company&apos;s product was much better fitted for high-value commercial logistics and defense applications, where autonomous routing and safety are critical. However, they instead chose to target leisure and local tourism boat operators (lakes, reservoirs, coastal cruise charters) for their initial go-to-market. This mismatch between product capabilities and target sector created a massive commercial ROI gap.
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2 border border-amber-500/20 bg-amber-950/5 p-4 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.02)]">
                            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-semibold">Why We Passed: Tech & Segment Misalignment</h4>
                            <p className="text-zinc-300">
                              While the engineering of the autonomous pilot is advanced, the autopilot lacks sea-level validation data in dense harbors, fog, and bad weather. Additionally, prioritizing low-margin leisure boating instead of high-margin commercial logistics and defense led us to pass on the opportunity prior to IC submission.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: Capex Premium & Leisure Incentive Gap */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleTriton('economics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">02 //</span> Capex Premium & Leisure Incentive Gap
                        </span>
                        {tritonExpanded.economics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {tritonExpanded.economics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-4 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Capex Amortization Barrier</h4>
                              <p>
                                An autonomous electric vessel carries a capital expense of ₹24–25 Lakhs, compared to just ₹3 Lakhs for a traditional internal combustion boat—representing an 8.3x capex premium. Because pilot/driver salaries for leisure/local tourism operators are extremely low (typically ₹10k–15k/month), removing the driver does not yield enough operational savings to amortize the ₹21 Lakh premium over any reasonable time horizon.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Low Collision & Density Pain Points</h4>
                              <p>
                                Unlike urban road density, open water has low vessel density and low collision frequency. Thus, autonomous safety systems do not represent an urgent pain point for leisure or shipping operators that would justify this capex premium. Market segments follow a clear viability hierarchy: Logistics &gt; Defense &gt; Leisure/Tourism.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 3: Competitive Landscape & Long-Term Barrier Shifts */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleTriton('competition')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">03 //</span> Competitive Landscape & Long-Term Barrier Shifts
                        </span>
                        {tritonExpanded.competition ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {tritonExpanded.competition && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 space-y-4">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-xs border-collapse">
                              <thead>
                                <tr className="text-zinc-500 border-b border-zinc-900">
                                  <th className="pb-2 font-medium">COMPETITOR</th>
                                  <th className="pb-2 font-medium">BUSINESS MODEL</th>
                                  <th className="pb-2 font-medium text-right">AUTONOMY LAYER</th>
                                </tr>
                              </thead>
                              <tbody className="text-zinc-300 divide-y divide-zinc-900/50">
                                <tr>
                                  <td className="py-3 font-medium text-white">Roboat</td>
                                  <td className="py-3 text-zinc-400">Urban infrastructure & water taxi deployments</td>
                                  <td className="py-3 text-right text-white">Level 4/5 (Limited projects)</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Orca AI</td>
                                  <td className="py-3 text-zinc-400">Software-only collision avoidance (trained on shipping data)</td>
                                  <td className="py-3 text-right text-white">L2/L3 Assistant (Software only)</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Legacy Giants</td>
                                  <td className="py-3 text-zinc-400">Large-scale commercial cargo transport R&amp;D</td>
                                  <td className="py-3 text-right text-white">L2/L3 Assisted Autopilot</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="pt-4 border-t border-zinc-900/60 text-base text-zinc-400 leading-relaxed font-sans">
                            <p>
                              Scaling to the massive commercial cargo shipping market requires competing with legacy marine and defense giants (e.g. Rolls Royce Marine, Kongsberg) that are actively developing assisted autopilot suites and possess decades of sea training data.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 4: Team Heuristics & GTM Execution Risks */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleTriton('heuristics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">04 //</span> Team Heuristics & GTM Execution Risks
                        </span>
                        {tritonExpanded.heuristics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {tritonExpanded.heuristics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Team Business Acumen Scorecard</h4>
                              <p>
                                The founders possess strong engineering and technical design capability but lacked business sense and commercial acumen. Their strategy to sell an ₹25L autonomous system to leisure operators—where pilot labor costs are negligible—showed a fundamental lack of economic reality. Additionally, they planned to launch in GCC, India, and the USA simultaneously with single-digit sales projections, demonstrating high geographic dilution.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Vetted Risk Disclosures Summary</h4>
                              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-500 font-sans">
                                <li><strong>Capex Amortization Gap</strong>: Leisure boat buyers cannot justify or amortize a ₹25 Lakh price tag due to negligible labor offsets.</li>
                                <li><strong>Pre-Scale Autonomy Validation</strong>: Unproven ocean autopilot navigation in dense shipping corridors.</li>
                                <li><strong>Lack of Business Sense</strong>: Unfocused target market (leisure instead of logistics/defense) coupled with premature global scaling.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* AI Developer Tooling Passed Deal */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/40 via-zinc-950/50 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 space-y-6 mt-8 shadow-xl shadow-black/40">
                  {/* Case Study Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-500 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/40 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                        PASSED // THE INCUMBENCY TRAP
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                      AI Code Generation and Software Agents
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans border-l-2 border-zinc-800 pl-4 italic">
                      &quot;Evaluated and led early-stage diligence on a proposed seed round in March 2026. Passed on the opportunity prior to IC submission.&quot;
                    </p>
                  </div>

                  {/* Accordion Menus */}
                  <div className="space-y-3 pt-2">
                    
                    {/* Accordion 1: Core Thesis, Product, & Target Markets */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleDevTooling('thesis')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">01 //</span> Core Thesis, Product, & Target Markets
                        </span>
                        {devToolingExpanded.thesis ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>
                      
                      {devToolingExpanded.thesis && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Agentic Code Generation Core</h4>
                              <p>
                                The startup is building an autonomous AI software engineering platform. The system orchestrates multiple AI agents to write, test, and deploy production-grade software applications from natural language specifications, aiming to automate complex developer workflows.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Target Segments & Exit Rationale</h4>
                              <p>
                                The company targets enterprise application developers and software teams, positioning itself as a platform for rapid software development. While the founders demonstrated good business judgment and a well-built product, we passed prior to IC because the core value proposition remains a high-risk target feature for platform giants.
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2 border border-amber-500/20 bg-amber-950/5 p-4 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.02)]">
                            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-semibold">Why We Passed: The Incumbency Trap</h4>
                            <p className="text-zinc-300">
                              We do not believe emerging startups in this vertical can outperform LLM platform giants (Google, OpenAI, Anthropic) on their own playing field. Standalone UI wrappers and prompting environments are highly vulnerable; what constitutes a company-defining product for a startup is often just a minor native feature flag for a model provider.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: The Three Layers of the Incumbency Trap */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleDevTooling('economics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">02 //</span> The Three Layers of the Incumbency Trap
                        </span>
                        {devToolingExpanded.economics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {devToolingExpanded.economics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-4 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="space-y-1">
                                <h4 className="text-sm font-mono uppercase tracking-wider text-white">1. Zero-Marginal-Cost Distribution</h4>
                                <p className="text-xs">
                                  Startups face steep Customer Acquisition Costs (CAC) of ~$40 per user via ad networks. Conversely, tech giants can ship the same capability natively to 2 billion active users (Google Workspace) or 400 million Copilot enterprise seats overnight by flipping a feature flag.
                                </p>
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-sm font-mono uppercase tracking-wider text-white">2. Subsidized Compute & Margin Arbitrage</h4>
                                <p className="text-xs">
                                  Startups pay retail API pricing, facing severe margin compression. LLM giants own the underlying models and raw compute infrastructure, allowing them to run these capabilities as free bundles or loss-leaders to keep users within their ecosystems.
                                </p>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="space-y-1">
                                <h4 className="text-sm font-mono uppercase tracking-wider text-white">3. The &quot;Moving Baseline&quot; Problem</h4>
                                <p className="text-xs">
                                  A startup&apos;s product feels revolutionary when it exposes a capability users haven&apos;t seen. However, as underlying models improve natively, wrappers lose utility. The moment platform providers release native environments (like Claude Code or Google AI Studio), the startup&apos;s middle-layer value drops to zero.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 3: Market Historical Precedents & Churn Metrics */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleDevTooling('competition')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">03 //</span> Market Precedents & Churn Realities
                        </span>
                        {devToolingExpanded.competition ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {devToolingExpanded.competition && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-4 leading-relaxed font-sans">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-xs border-collapse">
                              <thead>
                                <tr className="text-zinc-500 border-b border-zinc-900">
                                  <th className="pb-2 font-medium">STARTUP</th>
                                  <th className="pb-2 font-medium">CORE VALUE PROPOSITION</th>
                                  <th className="pb-2 font-medium text-right">INCUMBENT RESPONSE</th>
                                </tr>
                              </thead>
                              <tbody className="text-zinc-300 divide-y divide-zinc-900/50">
                                <tr>
                                  <td className="py-3 font-medium text-white">Lovable / early coding tools</td>
                                  <td className="py-3 text-zinc-400">Rapid app creation from prompts</td>
                                  <td className="py-3 text-right text-white">Claude Code & Google AI Studio launch (momentum faded)</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Suno AI</td>
                                  <td className="py-3 text-zinc-400">Generative music and audio creation</td>
                                  <td className="py-3 text-right text-white">Google native audio tool inside Gemini</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Perplexity</td>
                                  <td className="py-3 text-zinc-400">AI-native search engine</td>
                                  <td className="py-3 text-right text-white">Google Search Generative Experience integration</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Jasper / Copy.ai</td>
                                  <td className="py-3 text-zinc-400">AI copywriting & marketing content</td>
                                  <td className="py-3 text-right text-white">ChatGPT & Claude native copywriting capabilities</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Character.ai</td>
                                  <td className="py-3 text-zinc-400">Consumer AI companion profiles</td>
                                  <td className="py-3 text-right text-white">OpenAI native companion memory & voice chat</td>
                                </tr>
                                <tr>
                                  <td className="py-3 font-medium text-white">Adept</td>
                                  <td className="py-3 text-zinc-400">AI agents operating desktop software</td>
                                  <td className="py-3 text-right text-white">OpenAI native operator-style tools (absorbed/dissolved)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="pt-4 border-t border-zinc-900/60 text-xs text-zinc-500 font-mono italic">
                            * Note: Startups impacted by these incumbent launches historically faced severe churn (&gt;50%) or dissolution, demonstrating the high risk of target feature plays.
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 4: Founder Evaluation & Moat Strength */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleDevTooling('heuristics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">04 //</span> Founder Evaluation & Moat Strength
                        </span>
                        {devToolingExpanded.heuristics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {devToolingExpanded.heuristics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Founder & Product Execution</h4>
                              <p>
                                The founders possess solid technical credentials and reasonable business sense. The product interface and core reasoning pipeline are well-built, delivering satisfactory early user feedback. The decision to pass was driven by structural platform risks rather than execution capability.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Distribution Moat Risk</h4>
                              <p>
                                Rather, the structural lack of distribution channels, retail API dependency on platform giants, and baseline model updates make it impossible for a standalone wrapper to sustain a long-term defensible moat in an extremely capital-intensive market.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Hybrid LCV Passed Deal */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/40 via-zinc-950/50 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 space-y-6 mt-8 shadow-xl shadow-black/40">
                  {/* Case Study Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-500 bg-amber-950/20 px-2.5 py-1 rounded border border-amber-900/40 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                        PASSED // POLICY & EV HEADWINDS
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white font-sans">
                      Hybrid Light Commercial Vehicles (LCVs)
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans border-l-2 border-zinc-800 pl-4 italic">
                      &quot;Evaluated and led early-stage diligence on a proposed seed round in October 2025. Passed on the opportunity prior to IC submission.&quot;
                    </p>
                  </div>

                  {/* Accordion Menus */}
                  <div className="space-y-3 pt-2">
                    
                    {/* Accordion 1: Core Thesis, Product, & Target Markets */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleHybrid('thesis')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">01 //</span> Core Thesis, Product, & Target Markets
                        </span>
                        {hybridExpanded.thesis ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>
                      
                      {hybridExpanded.thesis && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Retrofit Hybrid Solution</h4>
                              <p>
                                The company develops a hybrid retrofit powertrain system designed to transition internal combustion diesel Light Commercial Vehicles (LCVs) into petrol-electric hybrids, bridging the gap between traditional powertrains and fully electric options.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Target Markets & Segment Strategy</h4>
                              <p>
                                The startup&apos;s go-to-market targets commercial fleet operators and logistics companies running intra-city delivery routes, aiming to offer mileage optimization without the charging downtime associated with pure battery electric vehicles.
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2 border border-amber-500/20 bg-amber-950/5 p-4 rounded-md shadow-[0_0_15px_rgba(245,158,11,0.02)]">
                            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-semibold">Why We Passed: Good Tech for a Non-Existent Problem</h4>
                            <p className="text-zinc-300">
                              While the technology is sound and the team is highly capable, the product represents a good solution to a non-existent commercial problem. The commercial transportation market is moving directly to full electrification (EVs) rather than stopping at hybrid bridge solutions, which carry heavy regulatory and economic penalties.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 2: Tax Regulations & Policy Headwinds */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleHybrid('economics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">02 //</span> Tax Regulations & Policy Headwinds
                        </span>
                        {hybridExpanded.economics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {hybridExpanded.economics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-4 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Regulatory Tax Trap</h4>
                              <p>
                                The entire Indian clean-mobility landscape is shaped far more by tax regulations than underlying technology. Hybrids in India fall under a higher tax bracket (~43%) than even many normal petrol/diesel vehicles (~38%), not just EVs (which are taxed at only 5% GST plus state incentives).
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">OEM Strategic Avoidance</h4>
                              <p>
                                Because hybrids give OEMs no policy advantages or subsidy capture while adding major manufacturing and supply chain complexity, legacy players (e.g. Tata, Mahindra) are bypassing hybrid LCVs entirely in favor of direct EV development, leaving hybrid retrofits policy-isolated.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 3: Commercial Math & Payload Penalties */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleHybrid('competition')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">03 //</span> Commercial Math & Payload Penalties
                        </span>
                        {hybridExpanded.competition ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {hybridExpanded.competition && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-4 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">The Fuel Savings Equation</h4>
                              <p>
                                On the consumer side, commercial EVs deliver 70–80% fuel cost savings, which is the primary driver of fleet adoption. Hybrids offer only a marginal ~15% improvement in mileage.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Neutralization of Savings</h4>
                              <p>
                                Any operational savings the hybrid powertrain generates are completely neutralized for the operator by:
                              </p>
                              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-500 font-sans">
                                <li><strong>Higher On-Road Price:</strong> Driven directly by high taxation (43% GST).</li>
                                <li><strong>Maintenance Overhead:</strong> Dual drivetrains mean more moving parts and higher maintenance costs.</li>
                                <li><strong>Payload Reduction:</strong> Added weight of the combustion engine plus battery pack reduces payload capacity and torque, both of which are critical metrics for commercial operations.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accordion 4: Team Evaluation & Technology Risks */}
                    <div className="border border-zinc-900 rounded-md overflow-hidden bg-zinc-950/20">
                      <button
                        onClick={() => toggleHybrid('heuristics')}
                        className="w-full flex items-center justify-between px-4 py-3 bg-zinc-950/50 hover:bg-zinc-900/40 text-sm font-semibold text-zinc-200 transition-colors duration-200"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-mono text-zinc-500">04 //</span> Team Evaluation & Technology Risks
                        </span>
                        {hybridExpanded.heuristics ? <ChevronUp className="h-4 w-4 text-zinc-400" /> : <ChevronDown className="h-4 w-4 text-zinc-400" />}
                      </button>

                      {hybridExpanded.heuristics && (
                        <div className="p-5 bg-zinc-950/10 border-t border-zinc-900 text-base text-zinc-400 space-y-6 leading-relaxed font-sans">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Team Technical Capabilities</h4>
                              <p>
                                The founders are technically excellent engineers who have successfully built a good, high-functioning hybrid powertrain system. However, their bridge-technology strategy faces severe external headwinds. Building a hybrid powertrain in a market dominated by strong EV tax incentives and 80% fuel cost savings creates a difficult path to commercial viability, despite their strong technical execution.
                              </p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-mono uppercase tracking-wider text-white">Vetted Risk Disclosures Summary</h4>
                              <ul className="list-disc pl-4 space-y-1 text-xs text-zinc-500 font-sans">
                                <li><strong>Tax Disadvantage:</strong> A 43% GST tax bracket makes hybrids unviable compared to 5% GST for EVs.</li>
                                <li><strong>Dual Powertrain Overhead:</strong> Doubling complex moving parts increases maintenance costs and potential downtime.</li>
                                <li><strong>Payload and Torque Penalties:</strong> Added weight of two engines limits cargo capacity, hurting fleet unit economics.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </section>

              {/* SECTION 3: ECOSYSTEM RESEARCH */}
              <section id="research" className="scroll-mt-24 space-y-8 animate-fade-in-up delay-450">
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">SECTION 03 // ECOSYSTEM RESEARCH</h2>
                  <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-sans">Ecosystem Research</h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    Beyond writing detailed investment memos and leading internal deal execution, I track broader market trends through independent research. I also regularly publish these insights on LinkedIn, which has become a highly active inbound channel for sourcing and connecting with early-stage technical founders.
                  </p>
                </div>

                {/* Marquee Report Block */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/50 via-zinc-950/60 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 shadow-xl shadow-black/40">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">FLAGSHIP ANNUAL REPORT</span>
                        <h4 className="text-xl font-bold text-white font-sans">
                          State of Student Entrepreneurship in India 2025
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Co-authored with Campus Fund
                        </p>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                        I co-authored this flagship annual report of campus fund to map out where and how young founders are building in India. It breaks down which college campuses are seeing the most startup activity, where the funding is actually going, who the founders are, and the specific industries they are building for. It’s a great read.
                      </p>
                      <div className="pt-2">
                        <a 
                          href="https://docsend.com/view/pqskvjib5jeykuj2" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                        >
                          READ FULL REPORT
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    {/* Right: Cover Image */}
                    <div className="w-full md:w-56 shrink-0 flex justify-center">
                      <div className="relative border border-zinc-800 rounded overflow-hidden shadow-2xl shadow-black/80 max-w-[180px] md:max-w-none">
                        <img 
                          src="/report_cover.png" 
                          alt="State of Student Entrepreneurship in India 2025 Cover" 
                          className="object-cover w-full h-auto max-h-[260px] hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </section>

              {/* SECTION 4: CORPORATE FINANCE & VALUATION STUDIES */}
              <section id="valuation" className="scroll-mt-24 space-y-8 animate-fade-in-up delay-600">
                <div className="space-y-2">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">SECTION 04 // CORPORATE FINANCE & VALUATION STUDIES</h2>
                  <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent font-sans">Corporate Finance & Valuation Studies</h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                    Applying institutional investment frameworks across public and private markets through acquisition analysis, valuation, and strategic diligence.
                  </p>
                </div>

                {/* Marquee M&A Block */}
                <div className="border border-zinc-900 bg-gradient-to-b from-zinc-900/50 via-zinc-950/60 to-zinc-950/80 hover:border-zinc-800 transition-all duration-300 rounded-lg p-6 shadow-xl shadow-black/40">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left: Content */}
                    <div className="flex-1 space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">ACQUISITION ASSESSMENT</span>
                        <h4 className="text-xl font-bold text-white font-sans">
                          SUN PHARMA × ORGANON
                        </h4>
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          INDEPENDENT M&A MODEL & PITCH
                        </p>
                      </div>
                      <p className="text-base text-zinc-300 leading-relaxed font-sans">
                        Built an independent acquisition assessment of Sun Pharma&apos;s proposed $11.75B acquisition of Organon, including strategic rationale, valuation, accretion/dilution impact, synergy realization, and transaction economics.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <a 
                          href="/Sun_Pharma_Organon.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                        >
                          DOWNLOAD PITCH DECK
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        <a 
                          href="/Organon_SunPharma.xlsx" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-mono text-xs font-bold px-4 py-2.5 rounded transition-colors duration-200"
                        >
                          DOWNLOAD EXCEL MODEL
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    {/* Right: Cover Image */}
                    <div className="w-full md:w-56 shrink-0 flex justify-center">
                      <div className="relative border border-zinc-800 rounded overflow-hidden shadow-2xl shadow-black/80 max-w-[180px] md:max-w-none">
                        <img 
                          src="/sun_pharma_cover.png" 
                          alt="Sun Pharma x Organon M&A Assessment Cover" 
                          className="object-cover w-full h-auto max-h-[260px] hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
