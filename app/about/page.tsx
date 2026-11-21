
import Link from "next/link";

const skills = [
  { name: "MAKEUP", value: 100 },
  { name: "HAIRSTYLES", value: 95 },
  { name: "HAIRCUT", value: 98 },
  { name: "ACRYLIC NAILS", value: 92 },
  { name: "MANICURE AND PEDICURE", value: 90 },
  { name: "FACIAL TREATMENTS", value: 100 },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HEADER */}
      <header className="about-header">
        <Link href="/" className="about-logo">
          ALLURE <span>BEAUTY & STUDIO</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/prtifolo">Portfolio</Link>
          <Link href="/#contact">Contact Us</Link>
        </nav>

        <Link href="/#contact" className="about-book">
          Book Appointment
        </Link>
      </header>

      {/* PAGE BANNER */}
      <section className="about-banner">
        <div>
          <span>GET TO KNOW US</span>
          <h1>About Us</h1>
          <p>
            <Link href="/">Home</Link> / About Us
          </p>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="about-intro">
        <div className="about-photo">
          <img
            src="/images/about-salon.png"
            alt="Luxury Allure Beauty Studio interior"
          />
          <div className="photo-caption">
            <span>THE ALLURE EXPERIENCE</span>
            <h3>Beauty. Confidence. Elegance.</h3>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">ALLURE BEAUTY & STUDIO</span>
          <h2>Enhance Your Natural Beauty</h2>

          <p>
            Welcome to ALLURE BEAUTY & STUDIO, where beauty meets
            excellence. We are a passionate team dedicated to
            delivering exceptional beauty services in a warm,
            welcoming and luxurious atmosphere.
          </p>

          <p>
            We believe beauty is more than appearance. It is about
            confidence, self-expression and feeling your very best.
            Our mission is to enhance your natural beauty while
            creating an experience that leaves you feeling empowered.
          </p>

          <p>
            Our vision is to create a peaceful beauty destination
            where you can step away from everyday stress and enjoy
            moments of relaxation, care and self-discovery.
          </p>

          <p>
            From beautiful hairstyles and professional makeup to
            rejuvenating facials, body treatments and nail services,
            our range of beauty experiences is designed around your
            individual style and preferences.
          </p>

          <p>
            We are committed to professional service, attention to
            detail and continuous learning. Every appointment is an
            opportunity to make you feel special, confident and radiant.
          </p>

          <p>
            Come and experience ALLURE. Your journey to radiant
            confidence starts here.
          </p>

          <Link href="/#contact" className="about-book about-cta">
            Discover Your Allure
          </Link>
        </div>
      </section>

      {/* BEAUTY PHILOSOPHY */}
      <section className="about-philosophy">
        <span className="eyebrow">OUR PROMISE</span>
        <h2>Where Beauty Meets Confidence</h2>
        <p>
          Every detail matters. Every client is unique. Our goal is
          to make every visit an experience worth remembering.
        </p>
      </section>

      {/* SKILLS */}
      <section className="about-skills">
        <div className="skills-heading">
          <span className="eyebrow">EXPERTISE & CREATIVITY</span>
          <h2>Check Out Our Skills</h2>
          <p>
            Our team is passionate about beauty, creativity and
            delivering services with care and precision.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>

              <div className="skill-track">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final">
        <span className="eyebrow">YOUR BEAUTY JOURNEY STARTS HERE</span>
        <h2>Discover the Allure Within You</h2>
        <p>
          Take a moment for yourself. Let us help you look and feel
          your absolute best.
        </p>
        <Link href="/#contact" className="about-book">
          Book Your Appointment
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="about-footer">
        <Link href="/" className="about-logo">
          ALLURE <span>BEAUTY & STUDIO</span>
        </Link>
        <p>Beauty is an art. Let us make you the masterpiece.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <small>© 2026 ALLURE BEAUTY & STUDIO. All rights reserved.</small>
      </footer>

    </main>
  );
}
