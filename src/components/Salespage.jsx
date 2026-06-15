import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const SalesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending your inquiry...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus(
        "Email service not configured. Please add EmailJS keys to your .env file and restart the dev server.",
      );
      setIsSubmitting(false);
      return;
    }

    if (!formRef.current) {
      setFormStatus("Form is unavailable. Refresh the page and try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current);
      setFormStatus("Inquiry sent! We’ll contact you shortly.");
      e.target.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      const message =
        err?.text || err?.statusText || err?.message || "Something went wrong.";
      setFormStatus(`Oops! ${message} Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredHomes = [
    {
      name: "Parkside Villa",
      location: "Greenwood Estate, Austin TX",
      price: "$1,250,000",
      details: "5 bed · 4 bath · 3,450 sq ft",
      highlight: "Lake-facing retreat with modern open-plan design.",
    },
    {
      name: "Cityview Penthouse",
      location: "Downtown Miami, FL",
      price: "$2,050,000",
      details: "4 bed · 3 bath · 2,100 sq ft",
      highlight: "Skyline views, private terrace, luxury finishes.",
    },
    {
      name: "Modern Farmhouse",
      location: "Willow Creek, Nashville TN",
      price: "$870,000",
      details: "4 bed · 3 bath · 2,800 sq ft",
      highlight: "Bright interiors, acreage, and future rental potential.",
    },
  ];

  const processSteps = [
    {
      title: "Discover your goals",
      description:
        "We listen to your vision, budget, and must-haves before recommending homes.",
    },
    {
      title: "Tour the best options",
      description:
        "Schedule curated showings for properties that match your lifestyle.",
    },
    {
      title: "Negotiate with confidence",
      description:
        "Our team supports every offer, inspection, and closing detail.",
    },
    {
      title: "Move in smoothly",
      description:
        "We stay in touch until your keys are in hand and you feel at home.",
    },
  ];

  const agents = [
    {
      name: "Ava Richardson",
      role: "Lead Buyer Agent",
      specialties: "Luxury homes, investment properties, relocation support",
    },
    {
      name: "Noah Patel",
      role: "Listing Specialist",
      specialties: "Market positioning, staging strategy, fast sales",
    },
    {
      name: "Sophia Kim",
      role: "Neighborhood Expert",
      specialties: "School districts, local amenities, community insights",
    },
  ];

  const testimonials = [
    {
      name: "Jordan M.",
      role: "First-time buyer",
      quote:
        "EstateVista helped us find our perfect home in just two weeks. The process felt seamless from day one.",
    },
    {
      name: "Camila R.",
      role: "Seller",
      quote:
        "Our house sold above asking price, and the agent managed every detail with care.",
    },
    {
      name: "Ethan S.",
      role: "Investor",
      quote:
        "We closed on a high-return rental property quickly thanks to their market expertise.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="fixed w-full bg-white/95 backdrop-blur shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="space-y-1">
              <p className="text-2xl font-extrabold text-slate-900">
                EstateVista
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Real estate made simple
              </p>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
              <a href="#listings" className="hover:text-slate-900 transition">
                Listings
              </a>
              <a href="#process" className="hover:text-slate-900 transition">
                Process
              </a>
              <a href="#agents" className="hover:text-slate-900 transition">
                Agents
              </a>
              <a
                href="#contact"
                className="rounded-full bg-slate-900 text-white px-5 py-2 hover:bg-slate-800 transition"
              >
                Get Started
              </a>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-700 focus:outline-none"
              aria-label="Open mobile menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <a
              href="#listings"
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
            >
              Listings
            </a>
            <a
              href="#process"
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
            >
              Process
            </a>
            <a
              href="#agents"
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
            >
              Agents
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-slate-900 font-semibold hover:bg-slate-50"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      <header className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%)] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-4">
                Find your next home faster
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-tight mb-6">
                The easiest way to buy, sell, or invest in real estate.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 mb-10">
                Discover curated homes, expert guidance, and fast closing
                support from a real estate team focused on your goals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
                <a
                  href="#listings"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-200 hover:bg-slate-800 transition"
                >
                  Explore Listings
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-100 transition"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>

            <div className="rounded-4xl bg-white p-8 shadow-2xl shadow-slate-200">
              <div className="space-y-6">
                <div className="rounded-3xl overflow-hidden bg-slate-950 text-white p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
                    Featured neighborhood
                  </p>
                  <h2 className="mt-4 text-3xl font-bold">Maple Ridge</h2>
                  <p className="mt-3 text-slate-300 leading-7">
                    Spacious family homes, top schools, and easy commute access.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-100 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">
                      Closing speed
                    </p>
                    <p className="text-3xl font-semibold text-slate-900">
                      30 days
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-3">
                      Client satisfaction
                    </p>
                    <p className="text-3xl font-semibold text-slate-900">98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="listings" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
              Featured homes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              Browse curated properties in top markets.
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Modern homes for families, investors, and buyers who want a
              seamless experience from search to close.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredHomes.map((home) => (
              <article
                key={home.name}
                className="rounded-4xl overflow-hidden bg-white shadow-lg border border-slate-200"
              >
                <div className="h-52 bg-slate-200" aria-hidden="true" />
                <div className="p-8">
                  <p className="text-sm text-slate-500 uppercase tracking-[0.35em] mb-3">
                    {home.location}
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-3">
                    {home.name}
                  </h3>
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    {home.price}
                  </p>
                  <p className="text-slate-600 mb-4">{home.details}</p>
                  <p className="text-slate-500 leading-7">{home.highlight}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
              Our process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              A clear path from search to settlement.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white text-lg font-bold mb-5">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-7">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
              Meet our team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              Experienced agents who know the market.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-4xl bg-white p-8 shadow-lg border border-slate-200"
              >
                <div className="h-24 w-24 rounded-full bg-slate-100 mb-6 flex items-center justify-center text-2xl font-semibold text-slate-600">
                  {agent.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold text-slate-950 mb-2">
                  {agent.name}
                </h3>
                <p className="text-slate-500 mb-4">{agent.role}</p>
                <p className="text-slate-600 leading-7">{agent.specialties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600 font-semibold mb-3">
              Success stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              What our clients say.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-slate-600 leading-7 mb-6">“{item.quote}”</p>
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold mb-3">
            Talk to an agent
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get a personal real estate plan.
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-7">
            Share your timeline, location, and home goals so we can match you
            with the perfect property or buyer strategy.
          </p>
        </div>
        <div className="rounded-4xl bg-white p-8 shadow-2xl text-slate-900">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid gap-6 md:grid-cols-2"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="col-span-2 w-full rounded-3xl border border-slate-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <input
              type="email"
              name="sender_email"
              placeholder="Your Email"
              required
              className="col-span-2 w-full rounded-3xl border border-slate-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <input
              type="text"
              name="property_type"
              placeholder="Buying, selling, or investing?"
              className="col-span-2 w-full rounded-3xl border border-slate-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what kind of property you want or your selling timeline"
              required
              className="col-span-2 w-full rounded-3xl border border-slate-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="col-span-2 inline-flex justify-center items-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Request a Free Consultation"}
            </button>
            {formStatus && (
              <p className="col-span-2 text-center text-sm text-slate-600 mt-2">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center">
        <p>© 2026 EstateVista. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SalesPage;
