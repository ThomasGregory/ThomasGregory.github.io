function App(): JSX.Element {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">Thomas Gregory</h1>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#cv" className="nav-link">CV</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="about" className="section hero">
          <div className="container">
            <h2 className="section-title">About</h2>
            <div className="hero-content">
              <p className="lead">
                I'm a Scientific Software Engineer passionate about building elegant solutions 
                to complex problems at the intersection of mathematics and software development.
              </p>
              <p>
                I specialize in creating tools and applications that bridge scientific computing 
                and software engineering, combining mathematical rigor with practical implementation.
              </p>
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="container">
            <h2 className="section-title">Blog</h2>
            <div className="blog-content">
              <p className="blog-intro">
                Thoughts on software engineering, mathematics, and other topics that interest me.
              </p>
              <div className="blog-placeholder">
                <p>Coming soon... Check back for articles and posts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cv" className="section cv-section">
          <div className="container">
            <h2 className="section-title">CV</h2>
            <div className="cv-content">
              <p className="cv-intro">
                Download my curriculum vitae or view it online.
              </p>
              <div className="cv-links">
                <a href="#" className="cv-link">Download PDF</a>
                <a href="#" className="cv-link">View Online</a>
              </div>
              <p className="cv-note">
                <em>CV will be available here soon.</em>
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-content">
              <p>
                Feel free to reach out if you'd like to collaborate or just say hello.
              </p>
              <div className="contact-links">
                <a href="mailto:thomas.j.gregory0@gmail.com" className="contact-link">Email</a>
                <a href="https://github.com/ThomasGregory" className="contact-link">GitHub</a>
                <a href="https://www.linkedin.com/in/thomasjgregory0/" className="contact-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Thomas Gregory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App



