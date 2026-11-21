
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Traditional Bridal Elegance",
    category: "Bridal",
    image: "/portifolo1.png",
  },
  {
    title: "Classic Bridal Glam",
    category: "Bridal",
    image: "/portifolo2.png",
  },
  {
    title: "Red Bridal Look",
    category: "Bridal",
    image: "/portifolo3.png",
  },
  {
    title: "Bridal Makeup Close-up",
    category: "Bridal",
    image: "/portifolo4.png",
  },
  {
    title: "Golden Bridal Portrait",
    category: "Bridal",
    image: "/portifolo5.png",
  },
  {
    title: "Outdoor Bridal Elegance",
    category: "Bridal",
    image: "/portifolo6.png",
  },
  {
    title: "Soft Glam Bridal Look",
    category: "Bridal",
    image: "/portifolo7.png",
  },
  {
    title: "Yellow Bridal Look",
    category: "Bridal",
    image: "/portifolo8.png",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">

      <header className="portfolio-header">
        <Link href="/" className="portfolio-logo">
          ALLURE <span>BEAUTY & STUDIO</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/prtifolo">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      {/* PORTFOLIO BANNER */}
      <section className="portfolio-hero" style={{ position: "relative" }}>
        <Image
          className="portfolio-hero-image"
          src="/images/portfolio-banner-photo.png"
          alt="Portfolio banner with beauty products and a Home to Portfolio breadcrumb"
          fill
          sizes="100vw"
          loading="eager"
        />
        <h1 className="portfolio-visually-hidden">Our Portfolio</h1>
      </section>

      <section className="portfolio-film" aria-labelledby="portfolio-film-title">
        <div className="portfolio-film-copy">
          <p className="portfolio-eyebrow">THE ALLURE EXPERIENCE</p>
          <h2 id="portfolio-film-title">Beauty in Motion</h2>
          <p>
            Every look is shaped with care, creativity and attention to detail.
            Explore the artistry behind the Allure experience.
          </p>
        </div>

        <figure
          className="portfolio-film-media"
          style={{ position: "relative" }}
        >
          <Image
            src="/images/portfolio-banner.gif"
            alt="Animated golden Allure beauty studio scene"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            unoptimized
          />
          <figcaption className="portfolio-film-caption">
            <span>ALLURE BEAUTY & STUDIO</span>
            <strong>Artistry, brought to life</strong>
          </figcaption>
        </figure>
      </section>

      {/* INTRODUCTION */}
      <section className="portfolio-intro">
        <p className="portfolio-eyebrow">OUR SIGNATURE WORK</p>
        <h2>Where Beauty Meets Artistry</h2>
        <p>
          Discover the creativity, passion and expertise behind
          every look at ALLURE BEAUTY & STUDIO. From glamorous
          bridal transformations to elegant everyday beauty,
          every detail is designed to make you feel extraordinary.
        </p>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="portfolio-gallery" id="portfolio-gallery">
        <div className="portfolio-section-heading">
          <p className="portfolio-eyebrow">A GLIMPSE OF ALLURE</p>
          <h2>Our Beauty Collection</h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-card" key={item.title}>
              <div className="portfolio-image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 30vw"
                />
                <div className="portfolio-card-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="portfolio-number">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="portfolio-offer">
        <p className="portfolio-eyebrow">A LITTLE EXTRA LUXURY</p>
        <h2>Book Your Appointment Now</h2>
        <h3>Enjoy 25% OFF</h3>
        <p>
          Enjoy 25% off selected professional makeup services.
          Let our beauty experts create your perfect look.
        </p>
        <a
          href="https://wa.me/923164416347?text=Hello%20Allure%2C%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="portfolio-gold-button"
        >
          BOOK AN APPOINTMENT
        </a>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div className="portfolio-footer-grid">
          <div>
            <h2>ALLURE</h2>
            <p className="portfolio-footer-subtitle">
              BEAUTY & STUDIO
            </p>
            <p>
              Discover your beauty. Celebrate your individuality.
              Experience the art of luxury beauty.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/prtifolo">Portfolio</Link>
            <Link href="/services">Services</Link>
            <Link href="/blogs">Blogs</Link>
          </div>

          <div>
            <h3>Our Services</h3>
            <Link href="/services">Body Treatments</Link>
            <Link href="/services">Facial Treatments</Link>
            <Link href="/services">Hair Treatments</Link>
            <Link href="/services">Makeup Course</Link>
            <Link href="/services">Makeup Services</Link>
          </div>

          <div>
            <h3>Information</h3>
            <p>Call: +92 328 642 7572</p>
            <a
              href="https://wa.me/923164416347"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 03164416347
            </a>
            <p>Email and salon address: Add your confirmed ALLURE details here.</p>
          </div>
        </div>

        <div className="portfolio-copyright">
          © 2026 ALLURE BEAUTY & STUDIO. All rights reserved.
          <span>Privacy Policy | Refund and Returns Policy</span>
        </div>
      </footer>

    </main>
  );
}
