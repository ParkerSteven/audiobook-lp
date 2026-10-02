import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import logoAsset from "@/assets/TheCollingwoodPress.png";
import storybookV2 from "@/assets/storybook-bg-v2.jpg.asset.json";
import openBookAsset from "@/assets/open-book.jpg.asset.json";
import ibpaBadge from "@/assets/ibpa-member.png";
import bbbBadge from "@/assets/bbb-accredited.svg";
import listeningBg from "@/assets/ab2-listening.jpg";
import footerBg from "@/assets/v3-footer-bg.jpg";
import heroImg from "@/assets/ab2-hero.jpg";
import ctaImg from "@/assets/ab2-cta.jpg";
import guidanceBg from "@/assets/audio-guidance-bg.jpg";
import faqBg from "@/assets/audio-faq-bg.jpg";
import manuscriptImg from "@/assets/audio-stage-manuscript.jpg";
import castingImg from "@/assets/audio-stage-casting.jpg";
import recordingImg from "@/assets/audio-stage-recording.jpg";
import studioEditingImg from "@/assets/audio-stage-editing.jpg";
import masteringImg from "@/assets/audio-stage-mastering.jpg";
import deliveryImg from "@/assets/audio-stage-delivery.jpg";
import amazonLogo from "@/assets/audio-amazon.png";
import appleLogo from "@/assets/audio-apple.png";
import barnesLogo from "@/assets/audio-barnes.png";
import googleLogo from "@/assets/audio-google.png";
import hooplaLogo from "@/assets/audio-hoopla.png";
import overdriveLogo from "@/assets/audio-overdrive.png";
import koboLogo from "@/assets/audio-rakuten.png";
import scribdLogo from "@/assets/audio-scribd.png";
import audibleLogo from "@/assets/audible.svg";
import spotifyLogo from "@/assets/audio-logo-spotify.svg";
import libroLogo from "@/assets/audio-logo-libro.png";
import storytelLogo from "@/assets/audio-logo-storytel.png";
import markAudible from "@/assets/platform-icons/audible.svg";
import markAmazon from "@/assets/platform-icons/kindle-icon.png";
import markApple from "@/assets/platform-icons/apple-icon.png";
import markGoogle from "@/assets/platform-icons/gplay-books.svg";
import markSpotify from "@/assets/platform-icons/spotify.svg";
import markKobo from "@/assets/platform-icons/kobo-icon.png";
import markScribd from "@/assets/platform-icons/scribd-icon.png";
import markBarnes from "@/assets/platform-icons/barnes-icon.png";
import markOverdrive from "@/assets/platform-icons/overdrive-icon.png";
import markHoopla from "@/assets/platform-icons/hoopla-icon.png";
import BBAImage from "@/assets/blue-seal.png";
import { submitToGoogleSheet } from "@/lib/submitToGoogleSheet";

const LOGO_URL = logoAsset;
const pageBg = storybookV2.url;
const openBook = openBookAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Audiobook Production Services — Collingwood Press" },
      {
        name: "description",
        content:
          "Professional audiobook narration, recording, editing, mastering and distribution for authors from Collingwood Press.",
      },
      { property: "og:title", content: "Audiobook Production Services — Collingwood Press" },
      {
        property: "og:description",
        content:
          "Give your manuscript a professional voice with casting, studio recording, mastering and global audiobook distribution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AudiobookPage,
});

/* ---------- DATA ---------- */

const platforms = [
  { name: "Audible", logo: audibleLogo, mark: markAudible },
  { name: "Amazon", logo: amazonLogo, mark: markAmazon },
  { name: "Apple Books", logo: appleLogo, mark: markApple },
  { name: "Google Play Books", logo: googleLogo, mark: markGoogle },
  { name: "Spotify", logo: spotifyLogo, mark: markSpotify },
  { name: "Kobo", logo: koboLogo, mark: markKobo },
  { name: "Scribd", logo: scribdLogo, mark: markScribd },
  { name: "Barnes & Noble", logo: barnesLogo, mark: markBarnes },
  { name: "OverDrive", logo: overdriveLogo, mark: markOverdrive },
  { name: "Hoopla", logo: hooplaLogo, mark: markHoopla },
  { name: "Libro.fm", logo: libroLogo, mark: libroLogo.url },
  { name: "Storytel", logo: storytelLogo, mark: storytelLogo.url },
];

const studioSteps = [
  {
    title: "Manuscript Review",
    image: manuscriptImg,
    body: "We read through your book to understand tone, style, and structure. This ensures the narration matches the voice of your writing.",
  },
  {
    title: "Voice Casting",
    image: castingImg,
    body: "We help select a narrator whose voice suits your book's style and audience. Where the story calls for it, multiple voices can be considered.",
  },
  {
    title: "Recording",
    image: recordingImg,
    body: "Professional narrators record the book in a controlled studio environment. Each chapter is captured clearly for a consistent listening experience.",
  },
  {
    title: "Editing and Proofing",
    image: studioEditingImg,
    body: "The recording is edited and checked for clarity, pacing, and consistency. Unwanted pauses, mistakes, and background noise are addressed before mastering.",
  },
  {
    title: "Mastering and Formatting",
    image: masteringImg,
    body: "The audio is mastered to meet industry standards for platforms like Audible, Apple Books, and other digital distributors. Files are formatted for easy distribution.",
  },
  {
    title: "Final Delivery",
    image: deliveryImg,
    body: "You receive the finished audio files, prepared for release. We can guide you through submission to the platforms you choose.",
  },
];

const faqs = [
  {
    q: "Why should I publish an audiobook?",
    a: "An audiobook gives people another way to enjoy your work — during a commute, while exercising, or at home. A skilled narrator can bring new texture to the story, while an audio edition gives your existing book another format and the chance to reach listeners who may not pick up a print copy.",
  },
  {
    q: "How can an audiobook make my book more accessible?",
    a: "Audio offers another way to experience your work. It can be especially valuable to readers with vision loss, dyslexia, or other reading challenges, as well as anyone who finds listening more comfortable than reading print. Offering a narrated edition gives more people a choice in how they enjoy your book.",
  },
  {
    q: "Do I need a finished manuscript to start?",
    a: "Yes. A complete manuscript ensures consistent narration and accurate pacing for the audiobook.",
  },
  {
    q: "Can I choose the narrator?",
    a: "Yes. We provide options to match your book's tone, audience, and style, including male, female, or multiple voices.",
  },
  {
    q: "How long does audiobook production take?",
    a: "Production time depends on your book's length, narration style, and complexity. We can give you an estimated schedule after reviewing your manuscript.",
  },
  {
    q: "Do you handle distribution?",
    a: "We prepare files for submission and can guide you through distribution options, including platforms such as Audible and Apple Books. Each platform has its own requirements and approval process.",
  },
  {
    q: "Can I make changes after recording?",
    a: "Minor revisions are possible before final mastering. Major changes may require additional sessions and fees.",
  },
  {
    q: "What kind of audio files will I receive?",
    a: "Your recording is edited and mastered for professional sound quality. The final files are prepared according to the requirements of your chosen distribution channels.",
  },
  {
    q: "Can multiple narrators be used for different characters?",
    a: "Yes. We can assign multiple voices to bring dialogue and characters to life, enhancing the listening experience.",
  },
  {
    q: "Is there support for marketing the audiobook?",
    a: "Yes. While production is our focus, we provide guidance on promoting your audiobook through digital channels and online platforms.",
  },
  {
    q: "Can I produce an audiobook for a self-published title?",
    a: "Yes. We work with both traditionally published and self-published authors.",
  },
];

const reviews = [
  {
    name: "Chris Thompson",
    title: "The Journey Within",
    date: "Mar 2026",
    rating: 5,
    body: "Collingwood Press made my dream real. They guided me through editing, cover design, and launch. My book is selling on Amazon and I could not be more proud.",
  },
  {
    name: "Michael Brooks",
    title: "Reflections of Success",
    date: "Feb 2026",
    rating: 5,
    body: "I never thought publishing could be this smooth. Thorough editing, sharp design, flawless distribution — delivered exactly on schedule.",
  },
  {
    name: "William Harris",
    title: "Finding My Voice",
    date: "Jan 2026",
    rating: 5,
    body: "They took my scattered draft and turned it into a real book. Honest feedback, transparent pricing, launch on the date they promised.",
  },
  {
    name: "Hannah Reed",
    title: "The Paper Garden",
    date: "Dec 2025",
    rating: 5,
    body: "Collingwood helped my book find readers fast. A publisher that treats you like a partner and not a transaction.",
  },
  {
    name: "David Whitaker",
    title: "Ledger of Days",
    date: "Nov 2025",
    rating: 5,
    body: "Straight talk from day one. Told me what my manuscript needed, what it would cost, and when it would be done. No upsells.",
  },
  {
    name: "Eleanor Grady",
    title: "North by North",
    date: "Oct 2025",
    rating: 5,
    body: "The editing sharpened my prose without changing my voice. The cover got me stopped in the aisle at my local shop.",
  },
];

function Star({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
    </svg>
  );
}

function AudiobookPage() {
  return (
    <div className="audiobook-page relative bg-paper text-ink font-serif antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-repeat-y bg-top bg-[length:100%_auto] opacity-[0.42]"
        style={{ backgroundImage: `url(${pageBg})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(245,239,224,0.55) 0%, rgba(236,227,206,0.22) 22%, rgba(220,200,156,0.16) 55%, rgba(236,227,206,0.28) 80%, rgba(245,239,224,0.55) 100%)",
        }}
      />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Platforms />
        <Studio />
        <AiNotice />
        <FAQ />
        <Reviews />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  return (
    <header className="border-b border-rule bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-[1360px] px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 lg:gap-8 whitespace-nowrap">
        <Link to="/" className="flex items-center min-w-0 shrink-0" aria-label="Collingwood Press">
          <img
            src={LOGO_URL}
            alt="Collingwood Press"
            className="h-9 w-auto max-w-[170px] object-contain sm:h-12 sm:max-w-[220px] lg:h-14 lg:max-w-[280px]"
            loading="lazy"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 font-sans text-[13.5px] tracking-[0.16em] uppercase text-ink-soft font-medium">
          <a href="#studio" className="hover:text-navy">
            Studio
          </a>
          <a href="#platforms" className="hover:text-navy">
            Platforms
          </a>
          <a href="#reviews" className="hover:text-navy">
            Reviews
          </a>
          <a href="#faq" className="hover:text-navy">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-5 shrink-0 ml-auto sm:ml-0">
          <a
            href="tel:+19362233644"
            className="hidden xl:inline whitespace-nowrap font-sans text-[15px] text-ink-soft hover:text-navy"
          >
            +1 (936) 223-3644
          </a>
          <Button
            asChild
            className="sm:btn-primary text-[11px] sm:text-[12px] px-3 py-2.5 sm:px-4 sm:py-2.5 w-auto whitespace-nowrap shrink-0 text-center leading-none"
          >
            <a href="#signup">Submit Manuscript</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden text-ink">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.34]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/75 via-paper/50 to-paper/80" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12 pt-12 lg:pt-14 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 border border-gold/70 bg-paper-deep/60 px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span className="regal text-[12px] tracking-[0.22em] uppercase text-navy">
              Audiobook Production
            </span>
          </div>
          <h1 className="mt-6 display text-[28px] sm:text-[34px] lg:text-[42px] leading-[1.1] text-ink">
            Good Books Get Read.
            <br />
            The Best Audiobooks Get <em className="italic text-navy">Remembered.</em>
          </h1>
          <p className="mt-6 max-w-[60ch] text-[17.5px] leading-[1.75] text-ink/90 font-serif">
            Some readers listen on commutes, at the gym, or while cooking dinner. An audiobook lets
            your story meet them in those moments, reaching people who might not otherwise pick up
            the printed edition.
          </p>
          <p className="mt-4 max-w-[60ch] text-[17.5px] leading-[1.75] text-ink/90 font-serif">
            Collingwood Press helps turn your manuscript into a professionally produced audiobook.
            From narrator selection and studio-quality recording to editing and mastering, we
            prepare your book for distribution through the channels that suit it.
          </p>
          <p className="mt-4 font-serif italic text-[18px] text-maroon">
            Your words deserve more than pages. They deserve a voice.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="btn-gold group">
              <a href="#signup">
                Submit Your Manuscript
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Button>
            <Button asChild className="btn-primary">
              <a href="tel:+19362233644">Call · +1 (936) 223-3644</a>
            </Button>
          </div>

          <div className="mt-9 max-w-[560px]">
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-gold/40" />
              <span className="font-sans text-[10.5px] font-semibold tracking-[0.28em] uppercase text-ink-mute whitespace-nowrap">
                Accredited &amp; Member
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-gold to-gold/40" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-x-9 gap-y-4">
              <a href="https://www.ibpa-online.org/" target="_blank">
                <img
                  src={ibpaBadge}
                  alt="Independent Book Publishers Association — Proud Member"
                  className="h-11 sm:h-12 w-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
                />
              </a>
              <span className="hidden sm:block h-9 w-px bg-rule" />
              <a href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick"
                target="_blank"
              >
                <img
                  src={BBAImage}
                  alt="BBB Accredited Business"
                  className="h-10 sm:h-11 w-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]"
                />
              </a>
            </div>
          </div>
        </div>

        <div id="signup" className="lg:col-span-5 lg:-mt-2 scroll-mt-24">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

function ModField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: any;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-sans block mb-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-navy"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-paper-deep/40 border border-rule px-3.5 py-3 text-[15.5px] font-sans text-ink placeholder:text-ink-mute/60 focus:outline-none focus:border-navy focus:bg-paper transition"
      />
    </div>
  );
}

function LeadForm({ idPrefix = "hero" }: { idPrefix?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // NEW: no redirect, just show success inline
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    manuscriptStatus: "",
  });

  const formatUSPhone = (raw: string) => {
    let digits = raw.replace(/\D/g, "");
    if (digits.startsWith("1")) digits = digits.slice(1); // strip leading 1, we add it ourselves
    digits = digits.slice(0, 10);

    let formatted = "+1";
    if (digits.length > 0) formatted += ` (${digits.slice(0, 3)}`;
    if (digits.length >= 3) formatted += `) `;
    if (digits.length > 3) formatted += digits.slice(3, 6);
    if (digits.length >= 6) formatted += `-`;
    if (digits.length > 6) formatted += digits.slice(6, 10);
    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatUSPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || phoneDigits.replace(/^1/, "").length !== 10) {
      newErrors.phone = "Please enter a valid US phone number";
    }

    if (!formData.manuscriptStatus.trim()) {
      newErrors.manuscriptStatus = "Please select an option";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const result = await submitToGoogleSheet({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      manuscriptStatus: formData.manuscriptStatus,
      source: "Home Page Form",
    });

    if (!result.success) {
      alert(result.message);
      setIsSubmitting(false);
      return;
    }

    // No redirect — just clear and show inline success state
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      manuscriptStatus: "",
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative bg-paper text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] border border-rule">
      <div className="h-1.5 bg-gradient-to-r from-gold via-gold-deep to-gold" />
      <div className="relative p-7 lg:p-8">
        {isSubmitted ? (
          <div className="py-6 text-center">
            <p className="regal text-[12px] tracking-[0.22em] uppercase text-maroon">
              Thank you
            </p>
            <h3 className="mt-3 display text-[22px] lg:text-[24px] leading-[1.2] text-navy">
              We've received your manuscript details.
            </h3>
            <p className="mt-3 font-sans text-[15px] text-ink-mute leading-[1.55]">
              A senior editor will reply within one business day.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 btn-secondary"
            >
              Submit another
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-navy">◆</span>
                <p className="font-sans text-[12px] font-semibold tracking-[0.24em] uppercase text-maroon">
                  Free Audiobook Consultation
                </p>
              </div>
              <h3 className="mt-3 display text-[22px] lg:text-[24px] leading-[1.15] text-navy">
                Give your book <em className="italic text-maroon">a voice.</em>
              </h3>
              <p className="mt-2 font-sans text-[15px] text-ink-mute leading-[1.55]">
                Tell us about your manuscript and the kind of audiobook you have in mind.
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <ModField
                  label="First name"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  required
                />
                <ModField
                  label="Last name"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  required
                />
              </div>
              <ModField
                label="Email address"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <ModField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              // error={errors.phone}
              />
              <div>
                <label className="font-sans block mb-1.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-navy">
                  Where are you?<span className="text-maroon ml-0.5">*</span>
                </label>
                <select
                  name="manuscriptStatus"
                  required
                  value={formData.manuscriptStatus}
                  onChange={handleChange}
                  className={`w-full bg-paper-deep/40 border px-3.5 py-3 text-[15.5px] text-ink font-sans focus:outline-none focus:bg-paper transition ${errors.manuscriptStatus ? "border-red-500 focus:border-red-500" : "border-rule focus:border-navy"}`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Early draft — need direction</option>
                  <option>Complete draft — needs editing</option>
                  <option>Fully written — needs publishing</option>
                  <option>Already published — need marketing</option>
                </select>
                {errors.manuscriptStatus && (
                  <p className="mt-1 text-[12px] font-sans text-red-600">
                    {errors.manuscriptStatus}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting…" : "Submit for Free Review"}
              </button>
              <p className="text-[12.5px] text-ink-mute leading-relaxed font-sans">
                By submitting, you consent to The Collingwood Press contacting you about your
                manuscript. No spam. No sharing.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- PLATFORMS (flip carousel) ---------- */
function Platforms() {
  const list = [...platforms, ...platforms];
  return (
    <section id="platforms" className="relative overflow-hidden text-ink scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={listeningBg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper-deep/40 to-paper/85" />
      </div>
      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-12 pt-10 pb-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-px bg-navy" />
          <h2 className="mt-4 display text-[20px] lg:text-[26px] leading-[1.14] text-ink max-w-[28ch]">
            Your Audiobook, Where <em className="italic text-navy">Listeners Already Are</em>
          </h2>
        </div>
      </div>

      <div className="relative pt-4 pb-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="carousel-track audio-logo-track flex gap-4 w-max px-6">
          {list.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="flip-card w-[200px] h-[92px] flex-none"
              tabIndex={0}
            >
              <div className="flip-inner">
                <div className="flip-face bg-paper/95 border border-rule hover:border-navy overflow-hidden">
                  <img
                    src={r.mark}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 m-auto max-h-[72%] max-w-[82%] w-auto object-contain opacity-[0.13]"
                  />
                  <span className="relative font-serif text-[16px] tracking-wide text-ink text-center px-3">
                    {r.name}
                  </span>
                </div>
                <div className="flip-face flip-back bg-paper border border-gold-deep px-4">
                  <img
                    src={r.logo}
                    alt={`${r.name} logo`}
                    loading="lazy"
                    className="max-h-[64px] max-w-[170px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION HEADING ---------- */
function SectionHeading({
  children,
  kicker,
  dark = false,
}: {
  children: React.ReactNode;
  kicker?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-14 h-px ${dark ? "bg-navy" : "bg-gold"}`} />
      <h2
        className={`mt-5 display text-[24px] lg:text-[30px] leading-[1.14] max-w-[28ch] ${dark ? "text-ink" : "text-navy"}`}
      >
        {children}
      </h2>
      {kicker && (
        <p
          className={`mt-4 font-serif text-[17.5px] leading-[1.7] max-w-[62ch] ${dark ? "text-ink/85" : "text-ink-soft"}`}
        >
          {kicker}
        </p>
      )}
    </div>
  );
}

/* ---------- STUDIO ---------- */
function Studio() {
  return (
    <section id="studio" className="relative overflow-hidden text-ink scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={openBook}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/75 via-paper/45 to-paper/75" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 py-16 lg:py-18">
        <SectionHeading
          dark
          kicker={
            <>
              From choosing a narrator to polishing the final recording, each stage helps bring your
              book to listeners.
            </>
          }
        >
          Inside Our <em className="italic text-navy">Audiobook Studio</em>
        </SectionHeading>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {studioSteps.map((s) => (
            <article
              key={s.title}
              className="bg-paper/95 border border-rule border-t-[3px] border-t-gold overflow-hidden hover:border-t-maroon hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.28)] transition-all"
            >
              <img
                src={s.image}
                alt=""
                loading="lazy"
                width={512}
                height={512}
                className="h-[150px] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="display text-[17px] leading-[1.25] text-navy">{s.title}</h3>
                <div className="mt-2 w-8 h-px bg-gold" />
                <p className="mt-3 font-serif text-[16.5px] leading-[1.7] text-ink-soft">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild className="btn-gold">
            <a href="#signup">Get Audiobook Quote →</a>
          </Button>
          <Button asChild className="btn-primary">
            <a href="#faq">Read the FAQ</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- AI NOTICE ---------- */
function AiNotice() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={guidanceBg}
          alt=""
          loading="lazy"
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/55 to-paper/80" />
      </div>
      <div className="relative mx-auto max-w-[1120px] px-6 lg:px-12 py-14">
        <div className="bg-paper/95 border border-rule border-l-[4px] border-l-gold p-7 lg:p-9">
          <p className="font-sans text-[12px] font-semibold tracking-[0.24em] uppercase text-maroon">
            Clear guidance, not guesswork
          </p>
          <h2 className="mt-3 display text-[22px] lg:text-[27px] leading-[1.18] text-navy max-w-[34ch]">
            Exploring AI Narration?{" "}
            <em className="italic text-maroon">Know Your Distribution Options.</em>
          </h2>
          <div className="mt-4 w-14 h-px bg-gold" />
          <p className="mt-5 font-serif text-[17px] leading-[1.75] text-ink-soft max-w-[80ch]">
            If you are considering AI narration, check each platform's current rules before
            production begins. Requirements for synthetic voices vary by distributor and may change.
            We can help you explore the available options and plan a release that fits your book.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button asChild className="btn-primary">
              <a href="#signup">Connect With Us Today</a>
            </Button>
            <span className="font-serif italic text-[16.5px] text-ink-mute">
              Ask about current platform requirements.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={faqBg}
          alt=""
          loading="lazy"
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/85 via-paper/65 to-paper/85" />
      </div>
      <div className="relative mx-auto max-w-[1080px] px-6 lg:px-12 py-14 lg:py-16">
        <SectionHeading
          kicker={
            <>
              Clear answers about narration, timelines, and delivery — before you record a single
              chapter.
            </>
          }
        >
          Frequently Asked <em className="italic text-maroon">Questions</em>
        </SectionHeading>

        <div className="mt-10 mx-auto max-w-[820px]">
          <div className="border-t border-rule">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-rule">
                  <Button
                    variant="ghost"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full h-auto rounded-none px-0 py-4 flex items-baseline gap-6 text-left whitespace-normal hover:bg-transparent"
                    aria-expanded={isOpen}
                  >
                    <span className="display text-[16px] lg:text-[18px] leading-[1.3] flex-1 text-navy">
                      {f.q}
                    </span>
                    <span
                      className="display text-[24px] leading-none text-maroon shrink-0 transition-transform"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </Button>
                  {isOpen && (
                    <div className="pb-5 pr-6 -mt-1 reveal">
                      <p className="font-serif text-[17px] leading-[1.75] text-ink-soft max-w-[68ch]">
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="btn-primary">
              <a href="#signup">Get Free Consultation</a>
            </Button>
            <Button asChild className="btn-gold">
              <a href="#final">Submit Your Manuscript</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper-deep/30 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 py-16 lg:py-18">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5" />
            ))}
          </div>
          <h2 className="mt-4 display text-[24px] lg:text-[30px] leading-[1.1] text-navy max-w-[26ch]">
            Why Authors Trust Us With Their <em className="italic text-maroon">Life's Work.</em>
          </h2>
          <p className="mt-4 font-serif text-[17.5px] leading-[1.65] max-w-[58ch] text-ink-soft">
            Hear from authors who have worked with Collingwood Press across publishing, editing, and
            distribution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-paper border border-rule p-6 hover:border-gold hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)] transition-all flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="font-sans text-[12px] tracking-[0.14em] uppercase text-ink-mute">
                  {r.date}
                </span>
              </div>
              <p className="mt-4 font-serif text-[17px] leading-[1.75] text-ink flex-1">
                "{r.body}"
              </p>
              <div className="mt-5 pt-4 border-t border-rule flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center display text-[16px] font-bold flex-none">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <div className="regal text-[13.5px] text-navy tracking-[0.06em]">{r.name}</div>
                  <div className="font-serif italic text-[13.5px] text-ink-mute">"{r.title}"</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="final" className="relative overflow-hidden text-ink scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={ctaImg}
          alt=""
          loading="lazy"
          width={1600}
          height={900}
          className="h-full w-full object-cover opacity-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/80 via-paper-deep/55 to-paper/85" />
      </div>

      <div className="relative mx-auto max-w-[1220px] px-6 lg:px-12 py-16 lg:py-18 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="w-14 h-px bg-navy" />
          <h2 className="mt-5 display text-[24px] lg:text-[30px] leading-[1.12] text-ink max-w-[22ch]">
            Ready to Publish? Let's Give Your Book <em className="italic text-navy">a Voice.</em>
          </h2>
          <p className="mt-5 font-serif text-[17.5px] leading-[1.7] text-ink/85 max-w-[54ch]">
            Tell us where your manuscript stands, and let's discuss the narration, production, and
            distribution options that make sense for your book.
          </p>
          <div className="mt-7">
            <Button asChild className="btn-primary">
              <a href="tel:+19362233644">Call · +1 (936) 223-3644</a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <LeadForm idPrefix="final" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function SocialIcon({
  label,
  path,
  color,
  href,
}: {
  label: string;
  path: React.ReactNode;
  color: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full ring-1 ring-white/20 shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
      style={{ backgroundColor: color }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff" aria-hidden="true">
        {path}
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#F1E9D6] font-sans">
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,15,12,0.93), rgba(14,12,10,0.88) 55%, rgba(9,8,7,0.95))",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center rounded-md bg-paper px-3.5 py-2">
            <img src={LOGO_URL} alt="Collingwood Press" className="h-8 w-auto object-contain" />
          </div>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#F1E9D6]/75 max-w-[30ch]">
            Your trusted partner in bringing books to life. From manuscript to marketplace.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon
              label="Facebook"
              href="https://www.facebook.com/theCollingwoodpress"
              color="#1877F2"
              path={
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.5-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V13h2.7v8h3.2z" />
              }
            />
            <SocialIcon
              label="Instagram"
              href="https://www.instagram.com/thecollingwoodpress/"
              color="#E1306C"
              path={
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.5.4 1.1.4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.5.2-1.1.4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3c-3.3 0-6.5 2.7-6.5 6.5s2.7 6.5 6.5 6.5 6.5-2.7 6.5-6.5-2.9-6.5-6.5-6.5zm0 10.7c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.8-11c-.9 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c0-.9-.7-1.5-1.5-1.5z" />
              }
            />
            <SocialIcon
              label="LinkedIn"
              href="https://www.linkedin.com/company/the-collingwood-press/"
              color="#0A66C2"
              path={
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3V8.98zM9.5 8.98h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21h-4V8.98z" />
              }
            />
            <SocialIcon
              label="X"
              href="https://x.com/CollingwoodUS"
              color="#1A1A1A"
              path={
                <path d="M18.9 3H22l-7.4 8.5L23.2 21h-6.7l-5.3-6.5L5.2 21H2.1l7.9-9.1L1.5 3h6.9l4.8 6L18.9 3zm-2.4 16h1.9L7.6 5H5.5l11 14z" />
              }
            />
            <SocialIcon
              label="TikTok"
              href="https://www.tiktok.com/@thecollingwoodpress"
              color="#1F1F1F"
              path={
                <path d="M19.6 6.7a5.4 5.4 0 01-3.1-1V15c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v3a3 3 0 00-.9-.1 3 3 0 103 3V2h3a5.4 5.4 0 003.1 5v-.3z" />
              }
            />
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">
            Services
          </h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            {[
              "Audiobook Production",
              "Narration & Casting",
              "Editing & Proofing",
              "Mastering",
              "Distribution",
              "Marketing",
            ].map((l) => (
              <li key={l}>
                <a href="#studio" className="transition-colors hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">
            Company
          </h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            <li>
              <a href="#reviews" className="transition-colors hover:text-gold">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-gold">
                FAQ
              </a>
            </li>
            <li>
              <a href="#signup" className="transition-colors hover:text-gold">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            <li>
              <a
                href="mailto:info@thecollingwoodpress.com"
                className="transition-colors hover:text-gold"
              >
                info@thecollingwoodpress.com
              </a>
            </li>
            <li>
              <a href="tel:+19362233644" className="transition-colors hover:text-gold">
                +1 (936) 223-3644
              </a>
            </li>
            <li className="text-[#F1E9D6]/60 pt-1">
              6777 Camp Bowie Blvd Ste. 125
              <br />
              Fort Worth, TX 76116
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-md bg-paper px-3 py-2">
              <a href="https://www.bbb.org/us/tx/livingston/profile/book-publishers/collingwood-press-0825-1000231047/#sealclick" target="_blank">
                <img
                  src={BBAImage}
                  alt="BBB Accredited Business"
                  className="h-7 w-auto"
                  loading="lazy"
                />
              </a>

            </div>
            <div className="inline-flex items-center rounded-md bg-paper px-3 py-2">
              <a href="https://www.ibpa-online.org/" target="_blank">
                <img src={ibpaBadge} alt="IBPA Proud Member" className="h-7 w-auto" loading="lazy" />
              </a>

            </div>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#F1E9D6]/25 bg-white/5 px-2.5 py-1.5">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3" />
                ))}
              </div>
              <div className="text-[11px] text-[#F1E9D6]/90">4.9</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#F1E9D6]/15">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4 text-[14px] text-[#F1E9D6]/60">
          <p>
            © 2026 Collingwood Press (Subsidiary of Hambone Publishers LLC). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.thecollingwoodpress.com/privacy-policy/"
              className="transition-colors hover:text-gold"
            >
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </a>
            <a
              href="https://www.thecollingwoodpress.com/privacy-choices/"
              className="transition-colors hover:text-gold"
            >
              Your Privacy Choices
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}