"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import Tilt from "../components/Tilt";
import Floating3D from "../components/Floating3D";
import ScrollDepth from "../components/ScrollDepth";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "/prtifolo" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "923164416347";
const SALON_ADDRESS =
  "House 60, B1 MM Alam Rd, Block B 1 Gulberg III, Lahore, Punjab 44000";
const SALON_MAP_URL =
  "https://www.google.com/maps/place/CANVAS+Salon+Lahore+%7C+Best+Hair+and+Bridal+Parlour+Gulberg/@31.518662,74.353041,17z/data=!3m1!4b1!4m6!3m5!1s0x391905003ca31ab5:0x60756f49e904d4be!8m2!3d31.518662!4d74.353041!16s%2Fg%2F11vwy24k0r?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

const aboutImages = [
  { src: "/images/bridal.png", alt: "Bridal makeup" },
  { src: "/images/facial.png", alt: "Facial treatment" },
  { src: "/images/hair.png", alt: "Hair styling" },
  { src: "/images/partymakeup-clean.png", alt: "Party makeup" },
];

const services = [
  {
    title: "Hair Treatments",
    description:
      "Transform your hair with expert care, beautiful styling and nourishing treatments.",
    image: "/images/hair.png",
  },
  {
    title: "Facial Treatments",
    description:
      "Refresh your skin with indulgent facials designed to reveal your natural glow.",
    image: "/images/facial.png",
  },
  {
    title: "Nail Treatments",
    description:
      "Enjoy a polished finish with relaxing nail care for every occasion.",
    image: "/images/nail.png",
  },
  {
    title: "Bridal Makeup",
    description:
      "Enjoy a polished, long-lasting bridal look tailored to your features and style.",
    image: "/images/bridal-makeup.png",
  },
  {
    title: "Party Makeup",
    description:
      "Get a glamorous, camera-ready look for parties and special occasions.",
    image: "/images/party-makeup.png",
  },
  {
    title: "Makeup Services",
    description:
      "From timeless bridal elegance to glamorous party looks, let your beauty shine.",
    image: "/images/partymakeup-clean.png",
  },
];

const portfolio = [
  {
    title: "Bridal Glam",
    category: "Bridal",
    image: "/images/bridal.png",
  },
  {
    title: "Party Makeup",
    category: "Makeup",
    image: "/images/partymakeup-clean.png",
  },
  {
    title: "Skin Glow",
    category: "Skin",
    image: "/images/facial.png",
  },
  {
    title: "Hair Styling",
    category: "Hair",
    image: "/images/hair.png",
  },
  {
    title: "Nail Art",
    category: "Nails",
    image: "/images/nail.png",
  },
];

const categories = ["All", "Bridal", "Makeup", "Hair", "Skin", "Nails"];

const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Contact our team with your event details and preferred services. We will help you find the perfect appointment.",
  },
  {
    number: "02",
    title: "Personal Consultation",
    description:
      "Share your ideas, inspiration pictures and preferences so we can understand your desired look.",
  },
  {
    number: "03",
    title: "Plan Your Look",
    description:
      "Our beauty professionals will guide you through the options and tailor your look to your style.",
  },
  {
    number: "04",
    title: "Confirm Your Booking",
    description:
      "Finalize your selected services, appointment date and any applicable deposit.",
  },
  {
    number: "05",
    title: "Enjoy Your Allure Moment",
    description:
      "Relax and let our team bring your beauty vision to life with care and attention to detail.",
  },
];

const faqs = [
  {
    question: "Why does bridal makeup cost more?",
    answer:
      "Bridal makeup often involves detailed consultations, customized looks, premium products and additional preparation time. The final price depends on the selected package and services.",
  },
  {
    question: "How should I prepare for bridal makeup?",
    answer:
      "Bring your outfit details and inspiration photos to your consultation. Our team can guide you on skincare preparation and appointment timing.",
  },
  {
    question: "Can I book a makeup trial?",
    answer:
      "Yes. Contact our team to ask about trial appointments and available packages.",
  },
  {
    question: "How can I choose the right facial treatment?",
    answer:
      "Our beauty professionals can discuss your skincare goals and help you select a suitable treatment.",
  },
  {
    question: "Do you offer student discounts?",
    answer:
      "Selected student offers may be available. Contact us with your preferred service to confirm eligibility and current offers.",
  },
  {
    question: "How can I change my appointment?",
    answer:
      "Please contact the salon as early as possible so our team can help with available rescheduling options.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPortfolio = portfolio.filter(
    (item) =>
      activeCategory === "All" || item.category === activeCategory
  );
  const revealProps = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 },
  };
  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) =>
      String(formData.get(name) ?? "").trim();
    const details = [
      "Hello Allure Beauty & Studio, I would like to make an inquiry.",
      `Name: ${getValue("name")}`,
      `WhatsApp: ${getValue("phone")}`,
      `Service: ${getValue("service")}`,
    ];
    const preferredDate = getValue("preferredDate");
    const message = getValue("message");

    if (preferredDate) {
      details.push(`Preferred date: ${preferredDate}`);
    }

    if (message) {
      details.push(`Details: ${message}`);
    }

    window.location.assign(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(details.join("\n"))}`
    );
  };

  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand">
          ALLURE
          <span>BEAUTY & STUDIO</span>
        </a>

        <div
          id="primary-navigation"
          className={`navlinks ${menuOpen ? "open" : ""}`}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-book" href="#contact">
          BOOK APPOINTMENT
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <ScrollDepth />
      <section className="hero" id="home">
        <img
          src="/images/allure-studio-home-banner.gif"
          alt="Animated Allure Beauty & Studio banner"
          className="hero-video"
          loading="eager"
        />
        <div className="hero-overlay" />
        <Floating3D />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="eyebrow">WELCOME TO ALLURE BEAUTY & STUDIO</p>
          <h1>
            WHERE BEAUTY
            <br />
            MEETS <em>ELEGANCE.</em>
          </h1>
          <p>Discover your beauty. Experience luxury. Feel extraordinary.</p>
          <a href="/services" className="gold-button">
            EXPLORE OUR SERVICES <ArrowRight size={16} />
          </a>
          <div className="hero-tagline">YOUR BEAUTY, OUR PASSION.</div>
        </motion.div>
        <span className="scroll-text">SCROLL TO DISCOVER ↓</span>
      </section>

      <section className="about section" id="about">
        <div className="about-images">
          {aboutImages.map((image, index) => (
            <div
              key={image.src}
              className={`about-photo photo-${index + 1}`}
              role="img"
              aria-label={image.alt}
              style={{ backgroundImage: `url(${image.src})` }}
            />
          ))}
        </div>

        <div className="about-content">
          <p className="eyebrow">WHERE BEAUTY FINDS ITS BLISS</p>
          <h2>
            Allure Beauty
            <br />
            <em>& Studio</em>
          </h2>
          <p className="body-copy">
            Welcome to Allure Beauty & Studio, where beauty, creativity and
            personal care come together. Our passion is to help you feel
            confident, radiant and extraordinary. From glamorous makeup to
            rejuvenating skin treatments and beautiful hair styling, discover a
            beauty experience designed around you.
          </p>
          <a href="#contact" className="dark-button">
            GET APPOINTMENT <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="lux-section services" id="services">
        <div className="section-intro">
          <span className="eyebrow">THE ALLURE EXPERIENCE</span>
          <h2>Services For Every Occasion</h2>
          <p>
            Discover the art of beauty with our luxurious salon services,
            thoughtfully designed to pamper, rejuvenate and transform.
          </p>
        </div>

        <motion.div {...revealProps} className="service-grid">
          {services.map((service, index) => (
            <Tilt key={service.title} maxTilt={9}>
              <article
                className="service-card"
                data-depth={index % 2 === 0 ? "26" : "40"}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="/services#services">Explore Service ↗</a>
                </div>
              </article>
            </Tilt>
          ))}
        </motion.div>
      </section>

      <section className="lux-section how-section" id="how-it-works">
        <div className="section-intro">
          <span className="eyebrow">YOUR BEAUTY JOURNEY</span>
          <h2>How It Works</h2>
          <p>Five simple steps to your perfect beauty experience.</p>
        </div>

        <motion.div {...revealProps} className="steps-grid">
          {steps.map((step, index) => (
            <Tilt key={step.number} maxTilt={12} scale={1.03}>
              <article
                className="step-card"
                data-depth={String(14 + index * 8)}
              >
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Tilt>
          ))}
        </motion.div>
      </section>

      <motion.section
        {...revealProps}
        className="offer-section"
        id="offers"
      >
        <div>
          <span className="eyebrow">A LITTLE EXTRA ALLURE</span>
          <h2>Special Offers for Your Allure Moment</h2>
          <p>
            Treat yourself to professional beauty services and enjoy our
            current offer on selected makeup experiences.
          </p>
          <a href="#contact" className="gold-button">
            Reserve Your Spot
          </a>
        </div>
        <motion.div
          {...revealProps}
          className="offer-highlight"
          whileHover={{ scale: 1.02 }}
        >
          <span>EXCLUSIVE OFFER</span>
          <strong>25%</strong>
          <h3>OFF SELECTED MAKEUP SERVICES</h3>
          <p>Ask our team about current offer availability and terms.</p>
        </motion.div>
        <div className="offer-gallery">
          {portfolio.slice(0, 4).map((item) => (
            <figure
              className="offer-image-card"
              key={item.title}
              style={{ position: "relative" }}
            >
              <Image
                className="offer-image"
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 680px) 50vw, 25vw"
              />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      <section className="lux-section reviews-section" id="reviews">
        <div className="section-intro">
          <span className="eyebrow">LOVE NOTES</span>
          <h2>What Our Customers Say</h2>
          <p>We value every Allure client&apos;s experience.</p>
        </div>

        <div className="review-upcoming">
          <figure className="customer-review">
            <blockquote>
              “The services are amazing, and all the staff are so cooperative
              and friendly.”
            </blockquote>
            <figcaption>Zaima Sohail</figcaption>
          </figure>
          <a
            className="gold-button"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Allure, I would like to share feedback about my visit.")}`}
            target="_blank"
            rel="noreferrer"
          >
            Share Your Feedback
          </a>
        </div>
      </section>

      <motion.section
        {...revealProps}
        className="student-section"
        id="student-deals"
      >
        <div>
          <span className="eyebrow">BEAUTY MEETS OPPORTUNITY</span>
          <h2>Our Student Deals</h2>
          <p>
            Beauty students deserve a little extra sparkle. Ask about exclusive
            student offers on selected services, including nail treatments and
            beauty essentials.
          </p>
          <a href="#contact" className="gold-button">
            Ask About Student Deals
          </a>
        </div>
        <motion.div
          {...revealProps}
          className="student-decoration"
          whileHover={{ scale: 1.02 }}
        >
          ALLURE
          <span>STUDENT PRIVILEGES</span>
        </motion.div>
      </motion.section>

      <section className="lux-section faq-section" id="faqs">
        <div className="section-intro">
          <span className="eyebrow">HERE TO HELP</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before your beauty appointment.</p>
        </div>

        <motion.div {...revealProps} className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </motion.div>
      </section>

      <section className="portfolio section" id="portfolio">
        <p className="eyebrow">OUR BEAUTY COLLECTION</p>
        <h2 className="section-heading">
          The Allure <em>Portfolio</em>
        </h2>
        <p className="section-description">
          A glimpse of beauty, creativity and artistry.
        </p>

        <div className="filters" aria-label="Filter portfolio">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category ? "filter active" : "filter"
              }
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <motion.article
              layout
              key={item.title}
              className="portfolio-item"
              style={{ perspective: 900 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="portfolio-caption">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <div className="portfolio-actions">
          <a href="#contact" className="dark-button">
            BOOK YOUR BEAUTY SESSION <ArrowRight size={17} />
          </a>
          <a href="/prtifolo" className="gold-button">
            VIEW FULL PORTFOLIO <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow">THE ALLURE EXPERIENCE</p>
        <h2>
          Feel Beautiful.
          <br />
          <em>Feel Extraordinary.</em>
        </h2>
        <p>Your Beauty, Our Passion.</p>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">YOUR BEAUTY JOURNEY STARTS HERE</p>
        <h2 className="section-heading">
          Let&apos;s Make You <em>Glow.</em>
        </h2>
        <p>
          Tell us what you are looking for and our team will help you plan your
          beauty appointment.
        </p>
        <div className="inquiry-panel">
          <div className="inquiry-copy">
            <span className="eyebrow">WE&apos;RE HERE TO HELP</span>
            <h3>Send us an inquiry</h3>
            <p>
              Share a few details about your appointment. We&apos;ll open
              WhatsApp with your message ready to send.
            </p>
            <a
              className="inquiry-whatsapp"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp: 03164416347
            </a>
            <a
              className="inquiry-location"
              href={SALON_MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={18} aria-hidden="true" />
              <span>{SALON_ADDRESS}</span>
            </a>
          </div>

          <form className="inquiry-form" onSubmit={handleInquirySubmit}>
            <label>
              <span>Your name</span>
              <input
                autoComplete="name"
                name="name"
                required
              />
            </label>

            <label>
              <span>Your phone / WhatsApp</span>
              <input
                autoComplete="tel"
                name="phone"
                type="tel"
                required
              />
            </label>

            <label>
              <span>Service</span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Choose a service
                </option>
                <option>Bridal Makeup</option>
                <option>Party Makeup</option>
                <option>Hair Treatments</option>
                <option>Facial Treatments</option>
                <option>Nail Treatments</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              <span>Preferred date (optional)</span>
              <input name="preferredDate" type="date" />
            </label>

            <label className="inquiry-field-message">
              <span>How can we help? (optional)</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your event or preferred look."
              />
            </label>

            <button type="submit" className="gold-button">
              <MessageCircle size={17} />
              SEND INQUIRY ON WHATSAPP
            </button>
            <p className="inquiry-note">
              Your details are shared with the salon through WhatsApp and are
              not stored on this website.
            </p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <h2>ALLURE</h2>
        <p>BEAUTY & STUDIO</p>
        <p className="footer-tagline">Your Beauty, Our Passion.</p>
        <div className="social-links">
          <a href="#contact" aria-label="Instagram">
            <Camera />
          </a>
        </div>
        <small>© 2026 Allure Beauty & Studio. All rights reserved.</small>
      </footer>
    </main>
  );
}
