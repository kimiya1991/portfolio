import Link from "next/link";
import { withBase } from "./base-path";
import { caseStudies, education, experience, graduateCourses, languages, otherWork, site, skills } from "./data";

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
            Applied AI, electronics, and graduate study. M.Sc. expected March 2027.
          </p>
          <p className="intro">{site.summary}</p>
          <div className="heroActions">
            <a className="primary" href="#work">
              Projects
            </a>
            <Link className="textLink" href="/resume/">
              Curriculum vitae
            </Link>
            <a className="textLink" href={`${withBase("/Kimiya-Jafarpor-CV.pdf")}`} target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a className="textLink" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="textLink" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src={withBase("/kj-portrait.jpg")}
            alt="Portrait of Kimiya Jafarpor"
            width={720}
            height={900}
          />
          <figcaption>{site.affiliation}</figcaption>
        </figure>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>
              Applied AI, electronics, and a <em>live product</em>.
            </h2>
          </div>
          <p>
            The M.Sc. thesis on network traffic classification is first. Applied work follows: knowledge
            management, speech, recommendation systems, embedded hardware, and web data.
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
              {project.dates ? <p className="company">{project.dates}</p> : null}
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
                      Live site
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
          <h3>Course projects</h3>
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

      <section className="section shell" id="experience">
        <div className="sectionHead compact">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>
              Industry work in <em>AI and electronics</em>.
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
                {item.bullets ? (
                  <ul className="resumeList">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="coursework section" id="coursework">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">Education</p>
              <h2>
                Digital electronics, with graduate courses in <em>artificial intelligence</em>.
              </h2>
            </div>
            <p>
              The M.Sc. degree has not been awarded. Expected completion is March 2027.
            </p>
          </div>
          <div className="education">
            {education.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>
                  {item.school} · {item.location} · {item.dates}
                  {item.note ? ` · ${item.note}` : ""}
                </span>
              </div>
            ))}
          </div>
          <ol className="courseGrid">
            {graduateCourses.map((course, index) => (
              <li key={course.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{course.title}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell aboutGrid">
          <div>
            <p className="eyebrow">Background</p>
            <h2>
              Electronics by training.
              <br />
              Applied AI in current work.
            </h2>
          </div>
          <div className="aboutCopy">
            <p className="lead">
              I build document, speech, and recommendation systems, and I have a hardware background in
              schematic design, PCB work, and Arduino prototypes.
            </p>
            <p>
              I completed a B.Sc. in Electrical Engineering (Electronics) at Razi University (2019–2023). I am
              an M.Sc. candidate in Digital Electronic Systems at Amirkabir University of Technology; the
              degree is in progress and expected in March 2027. Courses taken include machine learning, neural
              networks, computer vision, numerical optimization, data analysis, and big-data processing.
            </p>
            <p>
              Current industry work is in knowledge management and text-to-speech. Earlier work was as an
              electronics technician at PoyeshGaran Sanat Paya. The master's thesis on network traffic
              classification is ongoing and has not been completed.
            </p>
            <p>
              Languages: {languages.join("; ")}.
            </p>
            <dl className="facts">
              <div>
                <dt>B.Sc.</dt>
                <dd>Electrical engineering, electronics</dd>
              </div>
              <div>
                <dt>M.Sc.</dt>
                <dd>Expected March 2027</dd>
              </div>
              <div>
                <dt>11</dt>
                <dd>Projects on this site</dd>
              </div>
            </dl>
          </div>
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
            <h2>Email, GitHub, and LinkedIn are the best ways to reach me.</h2>
            <a className="email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="socials">
            <Link href="/resume/">Curriculum vitae</Link>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="shell copyright">
          <span>© 2026 {site.name}</span>
          <span>{site.location}</span>
        </div>
      </footer>
    </main>
  );
}
