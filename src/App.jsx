export default function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">Client<span>Flux</span></div>

        <div className="menu">
          <p>Home</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>

      <section className="hero">
        <div>
          <h1>
            Grow Your <span>Business</span> Digitally 🚀
          </h1>

          <p>
            ClientFlux is a modern digital marketing agency helping brands grow
            with Meta Ads, SEO, social media marketing and branding.
          </p>

          <div className="btns">
            <button className="btn green">Free Consultation</button>
            <button className="btn dark">Explore Services</button>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <h2>120+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="card">
            <h2>80+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="card">
            <h2>5M+</h2>
            <p>Ad Reach</p>
          </div>

          <div className="card">
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service">
            <h3>Social Media Marketing</h3>
            <p>Professional marketing service.</p>
          </div>

          <div className="service">
            <h3>Meta Ads</h3>
            <p>High converting ad campaigns.</p>
          </div>

          <div className="service">
            <h3>SEO Optimization</h3>
            <p>Rank your website on Google.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
