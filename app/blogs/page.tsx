
import Link from "next/link";

const articles = [
  {
    category: "Laser Hair Removal",
    title: "Can Laser Remove Hair Permanently? Complete Information",
    description: "Discover how laser hair removal works, how many sessions may be needed and what results you can realistically expect.",
    image: "/images/blog-laser.png",
    slug: "laser-hair-removal",
  },
  {
    category: "Hair Treatment",
    title: "What Is a Full Head Hair Colour? Complete Information",
    description: "Learn about full head hair colouring, the process, colour choices and how to care for coloured hair.",
    image: "/images/blog-haircolor.png",
    slug: "full-head-hair-colour",
  },
  {
    category: "Hair Treatment",
    title: "How Can I Choose Hair Colour? Complete Guide",
    description: "Explore how to choose hair colours that complement your style, preferences and desired look.",
    image: "/images/blog-haircolor.png",
    slug: "choose-hair-colour",
  },
  {
    category: "Hair Treatment",
    title: "Which Type of Hair Colour Is Best? Complete Guide",
    description: "Understand the differences between permanent, semi-permanent and other hair colour options.",
    image: "/images/blog-haircolor.png",
    slug: "best-type-hair-colour",
  },
  {
    category: "Hair Treatment",
    title: "How to Get Rid of Frizzy Hair: Simple Tips",
    description: "Explore simple hair-care habits and salon treatments that can help manage frizz and improve hair appearance.",
    image: "/images/blog-hair.png",
    slug: "frizzy-hair-tips",
  },
  {
    category: "Hair Treatment",
    title: "What Is a Keratin Treatment for Hair?",
    description: "Learn what keratin treatments involve, what they are designed to do and how to maintain treated hair.",
    image: "/images/blog-hair.png",
    slug: "keratin-hair-treatment",
  },
  {
    category: "Hair Treatment",
    title: "What Is a Hair Treatment at a Salon?",
    description: "A guide to common salon hair treatments and how to discuss your hair goals with a professional.",
    image: "/images/blog-hair.png",
    slug: "salon-hair-treatment",
  },
  {
    category: "Hair Treatment",
    title: "How to Choose a Salon for Hair Treatments in Lahore",
    description: "Important things to consider when selecting a salon for your hair-care experience.",
    image: "/images/blog-salon.png",
    slug: "choose-hair-salon-lahore",
  },
  {
    category: "Body Wax",
    title: "Is It Good to Wax Your Body? Everything You Should Know",
    description: "Explore the basics of body waxing, preparation, aftercare and what to expect during an appointment.",
    image: "/images/about-salon.png",
    slug: "body-wax-guide",
  },
  {
    category: "Body Wax",
    title: "What Is a Body Wax? A Complete Guide",
    description: "Understand how body waxing works and how to prepare for a comfortable salon experience.",
    image: "/images/about-salon.png",
    slug: "what-is-body-wax",
  },
  {
    category: "Acrylic Nails",
    title: "Do Acrylic Nails Hurt? Complete Guide",
    description: "Find out what to expect when getting acrylic nails and how to care for your natural nails.",
    image: "/images/blog-nails.png",
    slug: "do-acrylic-nails-hurt",
  },
  {
    category: "Acrylic Nails",
    title: "Is Acrylic a Fake Nail? All You Need to Know",
    description: "Learn what acrylic nail enhancements are and how they differ from other nail options.",
    image: "/images/blog-nails.png",
    slug: "what-are-acrylic-nails",
  },
  {
    category: "Acrylic Nails",
    title: "Which Is Better, Acrylic or Gel Nails?",
    description: "Compare acrylic and gel nails to understand their differences, maintenance and appearance.",
    image: "/images/blog-nails.png",
    slug: "acrylic-vs-gel-nails",
  },
  {
    category: "Acrylic Nails",
    title: "How Long Do Acrylic Nails Last?",
    description: "Discover what affects acrylic nail wear and how regular maintenance can help keep them looking beautiful.",
    image: "/images/blog-nails.png",
    slug: "how-long-acrylic-nails-last",
  },
  {
    category: "Beauty & Skincare",
    title: "Does a Facial Remove Pimples? All You Need to Know",
    description: "Understand what facials can and cannot do for blemish-prone skin and when to seek professional advice.",
    image: "/images/blog-facial.png",
    slug: "facial-and-pimples",
  },
  {
    category: "Beauty & Skincare",
    title: "Is Facial Good for Skin? All You Need to Know",
    description: "Explore the benefits of professional facials and how to choose a treatment suited to your skin.",
    image: "/images/blog-facial.png",
    slug: "benefits-of-facial",
  },
  {
    category: "Beauty & Skincare",
    title: "What Are the 7 Steps of a Facial?",
    description: "A simple introduction to the typical stages of a professional facial appointment.",
    image: "/images/blog-facial.png",
    slug: "seven-steps-of-facial",
  },
  {
    category: "Beauty & Skincare",
    title: "Which Type of Facial Is Best?",
    description: "Learn about different facial options and how to discuss your skincare goals with a beauty professional.",
    image: "/images/blog-facial.png",
    slug: "which-facial-is-best",
  },
  {
    category: "Beauty Salon",
    title: "What Services Are Offered at a Beauty Parlour?",
    description: "Discover common beauty salon services, from hair styling and makeup to skincare and nail treatments.",
    image: "/images/blog-salon.png",
    slug: "beauty-parlour-services",
  },
  {
    category: "Beauty Salon",
    title: "What Is the Difference Between a Beauty Salon and a Parlour?",
    description: "Explore the terms beauty salon and parlour and the services customers may find at each.",
    image: "/images/blog-salon.png",
    slug: "salon-vs-parlour",
  },
  {
    category: "Beauty Salon",
    title: "How Do I Choose a Beauty Salon?",
    description: "Helpful things to consider when choosing a salon, including hygiene, experience, services and consultation.",
    image: "/images/blog-salon.png",
    slug: "choose-beauty-salon",
  },
];

const categories = [
  "All",
  "Laser Hair Removal",
  "Hair Treatment",
  "Body Wax",
  "Acrylic Nails",
  "Beauty & Skincare",
  "Beauty Salon",
];

export default function BlogsPage() {
  return (
    <main className="blogs-page">

      {/* HEADER */}
      <header className="blogs-header">
        <Link href="/" className="blogs-logo">
          ALLURE
          <span>BEAUTY & STUDIO</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/#contact">Location</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/prtifolo">Portfolio</Link>
        </nav>

        <Link href="/#contact" className="blogs-book">
          Book Appointment
        </Link>
      </header>

      {/* PAGE BANNER */}
      <section className="blogs-banner">
        <span>BEAUTY JOURNAL</span>
        <h1>Our Blogs</h1>
        <p>
          <Link href="/">Home</Link> / Blogs
        </p>
      </section>

      {/* INTRO */}
      <section className="blogs-intro">
        <span className="blogs-eyebrow">THE ALLURE BEAUTY JOURNAL</span>
        <h2>Beauty Knowledge, Inspiration & Expert Tips</h2>
        <p>
          Explore helpful beauty guides, hair-care advice, skincare
          inspiration and nail-care tips. Discover something new
          and make informed choices for your beauty journey.
        </p>
      </section>

      {/* CATEGORY LABELS */}
      <section className="blog-categories">
        {categories.map((category) => (
          <span className="blog-category" key={category}>
            {category}
          </span>
        ))}
      </section>

      {/* BLOG GRID */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.slug}>
              <div className="blog-image">
                <img src={article.image} alt={article.title} />
                <span>{article.category}</span>
              </div>

              <div className="blog-content">
                <small>ALLURE BEAUTY JOURNAL</small>
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <div className="blog-card-bottom">
                  <span>Beauty Guide</span>
                  <span className="blog-read-label">
                    Article coming soon
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="blogs-cta">
        <span>YOUR BEAUTY JOURNEY</span>
        <h2>Have Questions About a Beauty Treatment?</h2>
        <p>
          Our team is happy to help you explore our salon services
          and find an experience suited to your needs.
        </p>
        <Link href="/services" className="blogs-book">
          Explore Our Services
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="blogs-footer">
        <div className="blogs-footer-main">
          <div>
            <Link href="/" className="blogs-logo">
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
            <Link href="/blogs">Blogs</Link>
            <Link href="/prtifolo">Portfolio</Link>
          </div>

          <div>
            <h4>Information</h4>
            <Link href="/#contact">Contact Us</Link>
            <Link href="/#contact">Location</Link>
            <Link href="/#faqs">FAQs</Link>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="tel:+923286427572">+92 328 642 7572</a>
            <a
              href="https://wa.me/923164416347"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +92 316 4416347
            </a>
          </div>
        </div>

        <div className="blogs-copyright">
          © 2026 ALLURE BEAUTY & STUDIO. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
