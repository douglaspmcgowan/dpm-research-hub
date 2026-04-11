const express = require('express');
const path = require('path');
const app = express();

// Serve static slide images
app.use('/slides', express.static(path.join(__dirname, 'public', 'slides')));

app.get('/', (req, res) => {
  res.send(PAGE_HTML);
});

const PAGE_HTML = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chris McComb: AI & the Soul of Design</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #fafaf9;
  --bg-card: #ffffff;
  --bg-hero: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  --text: #1c1917;
  --text-secondary: #57534e;
  --text-muted: #a8a29e;
  --accent: #2563eb;
  --accent-light: #dbeafe;
  --border: #e7e5e4;
  --border-light: #f5f5f4;
  --shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.08);
  --radius: 12px;
  --max-w: 900px;
}
[data-theme="dark"] {
  --bg: #0c0a09;
  --bg-card: #1c1917;
  --text: #fafaf9;
  --text-secondary: #a8a29e;
  --text-muted: #78716c;
  --accent: #60a5fa;
  --accent-light: #1e3a5f;
  --border: #292524;
  --border-light: #1c1917;
  --shadow: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.4);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
.hero {
  background: var(--bg-hero);
  color: #fff;
  padding: 4rem 1.5rem 3rem;
  text-align: center;
  position: relative;
}
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}
.hero .subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  opacity: 0.8;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}
.hero .meta {
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.85rem;
  opacity: 0.7;
}
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}
.theme-toggle:hover { transform: scale(1.1); }

/* Navigation tabs */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 0 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  gap: 0;
}
.nav-tab {
  padding: 0.85rem 1.2rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  white-space: nowrap;
  transition: all 0.2s;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: inherit;
}
.nav-tab:hover { color: var(--text); }
.nav-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* Main content */
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}
.section { display: none; animation: fadeIn 0.3s ease; }
.section.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin: 2.5rem 0 1rem;
  color: var(--text);
  scroll-margin-top: 5rem;
}
h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2rem 0 0.75rem;
  color: var(--text);
  scroll-margin-top: 5rem;
}
h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: var(--text-secondary);
}
p { margin-bottom: 1rem; color: var(--text-secondary); }
strong { color: var(--text); font-weight: 600; }

/* Slide images */
.slide-fig {
  margin: 1.5rem 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}
.slide-fig img {
  width: 100%;
  height: auto;
  display: block;
  cursor: zoom-in;
}
.slide-fig .caption {
  padding: 0.75rem 1rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-light);
}

/* Comparison callouts */
.callout {
  background: var(--accent-light);
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  font-size: 0.9rem;
}
.callout p { color: var(--text); margin: 0; }
.callout .label {
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
  margin-bottom: 0.25rem;
}

/* Tag pills */
.tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0; }
.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--border-light);
  color: var(--text-secondary);
  font-weight: 500;
}
[data-theme="dark"] .tag { background: var(--border); }

/* Key findings list */
.findings {
  list-style: none;
  padding: 0;
}
.findings li {
  padding: 0.75rem 0;
  padding-left: 1.75rem;
  position: relative;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-light);
}
.findings li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1.1rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0,0,0,0.9);
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.lightbox.open { display: flex; }
.lightbox img {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
  border-radius: 8px;
}

/* Scroll to top */
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;
  z-index: 90;
}
.scroll-top.visible { opacity: 1; pointer-events: auto; }
.scroll-top:hover { transform: scale(1.1); }

/* Table of contents */
.toc {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}
.toc h4 { margin-top: 0; color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; }
.toc ul { list-style: none; padding: 0; }
.toc li { padding: 0.3rem 0; }
.toc a {
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}
.toc a:hover { text-decoration: underline; }

/* Side-by-side slides */
.slide-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}
@media (max-width: 600px) {
  .slide-pair { grid-template-columns: 1fr; }
  .hero { padding: 3rem 1rem 2rem; }
  .container { padding: 1.5rem 1rem 3rem; }
  h2 { font-size: 1.3rem; }
}
</style>
</head>
<body>

<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
  <span id="themeIcon">🌙</span>
</button>

<div class="hero">
  <h1>AI & the Battle for the Soul of Design</h1>
  <p class="subtitle">A synthesis of two talks by Chris McComb, Carnegie Mellon University</p>
  <div class="meta">
    <span>Design Research Collective</span>
    <span>Human-AI Design Initiative</span>
    <span>2024-2025</span>
  </div>
</div>

<nav class="nav">
  <div class="nav-inner">
    <button class="nav-tab active" onclick="showSection('overview')">Overview</button>
    <button class="nav-tab" onclick="showSection('talk1')">Talk 1: CDFAM</button>
    <button class="nav-tab" onclick="showSection('talk2')">Talk 2: Full</button>
    <button class="nav-tab" onclick="showSection('comparison')">Comparison</button>
    <button class="nav-tab" onclick="showSection('futures')">Futures</button>
  </div>
</nav>

<div class="container">

<!-- ==================== OVERVIEW ==================== -->
<div class="section active" id="sec-overview">

<h2>What This Is</h2>
<p>This page synthesizes two versions of Chris McComb's talk <strong>"AI and the Battle for the Soul of Design"</strong> &mdash; a compact 19-minute keynote at CDFAM NYC 2025 and a comprehensive 50-minute lecture covering his lab's full research portfolio. Both explore how AI is transforming engineering design and what role humans will play.</p>

<div class="tags">
  <span class="tag">Human-AI Teaming</span>
  <span class="tag">Engineering Design</span>
  <span class="tag">Cognitive Science</span>
  <span class="tag">Generative AI</span>
  <span class="tag">Lattice Structures</span>
  <span class="tag">Collective Intelligence</span>
  <span class="tag">Carnegie Mellon</span>
</div>

<h3>The Two Talks at a Glance</h3>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_0005s.png" alt="Talk 1 title slide" onclick="openLightbox(this)">
    <div class="caption"><strong>Talk 1</strong> &mdash; CDFAM NYC 2025 (19 min). Conceptual overview focused on human biases and potential futures.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_0005s.png" alt="Talk 2 title slide" onclick="openLightbox(this)">
    <div class="caption"><strong>Talk 2</strong> &mdash; Full lecture (~50 min). Deep dive into lab research: empathy, cognitive style, lattice optimization, and human-AI teaming experiments.</div>
  </div>
</div>

<h3>McComb's Central Thesis</h3>
<p>AI is reshaping design at a scale we can barely comprehend &mdash; but because <strong>human nature is stable</strong>, we can use our understanding of cognitive biases and psychological science to deliberately choose how AI integrates into design practice. The "battle" in the title is not between humans and machines, but between passive adoption and <strong>thoughtful, human-centered integration</strong>.</p>

<h3>Key Takeaways</h3>
<ul class="findings">
  <li><strong>The Human-AI Teaming Matrix</strong> organizes AI's role along two axes: Reactive vs. Proactive, and Problem-Focused vs. Process-Focused, yielding four distinct modes (Tool, Partner, Analytics, Coach).</li>
  <li><strong>Technology changes exponentially; humans do not.</strong> Our stable psychology gives us predictive power over how AI adoption will actually unfold.</li>
  <li><strong>Five cognitive biases</strong> will shape design-AI interaction: satisficing, automation bias, additive bias, herding behavior, and choice overload.</li>
  <li><strong>Individual traits don't predict team outcomes</strong> &mdash; but team-level composition (empathy diversity, cognitive style matching) does, and computational simulation can reveal this.</li>
  <li><strong>Hybrid teams perform as well as all-human teams</strong> in controlled experiments, and AI coaches intervene similarly to human coaches.</li>
  <li><strong>The "soul of design"</strong> is the parts that are most distinctly human: creativity, judgment, meaning-making, and collaborative sense-making.</li>
</ul>

</div>

<!-- ==================== TALK 1 ==================== -->
<div class="section" id="sec-talk1">

<h2>Talk 1: CDFAM NYC 2025 (19 min)</h2>
<p>The shorter talk is a high-level keynote focused on <strong>conceptual framing</strong> rather than technical depth. McComb builds an argument in three acts: the economic stakes, the human constants, and the possible futures.</p>

<div class="toc">
  <h4>Sections</h4>
  <ul>
    <li><a href="#t1-framework">The Human-AI Teaming Framework</a></li>
    <li><a href="#t1-stakes">Economic Stakes of AI</a></li>
    <li><a href="#t1-human">The Human Constant</a></li>
    <li><a href="#t1-biases">Five Cognitive Biases</a></li>
    <li><a href="#t1-futures">Seven Potential Futures</a></li>
  </ul>
</div>

<h3 id="t1-framework">The Human-AI Teaming Framework</h3>
<p>McComb introduces his core conceptual tool: a 2&times;2 matrix that classifies AI's role in design teams.</p>

<div class="slide-fig">
  <img src="/slides/v1/v1_0105s.png" alt="Human-AI Teaming Matrix" onclick="openLightbox(this)">
  <div class="caption">The Human-AI Teaming Matrix (McComb, Boatwright & Cagan, 2023). Four quadrants: AI-as-Tool, AI-as-Partner, AI-as-Analytics, AI-as-Coach.</div>
</div>

<p>The matrix helps differentiate how AI fits into design work. <strong>AI-as-Tool</strong> (reactive, problem-focused) is the most familiar mode &mdash; think CAD solvers. <strong>AI-as-Coach</strong> (proactive, process-focused) is the most novel and arguably most transformative.</p>

<h3 id="t1-stakes">Economic Stakes of AI</h3>
<p>McComb grounds the talk in hard numbers, drawing on PwC and McKinsey data to show that AI's economic impact is both massive and unevenly distributed.</p>

<div class="slide-fig">
  <img src="/slides/v1/v1_0345s.png" alt="PwC GDP Impact" onclick="openLightbox(this)">
  <div class="caption">PwC projection: AI could contribute ~$15 trillion to global GDP by 2030, driven primarily by labor productivity gains.</div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_0365s.png" alt="Geographic GDP impact" onclick="openLightbox(this)">
    <div class="caption">GDP impact concentrated in North America and China.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v1/v1_0405s.png" alt="Education time reallocation" onclick="openLightbox(this)">
    <div class="caption">McKinsey: AI could reallocate 20-30% of teacher time toward coaching and skill development.</div>
  </div>
</div>

<h3 id="t1-human">The Human Constant</h3>
<p>This is the philosophical pivot of the talk. McComb juxtaposes <strong>exponential technological change</strong> with the <strong>glacial pace of human biological change</strong> to argue that human psychology is a reliable foundation for predicting AI adoption patterns.</p>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_0565s.png" alt="Technology timeline" onclick="openLightbox(this)">
    <div class="caption">"Technology changes really, really fast." Exponential curve from 1800 to present.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v1/v1_0605s.png" alt="Human height over time" onclick="openLightbox(this)">
    <div class="caption">"People change relatively slowly." Average height across 190 years of data.</div>
  </div>
</div>

<div class="callout">
  <div class="label">Key Insight</div>
  <p>Even as AI capabilities explode, human psychology and behavior remain stable over centuries. This stability isn't a weakness &mdash; it's a source of predictive power for anticipating how designers will actually interact with AI.</p>
</div>

<h3 id="t1-biases">Five Cognitive Biases Shaping AI Adoption</h3>
<p>McComb's most original contribution in this talk: five ways human nature will constrain and color how we use AI in design.</p>

<h4>1. We satisfice readily</h4>
<div class="slide-fig">
  <img src="/slides/v1/v1_0665s.png" alt="Satisficing curve" onclick="openLightbox(this)">
  <div class="caption">Herbert Simon (1956): We stop at "Good Enough" rather than pursuing "Impossible Perfection." Designers will accept merely adequate AI outputs.</div>
</div>

<h4>2. We favor automation</h4>
<div class="slide-fig">
  <img src="/slides/v1/v1_0695s.png" alt="Automation bias" onclick="openLightbox(this)">
  <div class="caption">When AI is available, people default to using it &mdash; even when they shouldn't.</div>
</div>

<h4>3. We neglect subtractive changes</h4>
<div class="slide-fig">
  <img src="/slides/v1/v1_0745s.png" alt="Additive bias" onclick="openLightbox(this)">
  <div class="caption">Both humans and AI tend to add features rather than remove them. AI will likely amplify this well-documented "additive bias."</div>
</div>

<h4>4. We copy early movers irrationally</h4>
<div class="slide-fig">
  <img src="/slides/v1/v1_0875s.png" alt="Herding behavior" onclick="openLightbox(this)">
  <div class="caption">Herding behavior: early adopters of AI in design will be copied regardless of whether their approach is optimal.</div>
</div>

<h4>5. We suffer from choice overload</h4>
<div class="slide-fig">
  <img src="/slides/v1/v1_0895s.png" alt="Choice overload" onclick="openLightbox(this)">
  <div class="caption">AI dramatically expands the design space. More options = more paralysis (Hick's Law). Shown: AeroSet dataset of drone configurations.</div>
</div>

<h3 id="t1-futures">Seven Potential Futures</h3>
<p>McComb presents a spectrum from dystopian to optimistic, structured as a progression toward increasingly human-centered outcomes.</p>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_0935s.png" alt="Future 1" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 1:</strong> p(doom) &rarr; 1. Humankind goes extinct.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v1/v1_0965s.png" alt="Future 2" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 2:</strong> p(doom) &rarr; 0. We shut off the machines and embrace a low-tech future.</div>
  </div>
</div>

<div class="slide-fig">
  <img src="/slides/v1/v1_0985s.png" alt="Future 3" onclick="openLightbox(this)">
  <div class="caption"><strong>Future 3:</strong> CYBORGS. Human-machine integration (we're halfway there with the internet).</div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_1005s.png" alt="Future 4" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 4:</strong> Humans do the physical parts of design.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v1/v1_1035s.png" alt="Future 5" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 5:</strong> Humans do the early stages of design.</div>
  </div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v1/v1_1065s.png" alt="Future 6" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 6:</strong> Humans do the parts of design we enjoy most.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v1/v1_1095s.png" alt="Future 7" onclick="openLightbox(this)">
    <div class="caption"><strong>Future 7:</strong> Humans do the most human parts of design.</div>
  </div>
</div>

<div class="callout">
  <div class="label">McComb's Implied Preference</div>
  <p>The progression from catastrophic to optimistic is deliberate. Futures 6 and 7 represent his vision: humans retaining what is most intrinsically meaningful &mdash; creative ideation, empathetic judgment, and the work we find most fulfilling.</p>
</div>

</div>

<!-- ==================== TALK 2 ==================== -->
<div class="section" id="sec-talk2">

<h2>Talk 2: Full Lecture (~50 min)</h2>
<p>The longer talk covers the same framing but adds <strong>deep research content</strong> spanning empathy science, cognitive style theory, generative AI for lattice structures, and controlled human-AI teaming experiments.</p>

<div class="toc">
  <h4>Sections</h4>
  <ul>
    <li><a href="#t2-progression">The Research Progression</a></li>
    <li><a href="#t2-empathy">Empathy in Design Teams</a></li>
    <li><a href="#t2-cognitive">Cognitive Style & Team Composition</a></li>
    <li><a href="#t2-lattice">AI-Assisted Design: Lattices & Optimization</a></li>
    <li><a href="#t2-teaming">Human-AI Teaming Experiments</a></li>
    <li><a href="#t2-collective">Collective Intelligence & LLMs</a></li>
  </ul>
</div>

<h3 id="t2-progression">The Research Progression</h3>
<p>McComb organizes his lab's work as a three-stage progression from studying human designers, to building AI tools, to achieving genuine human-AI collaboration.</p>

<div class="slide-fig">
  <img src="/slides/v2/v2_0365s.png" alt="Research progression" onclick="openLightbox(this)">
  <div class="caption">The three stages: Human Designers &rarr; AI-Assisted Engineering Design &rarr; Human-AI Collaboration.</div>
</div>

<h3 id="t2-empathy">Empathy in Design Teams</h3>
<p>McComb presents a longitudinal study on empathy's role in design, using Davis's (1980) multidimensional model of empathy as the theoretical foundation.</p>

<div class="slide-fig">
  <img src="/slides/v2/v2_0545s.png" alt="Davis empathy model" onclick="openLightbox(this)">
  <div class="caption">Davis (1980): Four components of empathy &mdash; Personal Distress, Empathic Concern (affective); Fantasy, Perspective-Taking (cognitive).</div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_0705s.png" alt="Empathy individual results" onclick="openLightbox(this)">
  <div class="caption"><strong>Surprising finding:</strong> Individual-level trait empathy does NOT predict concept generation outcomes (creativity, usefulness, uniqueness, elegance). (Alzyeed et al., JMD 2021)</div>
</div>

<div class="callout">
  <div class="label">The Reversal</div>
  <p>Through computational recombination (simulating nominal teams from individual data), McComb's group discovered that while empathy doesn't matter at the individual level, <strong>team-level empathy diversity and elevation significantly predict creative outcomes</strong>. Design is fundamentally a team activity.</p>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_0775s.png" alt="Team empathy results" onclick="openLightbox(this)">
  <div class="caption">When analyzed at the team level, empathy diversity and elevation significantly affect creativity, elegance, usefulness, and uniqueness. (Alzyeed et al., AI EDAMI 2023)</div>
</div>

<h3 id="t2-cognitive">Cognitive Style & Team Composition</h3>
<p>Using Kirton's Adaption-Innovation (KAI) theory, McComb studies how cognitive style affects design team performance.</p>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_0945s.png" alt="KAI bell curve" onclick="openLightbox(this)">
    <div class="caption">Kirton's KAI spectrum: More Adaptive (prefer structure, doing things better) to More Innovative (less structure, doing things differently).</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_1175s.png" alt="Formula SAE model" onclick="openLightbox(this)">
    <div class="caption">The Formula SAE system model used to test KABOOM &mdash; a complex system with many interdependent subsystems.</div>
  </div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_1255s.png" alt="KABOOM results" onclick="openLightbox(this)">
  <div class="caption"><strong>Key finding:</strong> The optimal cognitive style depends on the subsystem. There is no universally best style &mdash; matching matters. (Lapp, Jablokow, McComb, ASME JMD)</div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_1385s.png" alt="FBS ontology" onclick="openLightbox(this)">
  <div class="caption">Function-Behavior-Structure (FBS) ontology: a structured way to analyze the design process. (Gero & Kannengiesser, 2014)</div>
</div>

<h3 id="t2-lattice">AI-Assisted Design: Lattices & Optimization</h3>
<p>McComb's technical contributions include using variational autoencoders (VAEs) and reinforcement learning for lattice structure design and topology optimization.</p>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_1515s.png" alt="Lattice structures" onclick="openLightbox(this)">
    <div class="caption">Lattice structure types: Uniform, Graded, and Graded Stranded, with energy absorption characteristics.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_1535s.png" alt="Multi-lattice benefits" onclick="openLightbox(this)">
    <div class="caption">Benefits of multi-lattice design: diverse mechanical properties, better stiffness, higher load capacity.</div>
  </div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_1585s.png" alt="VAE architecture" onclick="openLightbox(this)">
  <div class="caption">Variational Autoencoder architecture: learn a compressed latent representation of lattice geometry.</div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_1645s.png" alt="Latent space interpolation" onclick="openLightbox(this)">
    <div class="caption">Interpolating in latent space generates smooth transitions between lattice structures.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_1675s.png" alt="Property-augmented VAE" onclick="openLightbox(this)">
    <div class="caption">"Smooth Like Butter": Appending stiffness tensors to geometry enables property-aware generation. (Baldwen et al., 2025)</div>
  </div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_1715s.png" alt="Topology optimization" onclick="openLightbox(this)">
  <div class="caption">Multi-lattice topology optimization workflow using the learned embeddings.</div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_1805s.png" alt="RL performance" onclick="openLightbox(this)">
  <div class="caption">Reinforcement learning agents find high-performance solutions at reduced computational cost (R&sup2; = 0.911). (Agrawal & McComb, JCISE 2023)</div>
</div>

<h3 id="t2-teaming">Human-AI Teaming Experiments</h3>
<p>McComb presents controlled experiments comparing human teams, hybrid teams (with AI members), and AI-coached teams.</p>

<div class="slide-fig">
  <img src="/slides/v2/v2_1825s.png" alt="Teaming matrix" onclick="openLightbox(this)">
  <div class="caption">The Human-AI Teaming Matrix revisited in the context of experimental results.</div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_2055s.png" alt="Team structure" onclick="openLightbox(this)">
    <div class="caption">Experimental team structure: Design Specialists, Operations Specialists, Problem Manager, with controlled communication channels.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_2165s.png" alt="Hybrid vs human results" onclick="openLightbox(this)">
    <div class="caption"><strong>Key finding:</strong> Hybrid and human teams perform equally well. No significant difference in team profit (p = 0.32, p = 0.88).</div>
  </div>
</div>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_2375s.png" alt="AI coach structure" onclick="openLightbox(this)">
    <div class="caption">AI-as-Coach experiment: an AI coach monitors process management alongside or replacing a human coach.</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_2495s.png" alt="Coach intervention types" onclick="openLightbox(this)">
    <div class="caption">Human and AI coaches show similar distributions of intervention types (Advise, Inform, Coordinate, Communicate).</div>
  </div>
</div>

<h3 id="t2-collective">Collective Intelligence & LLMs</h3>
<p>McComb draws on collective intelligence research to build AI facilitators grounded in psychological theory rather than just prior data.</p>

<div class="slide-pair">
  <div class="slide-fig">
    <img src="/slides/v2/v2_2535s.png" alt="Collective intelligence" onclick="openLightbox(this)">
    <div class="caption">Quantifying collective intelligence: regression coefficients for Process, Skill, Group Size, Social Perceptions, Composition. (Riedl et al., PNAS 2021)</div>
  </div>
  <div class="slide-fig">
    <img src="/slides/v2/v2_2645s.png" alt="CI constructs" onclick="openLightbox(this)">
    <div class="caption">Three key constructs: Social Sensitivity, Coordinated Attention, Equal Participation.</div>
  </div>
</div>

<div class="slide-fig">
  <img src="/slides/v2/v2_2745s.png" alt="LLMs as tutees" onclick="openLightbox(this)">
  <div class="caption"><strong>Recent finding:</strong> LLMs as tutees (not tutors) boost student mastery. "Learning by teaching" the AI leads to higher concept inventory scores.</div>
</div>

<div class="callout">
  <div class="label">Counterintuitive Result</div>
  <p>Rather than using LLMs to tutor students, McComb's group found that having students <strong>teach the LLM</strong> produced significantly better learning outcomes. The "learning by teaching" effect transfers to AI interactions.</p>
</div>

</div>

<!-- ==================== COMPARISON ==================== -->
<div class="section" id="sec-comparison">

<h2>Comparison: Two Versions, One Vision</h2>

<h3>Structure</h3>
<p>The two talks share the same title and core thesis but differ significantly in scope and audience.</p>

<div style="overflow-x:auto;">
<table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:1rem 0;">
<tr style="border-bottom:2px solid var(--border);">
  <th style="text-align:left; padding:0.75rem; color:var(--text-muted); font-weight:600;"></th>
  <th style="text-align:left; padding:0.75rem; color:var(--accent); font-weight:600;">Talk 1: CDFAM (19 min)</th>
  <th style="text-align:left; padding:0.75rem; color:var(--accent); font-weight:600;">Talk 2: Full (50 min)</th>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Audience</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Industry practitioners, conference keynote</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Academic/research audience, lecture format</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Focus</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Conceptual framing, cognitive biases, futures</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Research portfolio: empathy, KAI, VAEs, teaming experiments</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Technical depth</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Low &mdash; high-level arguments</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">High &mdash; equations, architectures, statistical results</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Human biases section</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">5 biases (satisficing, automation, additive, herding, choice overload)</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Not present &mdash; replaced by empirical research</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Empathy research</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Not covered</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Deep dive: individual vs. team reversal</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Lattice/VAE work</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Not covered</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Full architecture: VAEs, latent interpolation, topology optimization</td>
</tr>
<tr style="border-bottom:1px solid var(--border-light);">
  <td style="padding:0.75rem; font-weight:600;">Teaming experiments</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">Matrix framework only</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">HyForm experiments, hybrid vs. human teams, AI coaching</td>
</tr>
<tr>
  <td style="padding:0.75rem; font-weight:600;">Potential futures</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">7 futures (includes p(doom) and cyborgs)</td>
  <td style="padding:0.75rem; color:var(--text-secondary);">6 futures (similar progression, slightly compressed)</td>
</tr>
</table>
</div>

<h3>Shared Content</h3>
<p>Both talks share these core elements:</p>
<ul class="findings">
  <li><strong>The Human-AI Teaming Matrix</strong> appears in both as the central conceptual framework.</li>
  <li><strong>Economic framing</strong> with PwC and McKinsey data on GDP impact and education transformation.</li>
  <li><strong>The "what will humans do?" question</strong> as the closing provocation.</li>
  <li><strong>The potential futures spectrum</strong> from p(doom) to "the most human parts of design."</li>
  <li><strong>Acknowledgments</strong> citing DARPA, NVIDIA, ERDC, and ANSYS as funders.</li>
</ul>

<h3>What Talk 1 Has That Talk 2 Doesn't</h3>
<div class="callout">
  <div class="label">Unique to Talk 1</div>
  <p>The <strong>five cognitive biases</strong> section (satisficing, automation bias, additive bias, herding, choice overload) is the conceptual centerpiece of Talk 1 and does not appear in Talk 2. McComb also includes the <strong>"technology changes fast, humans change slowly"</strong> juxtaposition with the Our World in Data charts, which Talk 2 skips in favor of research results. Talk 1 also has the <strong>AI infrastructure pyramid</strong> (McKinsey data stack from data storage up to AI).</p>
</div>

<div class="slide-fig">
  <img src="/slides/v1/v1_0295s.png" alt="AI stack pyramid" onclick="openLightbox(this)">
  <div class="caption">The AI infrastructure pyramid &mdash; unique to Talk 1. Organizations need the whole stack (data infrastructure through ML) before reaching AI value.</div>
</div>

<h3>What Talk 2 Has That Talk 1 Doesn't</h3>
<div class="callout">
  <div class="label">Unique to Talk 2</div>
  <p>Talk 2 adds substantial research content not in Talk 1: the <strong>empathy individual-vs-team reversal study</strong>, <strong>KABOOM cognitive style simulations</strong>, <strong>variational autoencoder lattice design</strong>, <strong>HyForm teaming experiments</strong> (hybrid teams, AI coaching), <strong>collective intelligence constructs</strong>, and the <strong>"LLMs as tutees"</strong> finding.</p>
</div>

<h3>Reading Them Together</h3>
<p>The two talks are best understood as <strong>complementary</strong>. Talk 1 provides the philosophical argument and psychological grounding for <em>why</em> human-AI teaming in design matters. Talk 2 provides the empirical evidence and technical machinery for <em>how</em> McComb's lab is actually doing it. Together they form a complete picture: the "why should we care" and the "here's what we've found."</p>

</div>

<!-- ==================== FUTURES ==================== -->
<div class="section" id="sec-futures">

<h2>The Futures of Human-AI Design</h2>
<p>Both talks close with a provocation: in a world where AI can do everything, what's left for human designers? McComb's answer unfolds as a spectrum of possibilities.</p>

<div class="slide-fig">
  <img src="/slides/v2/v2_2755s.png" alt="What will be left?" onclick="openLightbox(this)">
  <div class="caption">"In a future where computers will be able to do all this and even more, what will be left for human designers?"</div>
</div>

<h3>The Spectrum</h3>
<p>McComb presents these not as predictions but as <strong>possible equilibria</strong>, ordered from most catastrophic to most humanistic:</p>

<h4>1. Extinction</h4>
<p>p(doom) approaches 1. AI surpasses and eliminates humanity. McComb mentions this but doesn't dwell &mdash; it's the boundary condition, not the interesting case.</p>

<h4>2. Neo-Luddism</h4>
<p>p(doom) approaches 0. We reject AI and embrace a low-tech future. The mirror image of extinction &mdash; equally extreme.</p>

<h4>3. Cyborgs</h4>
<p>Human-machine integration. McComb notes we're already partway there with smartphones and the internet. Neuralink and similar technologies push further.</p>

<h4>4. Humans Do the Physical Parts</h4>
<p>AI handles cognitive design work; humans become fabricators and builders. The least optimistic of the "realistic" futures.</p>

<h4>5. Humans Do the Early Stages</h4>
<p>Humans frame problems and generate initial concepts; AI handles detailed design, analysis, and optimization. This maps to "front-loading" human involvement.</p>

<h4>6. Humans Do What We Enjoy</h4>
<div class="slide-fig">
  <img src="/slides/v2/v2_2925s.png" alt="Future: enjoyment" onclick="openLightbox(this)">
  <div class="caption">A value-aligned division of labor: humans keep the parts of design that are intrinsically rewarding.</div>
</div>

<h4>7. Humans Do the Most Human Parts</h4>
<div class="slide-fig">
  <img src="/slides/v2/v2_2955s.png" alt="Future: most human" onclick="openLightbox(this)">
  <div class="caption">Design as an expression of empathy, judgment, meaning-making, and collaborative sense-making.</div>
</div>

<div class="callout">
  <div class="label">McComb's Position</div>
  <p>The progression from catastrophic to humanistic is deliberate. McComb's research &mdash; on empathy, cognitive style, collective intelligence, and AI coaching &mdash; is fundamentally oriented toward enabling Futures 6 and 7: a world where humans retain what is most meaningful about design, informed by rigorous empirical understanding of how people and AI actually work together.</p>
</div>

<h3>What This Means for Practitioners</h3>
<ul class="findings">
  <li><strong>Don't assume AI replaces designers.</strong> The evidence shows hybrid teams perform comparably to all-human teams, and AI coaches behave similarly to human coaches.</li>
  <li><strong>Invest in team composition, not just tools.</strong> The empathy and cognitive style research shows that who's on the team matters more than individual talent or tool sophistication.</li>
  <li><strong>Watch for biases.</strong> Satisficing, automation bias, herding, and choice overload will all shape how your organization adopts AI &mdash; designing against these tendencies is critical.</li>
  <li><strong>Ground AI in theory, not just data.</strong> AI systems built on psychological constructs (collective intelligence, empathy, cognitive style) generalize better than those trained on task-specific data.</li>
  <li><strong>The "soul" is relational.</strong> What makes design human isn't any single capability &mdash; it's empathy, collaboration, judgment under ambiguity, and meaning-making. These are the skills to cultivate.</li>
</ul>

</div>

</div><!-- end .container -->

<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <img id="lightboxImg" src="" alt="Enlarged slide">
</div>

<button class="scroll-top" id="scrollTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">&#8593;</button>

<script>
// Theme
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('themeIcon').textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
}
(function() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('themeIcon').textContent = saved === 'dark' ? '☀️' : '🌙';
  }
})();

// Navigation
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  event.target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lightbox
function openLightbox(img) {
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Scroll to top
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});
</script>

</body>
</html>`;

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('http://localhost:' + PORT));
}

module.exports = app;
