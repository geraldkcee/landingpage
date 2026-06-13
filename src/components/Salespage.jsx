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
    setFormStatus("Sending message...");

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
      setFormStatus("Message sent! I’ll reply soon.");
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

  const services = [
    {
      title: "React Landing Pages",
      desc: "High-performance, responsive sites designed to convert visitors into leads.",
    },
    {
      title: "Sales Funnels",
      desc: "Automated customer journeys with strong messaging, fast loading, and data-driven design.",
    },
    {
      title: "Custom Web Apps",
      desc: "Scalable apps built to streamline operations, generate more revenue, and delight users.",
    },
  ];

  const benefits = [
    {
      title: "Conversion-first design",
      desc: "Every page is optimized to drive action, reduce friction, and increase sales.",
    },
    {
      title: "Fast launch",
      desc: "Get a polished website quickly with a smooth development process and clear milestones.",
    },
    {
      title: "Reliable support",
      desc: "Ongoing updates, performance monitoring, and optimization after launch.",
    },
  ];

  const testimonials = [
    {
      name: "Dominic",
      role: "Founder, ABEC",
      quote:
        "The new site doubled our lead flow in 30 days and finally captured our brand consistently.",
    },
    {
      name: "Mary",
      role: "Marketing Director, brother's food",
      quote:
        "Fast communication, excellent execution, and a landing page that converts better than our old one.",
    },
    {
      name: "Felix",
      role: "CEO, Safer Road int'l",
      quote:
        "This project exceeded expectations — smooth UI, clear messaging, and a strong sales funnel.",
    },
  ];

  const plans = [
    {
      title: "Launch",
      price: "$500",
      features: [
        "Landing page design",
        "Lead capture form",
        "Responsive layout",
      ],
      accent: false,
    },
    {
      title: "Growth",
      price: "$800",
      features: ["Custom funnel", "Analytics setup"],
      accent: true,
    },
    {
      title: "Scale",
      price: "$1300",
      features: [
        "Web app features",
        "Marketing automation",
        "Priority support",
      ],
      accent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-600">
              KelechiHQ services
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#why" className="text-gray-700 hover:text-blue-600">
                Why Work With Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Hire Me
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
                aria-label="Open mobile menu"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <a href="#services" className="block px-4 py-3 hover:bg-gray-100">
              Services
            </a>
            <a href="#why" className="block px-4 py-3 hover:bg-gray-100">
              Why Work With Us
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-blue-600 font-semibold hover:bg-gray-100"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      <header className="pt-32 pb-16 bg-linear-to-br from-blue-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-4">
            Convert more visitors with a polished web experience
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build a revenue-driving website that captures leads and closes
            sales.
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 mb-10">
            High-converting React landing pages, funnels, and web apps designed
            for service brands, agencies, and fast-growth businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-blue-600 text-blue-600 bg-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-50 transition"
            >
              See examples
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600">+60%</p>
              <p className="mt-3 text-sm text-gray-600">
                Average conversion lift for clients.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600">24h</p>
              <p className="mt-3 text-sm text-gray-600">
                Fast response to every project inquiry.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="mt-3 text-sm text-gray-600">
                SEO-friendly and mobile-first builds.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="why" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-4">
              Why work with us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Strategic websites built to attract, engage, and convert.
            </h2>
            <p className="text-gray-600 max-w-2xl leading-7 mb-8">
              Your web presence should do more than look good. It should clearly
              communicate your offers, build trust, and guide people to take the
              next step.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-blue-600 text-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Fast, profitable outcomes
            </h3>
            <p className="text-gray-100 leading-7 mb-6">
              Work with a team focused on clarity, speed, and measurable
              results. Every page is optimized for your ideal audience and your
              next sale.
            </p>
            <ul className="space-y-3 text-gray-100">
              <li className="flex gap-3">
                <span className="text-blue-200">•</span>
                <span>Conversion-focused copy and layout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-200">•</span>
                <span>Mobile-first performance and speed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-200">•</span>
                <span>Secure build process and easy handoff</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Services that move prospects closer to purchase.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Clients love the results.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="text-gray-600 leading-7 mb-6">“{item.quote}”</p>
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pricing"
        className="py-20 px-4 bg-linear-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
            Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Choose the right option for your business.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl p-8 shadow-sm border ${plan.accent ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-900"}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4">
                {plan.title}
              </p>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul
                className={`space-y-3 mb-8 text-sm leading-6 ${plan.accent ? "text-blue-100" : "text-gray-600"}`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`text-xl ${plan.accent ? "text-blue-200" : "text-blue-600"}`}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`w-full rounded-full px-6 py-3 font-semibold transition ${plan.accent ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                Select {plan.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200 font-semibold mb-3">
            Start your project
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let’s build a high-converting website together.
          </h2>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto leading-7">
            Share your goals and I’ll send a tailored plan, timeline, and
            pricing for the best path forward.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-2xl text-gray-900">
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
              className="col-span-2 w-full rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              name="sender_email"
              placeholder="Your Email"
              required
              className="col-span-2 w-full rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="leavemessage"
              rows="4"
              placeholder="Project details or goals"
              required
              className="col-span-2 w-full rounded-2xl border border-gray-200 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="col-span-2 inline-flex justify-center items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Request a Free Strategy Call"}
            </button>
            {formStatus && (
              <p className="col-span-2 text-center text-sm text-gray-600 mt-2">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 KelechiHQ. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SalesPage;
