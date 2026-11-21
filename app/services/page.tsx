
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beauty Services | Allure Beauty & Studio",
  description:
    "Explore Allure Beauty & Studio's hair, skincare, makeup, nail and bridal services.",
};

const whatsappLink =
  "https://wa.me/923164416347?text=Hello%20Allure%20Beauty%20%26%20Studio%2C%20I%20would%20like%20to%20book%20an%20appointment.";

const services = [
  {
    title: "Body Treatments",
    description:
      "Unwind with soothing body care designed to help you relax and leave your skin feeling refreshed.",
    image: "/images/about-salon.png",
    number: "01",
  },
  {
    title: "Hair Treatments",
    description:
      "Refresh your style with nourishing care, polished finishes and expert styling tailored to your hair.",
    image: "/images/hair.png",
    number: "02",
  },
  {
    title: "Facial Treatments",
    description:
      "Choose a skin-focused facial to cleanse, replenish and bring out a healthy-looking glow.",
    image: "/images/facial.png",
    number: "03",
  },
  {
    title: "Makeup Services",
    description:
      "From soft, natural looks to statement glamour, our artists tailor the details to you.",
    image: "/images/party-makeup.png",
    number: "04",
  },
  {
    title: "Nail Treatments",
    description:
      "Treat your hands and feet to careful nail care and a polished finish for any occasion.",
    image: "/images/nail.png",
    number: "05",
  },
  {
    title: "Makeup Course",
    description:
      "Build your techniques and confidence with guided makeup lessons shaped around your goals.",
    image: "/images/makeup-course.png",
    number: "06",
  },
];

const bridalPackages = [
  {
    number: "01",
    title: "Pre-Wedding Photoshoot",
    description:
      "Plan a polished, camera-ready look for your pre-wedding photos and make the session feel like your own.",
    image: "/images/prewedding.png",
  },
  {
    number: "02",
    title: "The Engagement Day",
    description:
      "Choose an elegant look that complements your outfit and feels right for the start of your wedding celebrations.",
    image: "/images/engagement.png",
  },
  {
    number: "03",
    title: "The Grand Wedding Day",
    description:
      "Work with our team on a wedding-day look planned around your preferences, schedule and personal style.",
    image: "/images/wedding.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HEADER */}
      <header className="services-header">
        <Link href="/" className="services-logo">
          ALLURE
          <span>BEAUTY & STUDIO</span>
        </Link>

        <div className="services-contact-top">
          <a href="tel:+923286427572">+92 328 642 7572</a>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/prtifolo">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="services-book-button"
        >
          Book Appointment
        </a>
      </header>

      {/* PAGE BANNER */}
      <section className="services-banner">
        <div>
          <span>THE ART OF BEAUTY</span>
          <h1>Our Services</h1>
          <p>
            <Link href="/">Home</Link> / Services
          </p>
        </div>
      </section>

      {/* SERVICES COLLECTION */}
      <section className="services-collection" id="services">
        <div className="services-heading">
          <span className="services-eyebrow">DISCOVER ALLURE</span>
          <h2>Beauty Services, Made for You</h2>
          <p>
            Find thoughtful care for your hair, skin, nails and special
            occasions, with options shaped around your preferences.
          </p>
        </div>

        <div className="services-cards">
          {services.map((service) => (
            <article className="services-card" key={service.number}>
              <div className="services-image-wrap">
                <img src={service.image} alt={service.title} />
                <span>{service.number}</span>
              </div>

              <div className="services-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href={`${whatsappLink}%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROMOTION */}
      <section className="services-promotion">
        <div className="promotion-copy">
          <span>A LITTLE EXTRA ALLURE</span>
          <h2>Enjoy a Little More of What You Love</h2>
          <p>
            Ask our team about 25% off selected makeup services. We can
            confirm eligible looks, dates and offer details before you book.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="services-book-button"
          >
            Book An Appointment
          </a>
        </div>

        <div className="promotion-number">
          <span>SPECIAL OFFER</span>
          <strong>25%</strong>
          <h3>OFF SELECTED MAKEUP SERVICES</h3>
        </div>
      </section>

      {/* BRIDAL PACKAGES */}
      <section className="bridal-section">
        <div className="services-heading">
          <span className="services-eyebrow">YOUR MOST BEAUTIFUL MOMENTS</span>
          <h2>Wedding Looks for Every Chapter</h2>
          <p>
            From pre-wedding photos to your wedding day, plan a beauty
            experience that feels personal to you.
          </p>
        </div>

        <div className="bridal-list">
          {bridalPackages.map((item) => (
            <article className="bridal-card" key={item.number}>
              <div className="bridal-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="bridal-content">
                <span>{item.number} / BRIDAL EXPERIENCE</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={`${whatsappLink}%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire About This Package ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL BOOKING CTA */}
      <section className="services-final">
        <span>LET YOUR BEAUTY SHINE</span>
        <h2>Your Allure Moment Awaits</h2>
        <p>
          Have a question or want to plan your next beauty appointment?
          Our team would love to hear from you.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="services-book-button"
        >
          Chat With Us On WhatsApp
        </a>

        <p className="services-phone">
          Call us: <a href="tel:+923286427572">+92 328 642 7572</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="services-footer">
        <div className="services-footer-top">
          <div>
            <Link href="/" className="services-logo">
              ALLURE
              <span>BEAUTY & STUDIO</span>
            </Link>
            <p>Beauty is an art. Let us make you the masterpiece.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/prtifolo">Portfolio</Link>
          </div>

          <div>
            <h4>Our Services</h4>
            <a href="#services">Body Treatments</a>
            <a href="#services">Hair Treatments</a>
            <a href="#services">Facial Treatments</a>
            <a href="#services">Makeup Services</a>
            <a href="#services">Nail Treatments</a>
            <a href="#services">Makeup Course</a>
          </div>

          <div>
            <h4>Contact Information</h4>
            <a href="tel:+923286427572">+92 328 642 7572</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp: +92 316 4416347
            </a>
          </div>
        </div>

        <div className="services-footer-bottom">
          © 2026 ALLURE BEAUTY & STUDIO. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
