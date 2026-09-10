import Link from "next/link";
import { withBase } from "./base-path";
import { caseStudies, education, experience, graduateCourses, otherWork, site, skills } from "./data";

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
            Graduate study in <em>artificial intelligence</em> (M.Sc. expected March 2027), with an undergraduate degree in electronics.
          </p>
          <p className="intro">{site.summary}</p>
          <div className="heroActions">
            <a className="primary" href="#work">
              Research and projects
            </a>
            <Link className="textLink" href="/resume/">
              Curriculum vitae
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
          <figcaption>{site.affiliation}</figcaption>
        </figure>
      </section>

      <section className="coursework section" id="coursework">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Graduate coursework</p>
              <h2>
                The M.Sc. courses are in <em>artificial intelligence</em>.
              </h2>
            </div>
            <p>
              The degree title is Digital Electronic Systems. The courses completed in the programme are the
              following.
            </p>
          </div>
          <ol className="courseGrid">
            {graduateCourses.map((course, index) => (
              <li key={course.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{course.title}</strong>
                <small>{course.fa}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Research &amp; projects</p>
            <h2>
              Selected research and <em>applied work</em>.
            </h2>
          </div>
          <p>
            Projects in knowledge management, speech processing, recommendation systems, network analysis, and
            embedded electronics.
          </p>
        </div>

        <div className="cases">
          {caseStudies.map((project) => (
            <article className={`case ${project.featured ? "featured" : ""}`} key={project.number}>
              <header className="caseTop">
                <span>{project.number}</span>
                <small>{project.type}</small>
                {project.featured ? <b>{project.badge ?? "Live product"}</b> : null}
              </header>
              <h3>{project.title}</h3>
              {project.problem && project.approach && project.outcome ? (
                <dl className="caseBody">
                  <div>
                    <dt>Context</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Method</dt>
                    <dd>{project.approach}</dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>
              ) : (
                <p className="caseBlurb">{project.blurb}</p>
              )}
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {(project.liveUrl || project.repoUrl) && (
                <div className="caseActions">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Demonstration
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer">
                      Repository
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="otherWork">
          <h3>Related course projects</h3>
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
            <p className="eyebrow">Background</p>
            <h2>
              Trained in <em>artificial intelligence</em>.
              <br />
              Background in electronics.
            </h2>
          </div>
          <div className="aboutCopy">
            <p className="lead">
              My undergraduate degree is in electrical engineering. My graduate coursework is in artificial
              intelligence.
            </p>
            <p>
              I completed a B.Sc. in Electrical Engineering (Electronics) at Razi University. I am an M.Sc.
              candidate in Digital Electronic Systems at Amirkabir University of Technology; the degree is in
              progress and expected in March 2027. Courses taken include machine learning, neural networks,
              computer vision, numerical optimization, data analysis, and big-data processing.
            </p>
            <p>
              Applied work includes knowledge management, text-to-speech, recommendation systems, and network
              traffic classification.
            </p>
            <dl className="facts">
              <div>
                <dt>6</dt>
                <dd>Core graduate AI courses</dd>
              </div>
              <div>
                <dt>M.Sc.</dt>
                <dd>Expected March 2027</dd>
              </div>
              <div>
                <dt>B.Sc.</dt>
                <dd>Electrical engineering, electronics</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="sectionHead compact">
          <div>
            <p className="eyebrow">Appointments</p>
            <h2>
              Professional and <em>academic</em> experience.
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
                  {item.company ? `${item.company} · ${item.location}` : item.location}
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
                {item.note ? ` · ${item.note}` : ""}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills section">
        <div className="shell">
          <p className="eyebrow">Methods &amp; tools</p>
          <h2>
            Areas of <em>practice</em>.
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
              Correspondence regarding research or applied machine learning is welcome.
            </h2>
            <a className="email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="socials">
            <Link href="/resume/">Curriculum vitae</Link>
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
