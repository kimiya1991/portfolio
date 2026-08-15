import type { Metadata } from "next";
import { PrintButton } from "../components/print-button";
import { education, experience, otherWork, site, skills } from "../data";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${site.name}, ${site.role} based in ${site.location}.`,
};

export default function ResumePage() {
  return (
    <main id="main" className="resume">
      <div className="shell resumeHead">
        <div>
          <p className="eyebrow">Résumé</p>
          <h1>{site.name}</h1>
          <p className="lede">
            {site.role} · {site.location}
          </p>
          <p className="intro">{site.summary}</p>
        </div>
        <div className="resumeActions">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <PrintButton />
        </div>
      </div>

      <section className="shell resumeBlock">
        <h2>Experience</h2>
        {experience.map((item) => (
          <article key={item.title}>
            <header>
              <h3>{item.title}</h3>
              <time>{item.dates}</time>
            </header>
            <p className="company">
              {item.company} · {item.location}
            </p>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Education</h2>
        {education.map((item) => (
          <article key={item.title}>
            <header>
              <h3>{item.title}</h3>
              <time>{item.dates}</time>
            </header>
            <p>{item.school}</p>
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Selected work</h2>
        <ul className="resumeList">
          <li>Cook With What You Have — live ingredient-first recipe recommender.</li>
          <li>Network traffic classification — master&apos;s research comparing ML and LLM methods.</li>
          <li>Applied text-to-speech — production TTS workflows for mobile experiences.</li>
          <li>Smart irrigation — Arduino prototype with soil-moisture control.</li>
        </ul>
        <p className="resumeNote">
          Additional university work: {otherWork.map((item) => item.title).join("; ")}.
        </p>
      </section>

      <section className="shell resumeBlock">
        <h2>Skills</h2>
        {skills.map((group) => (
          <p key={group.title}>
            <strong>{group.title}.</strong> {group.items.join(", ")}.
          </p>
        ))}
      </section>
    </main>
  );
}
