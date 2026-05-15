import { ArrowRight, Check, Moon, Sparkles, TimerReset } from 'lucide-react';
import {
  MotionValue,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ReactNode, useMemo, useRef } from 'react';

const primaryText = '#E1E0CC';
const homeUrl = 'https://kutral.github.io/OneThingSite/';
const privacyUrl = 'https://kutral.github.io/OneThingSite/privacy.html';
const repoUrl = 'https://github.com/Kutral/OneThingSite';
const essaraUrl = 'https://essara.space/onething';
const playUrl = 'https://play.google.com/store/apps/details?id=com.essara.onething';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type Segment = {
  text: string;
  className?: string;
};

type Feature = {
  number: string;
  title: string;
  icon: string;
  items: string[];
};

const navItems = [
  { label: 'Why OneThing', shortLabel: 'Why', href: '#about' },
  { label: 'Brain dump', shortLabel: 'Dump', href: '#features' },
  { label: 'Focus timer', shortLabel: 'Timer', href: '#features' },
  { label: 'Privacy', shortLabel: 'Policy', href: './privacy.html' },
  { label: 'Download', shortLabel: 'Play', href: playUrl },
];

const features: Feature[] = [
  {
    number: '01',
    title: 'Brain Dump.',
    icon: asset('assets/brain-dump-icon.webp'),
    items: [
      'Capture scattered thoughts before they become a wall.',
      'Move from messy ideas to one useful next action.',
      'Keep task text local-first on your Android device.',
      'Use OneThing as a calm brain dump app, not another inbox.',
    ],
  },
  {
    number: '02',
    title: 'Smart Breakdown.',
    icon: asset('assets/smart-breakdown-icon.webp'),
    items: [
      'Turn vague tasks into smaller steps you can actually start.',
      'Support ADHD-style overwhelm without fake pressure.',
      'Keep the workflow narrow: pick one thing, then move.',
    ],
  },
  {
    number: '03',
    title: 'Focus Session.',
    icon: asset('assets/focus-session-icon.webp'),
    items: [
      'Start a quiet focus timer built around one selected task.',
      'Use optional reminders when you want a gentle nudge.',
      'See progress without streak anxiety or dashboard maintenance.',
    ],
  },
];

const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Why OneThing', href: '#about' },
      { label: 'Brain dump workflow', href: '#features' },
      { label: 'Focus timer', href: '#features' },
    ],
  },
  {
    title: 'Launch',
    links: [
      { label: 'Essara launch page', href: essaraUrl },
      { label: 'Google Play Store', href: playUrl },
      { label: 'Live GitHub Pages site', href: homeUrl },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'Privacy Policy', href: './privacy.html' },
      { label: 'Sitemap', href: asset('sitemap.xml') },
      { label: 'Robots.txt', href: asset('robots.txt') },
    ],
  },
  {
    title: 'Build',
    links: [
      { label: 'GitHub repository', href: repoUrl },
      { label: 'Public privacy URL', href: privacyUrl },
    ],
  },
];

function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            className="relative mr-[0.08em] inline-block"
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{
              duration: 0.8,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showAsterisk && index === words.length - 1 ? (
              <span className="absolute -right-[0.28em] top-[0.64em] text-[0.28em]">*</span>
            ) : null}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function WordsPullUpMultiStyle({
  segments,
  className = '',
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const words = useMemo(
    () =>
      segments.flatMap((segment) =>
        segment.text.split(' ').map((word) => ({
          word,
          className: segment.className,
        })),
      ),
    [segments],
  );

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`} className="overflow-hidden">
          <motion.span
            className={`mr-[0.22em] inline-block ${item.className ?? ''}`}
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { y: 20 }}
            transition={{
              duration: 0.76,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function AnimatedLetter({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const charProgress = total <= 1 ? 1 : index / total;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, charProgress - 0.1), Math.min(1, charProgress + 0.05)],
    [0.2, 1],
  );

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

function ScrollRevealParagraph({ children }: { children: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const characters = Array.from(children);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p
      ref={ref}
      className="relative mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-[#DEDBC8] sm:mt-10 sm:text-sm md:text-base"
    >
      {characters.map((char, index) => (
        <AnimatedLetter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={characters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.article
      ref={ref}
      className="feature-card flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#212121] p-5 sm:min-h-[460px] sm:p-6 lg:min-h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <img
          src={feature.icon}
          alt=""
          className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12"
          loading="lazy"
        />
        <div className="mt-8 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-normal leading-none text-primary sm:text-3xl">
            {feature.title}
          </h3>
          <span className="text-xs text-gray-500">{feature.number}</span>
        </div>
        <ul className="mt-8 space-y-4">
          {feature.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-snug text-gray-400">
              <Check className="mt-0.5 h-4 w-4 flex-none text-primary" strokeWidth={1.8} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={feature.number === '01' ? essaraUrl : playUrl}
        className="group mt-10 inline-flex items-center gap-2 text-sm text-primary/80 transition hover:text-primary"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 -rotate-45 transition group-hover:translate-x-1"
          strokeWidth={1.6}
        />
      </a>
    </motion.article>
  );
}

function MotionLink({
  href,
  children,
  delay,
  variant = 'cream',
}: {
  href: string;
  children: ReactNode;
  delay: number;
  variant?: 'cream' | 'dark';
}) {
  return (
    <motion.a
      href={href}
      className={`group inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition sm:px-5 sm:text-base ${
        variant === 'cream' ? 'bg-primary text-black' : 'border border-primary/20 bg-black/30 text-primary'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span>{children}</span>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition group-hover:scale-110 sm:h-10 sm:w-10 ${
          variant === 'cream' ? 'bg-black text-primary' : 'bg-primary text-black'
        }`}
      >
        <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
      </span>
    </motion.a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-primary">
      <main>
        <section className="relative h-screen p-4 md:p-6" aria-label="OneThing landing hero">
        <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={asset('assets/onething-hero-cinematic.mp4')}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/75" />

          <nav
            className="absolute left-1/2 top-0 z-20 max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-b-2xl bg-black px-4 py-2 md:rounded-b-3xl md:px-8"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-2 sm:gap-6 md:gap-12 lg:gap-14">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-[10px] transition sm:text-xs md:text-sm"
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  >
                    <span className="sm:hidden">{item.shortLabel}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 sm:px-7 sm:pb-8 md:px-9 md:pb-10">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h1
                  className="text-[15vw] font-medium leading-[0.85] tracking-normal sm:text-[16vw] md:text-[15vw] lg:text-[12.5vw] xl:text-[12vw] 2xl:text-[12vw]"
                  style={{ color: primaryText }}
                >
                  <WordsPullUp text="OneThing" showAsterisk />
                </h1>
              </div>
              <div className="w-full max-w-xs pb-2 sm:max-w-md lg:col-span-4 lg:pb-8">
                <motion.p
                  className="w-full max-w-xs break-words text-xs leading-[1.2] text-primary/75 [overflow-wrap:anywhere] sm:max-w-md sm:text-sm md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  OneThing is an Android focus app for overloaded minds: brain-dump the noise,
                  choose one real task, break it into tiny steps, and finish inside a calm focus
                  timer by Essara.
                </motion.p>
                <div className="mt-4 flex flex-row flex-wrap gap-3 lg:flex-col xl:flex-row">
                  <MotionLink href={essaraUrl} delay={0.7}>
                    Essara page
                  </MotionLink>
                  <MotionLink href={playUrl} delay={0.82} variant="dark">
                    Get on Play
                  </MotionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="about" className="bg-black px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <div className="mx-auto max-w-6xl bg-[#101010] px-6 py-16 text-center sm:px-10 sm:py-24 md:px-14 md:py-28">
          <p className="text-[10px] font-bold uppercase text-primary sm:text-xs">Android focus</p>
          <h2
            className="mx-auto mt-6 max-w-4xl text-3xl font-normal leading-[0.95] tracking-normal sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: primaryText }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Built for the moment when the list is too loud,' },
                {
                  text: 'and one honest task is enough.',
                  className: 'font-serif italic',
                },
                {
                  text: 'OneThing turns overwhelm into a startable next step.',
                },
              ]}
            />
          </h2>
          <ScrollRevealParagraph>
            Brain dump the noise, choose one priority, break it into tiny next steps, and sit with a
            guided focus session. No account wall. No dashboard to babysit. Just enough structure to
            turn today back into a day you can finish.
          </ScrollRevealParagraph>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              ['Brain dump app', 'Capture messy thoughts quickly.'],
              ['One-task focus', 'Pick the thing that matters now.'],
              ['Local-first Android', 'Keep the core workflow on device.'],
            ].map(([title, body]) => (
              <div key={title} className="border-t border-primary/15 pt-4">
                <p className="text-sm text-primary">{title}</p>
                <p className="mt-2 text-xs leading-snug text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section id="features" className="relative min-h-screen overflow-hidden bg-black px-4 py-20 sm:px-6 md:py-28">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative mx-auto max-w-7xl">
          <header className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-normal leading-tight tracking-normal sm:text-2xl md:text-3xl lg:text-4xl">
              <WordsPullUpMultiStyle
                segments={[
                  {
                    text: 'A one-task workflow for Android focus.',
                    className: 'text-primary',
                  },
                  {
                    text: 'Built for brain dumps, tiny steps, and calmer sessions.',
                    className: 'text-gray-500',
                  },
                ]}
              />
            </h2>
          </header>

          <div className="mt-12 grid gap-3 sm:mt-16 md:grid-cols-2 md:gap-2 lg:h-[520px] lg:grid-cols-4 lg:gap-1">
            <motion.article
              className="feature-card relative min-h-[420px] overflow-hidden p-5 sm:min-h-[460px] sm:p-6 lg:min-h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                src={asset('assets/onething-focus-canvas.mp4')}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex gap-2 text-primary/80">
                  <TimerReset className="h-5 w-5" strokeWidth={1.6} />
                  <Moon className="h-5 w-5" strokeWidth={1.6} />
                  <Sparkles className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <p className="max-w-[12rem] text-2xl leading-none" style={{ color: primaryText }}>
                  Your focus room.
                </p>
              </div>
            </motion.article>

            {features.map((feature, index) => (
              <FeatureCard key={feature.number} feature={feature} index={index + 1} />
            ))}
          </div>
        </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-primary/10 bg-black px-4 py-14 sm:px-6 md:py-20">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1.5fr]">
          <div>
            <a href={homeUrl} className="inline-flex items-center gap-3 text-primary">
              <span className="h-3 w-3 rounded-full border border-primary/70 bg-primary/20" />
              <span className="text-lg font-extrabold">OneThing</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary/65">
              Local-first Android focus for brain dumps, one priority, tiny next steps, and calmer
              work sessions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={playUrl}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-black"
              >
                Get on Play
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href="./privacy.html"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-bold text-primary/80"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-snug text-primary/60 transition hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-primary/10 pt-6 text-xs text-primary/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 OneThing by Essara. Built for GitHub Pages.</p>
          <p>Google-verifiable, crawlable, and Play Store ready.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
