import Link from "next/link";
import { withBase } from "./base-path";
import { caseStudies, education, experience, otherWork, site, skills } from "./data";

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">
            {site.role} · {site.location}
          </p>
          <h1>{site.name}</h1>
          <p className="lede">
            Applied AI across speech, language, vision, and <em>hardware</em>.
          </p>
          <p className="intro">{site.summary}</p>
          <div className="heroActions">
            <a className="primary" href="#work">
              View selected work
            </a>
            <Link className="textLink" href="/resume/">
              Résumé
            </Link>
            <a className="textLink" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src={withBase("/kimiya.jpg")}
            alt="Portrait of Kimiya Jafarpor"
            width={720}
            height={900}
          />
          <figcaption>
            Based in {site.location}
            <span>Building applied AI</span>
          </figcaption>
        </figure>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>
              Case studies, not a <em>project dump</em>.
            </h2>
          </div>
          <p>
            Four pieces of work that show how I move from a real constraint to a working system—software,
            research, industry, and hardware.
          </p>
        </div>

        <div className="cases">
          {caseStudies.map((project) => (
            <article className={`case ${project.featured ? "featured" : ""}`} key={project.number}>
              <header className="caseTop">
                <span>{project.number}</span>
                <small>{project.type}</small>
                {project.featured ? <b>Live product</b> : null}
              </header>
              <h3>{project.title}</h3>
              <dl className="caseBody">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {(project.liveUrl || project.repoUrl) && (
                <div className="caseActions">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live dashboard
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Source code
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="otherWork">
          <h3>Other work</h3>
          <ul>
            {otherWork.map((item) => (
              <li key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.type}</span>
                </div>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell aboutGrid">
          <div>
            <p className="eyebrow">About</p>
            <h2>
              Engineering roots.
              <br />
              <em>AI direction.</em>
            </h2>
          </div>
          <div className="aboutCopy">
            <p className="lead">
              I like understanding systems end to end—from the circuit board to the model that runs on top of
              them.
            </p>
            <p>
              After a bachelor&apos;s degree in Electrical Engineering, I moved into artificial intelligence
              through graduate study and industry work. For the past two years I have worked across machine
              learning, language models, speech, computer vision, and data analysis.
            </p>
            <p>
              I now work at Daria Hamrah on applied AI while pursuing an M.Sc. in Digital Electronic Systems at
              Amirkabir University of Technology. I am most interested in work where research has to become
              something reliable and usable.
            </p>
            <dl className="facts">
              <div>
                <dt>2+</dt>
                <dd>Years in applied AI</dd>
              </div>
              <div>
                <dt>M.Sc.</dt>
                <dd>Digital electronics, in progress</dd>
              </div>
              <div>
                <dt>EE</dt>
                <dd>Hardware and software</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="sectionHead compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>
              Where the work got <em>real</em>.
            </h2>
          </div>
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.title}>
              <time>{item.dates}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="company">
                  {item.company} · {item.location}
                </p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="education">
          <p className="eyebrow">Education</p>
          {education.map((item) => (
            <div key={item.title}>
              <strong>{item.title}</strong>
              <span>
                {item.school} · {item.dates}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills section">
        <div className="shell">
          <p className="eyebrow">Toolkit</p>
          <h2>
            What I reach for in <em>practice</em>.
          </h2>
          <div className="skillRows">
            {skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>
              Working on speech, ML, or embedded intelligence? <em>Let&apos;s talk.</em>
            </h2>
            <a className="email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="socials">
            <Link href="/resume/">Résumé</Link>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="shell copyright">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.location}</span>
        </div>
      </footer>
    </main>
  );
}
