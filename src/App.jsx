import { useEffect, useRef, useState } from "react";
import { stats } from "./data.js";
import okloimg from "./assets/oklo.png";
import resume from "./assets/Oklo_Solomon_Resume.pdf";
import cssLogo from "./assets/csslogo.png";
import { skills } from "./data.js";
import { projects } from "./data.js";
import { experience } from "./data.js";
import emailjs from "@emailjs/browser";

// ─── Hook ────────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
    const ref = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);
    return { ref, visible };
}

// helper to build className string
const r = (hook, extra = "") =>
    `reveal${hook.visible ? " visible" : ""}${extra ? " " + extra : ""}`;

const smoothScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
    const [active, setActive] = useState("");
    const [selected, setSelected] = useState(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const ejsform = useRef();

    useEffect(() => {
        document.documentElement.classList.toggle("light", isLight);
    }, [isLight]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const onScroll = () => {
            let current = "";
            sections.forEach((s) => {
                if (window.scrollY >= s.offsetTop - 120) current = s.id;
            });
            setActive(current);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.id]: e.target.value });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            alert("Please fill in all fields.");
            return;
        }
        // emailjs.send("service_k4qmqa8", "template_znrkrze");
        try {
            await emailjs.sendForm(
                "service_k4qmqa8",
                "template_znrkrze",
                ejsform.current,
                { publicKey: "eGwGPywEjqm7syCgu" },
            );
            setSent(true);
        } catch (error) {
            // console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
        }

        setForm({ name: "", email: "", message: "" });
    };

    // reveal hooks
    const aboutText = useReveal();
    const aboutRight = useReveal();
    const skillLabel = useReveal();
    const skillTitle = useReveal();
    const skillGrid = useReveal();
    const projLabel = useReveal();
    const projTitle = useReveal();
    const projList = useReveal();
    const expLabel = useReveal();
    const expTitle = useReveal();
    const expList = useReveal();
    const ctcLabel = useReveal();
    const ctcTitle = useReveal();
    const ctcLeft = useReveal();
    const ctcRight = useReveal();

    const navLinks = ["about", "skills", "projects", "experience"];

    return (
        <>
            {/* NAV */}
            <nav>
                <ul className="nav-links">
                    {navLinks.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => smoothScroll(e, id)}
                                style={{
                                    color: active === id ? "var(--accent)" : "",
                                }}
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="togglediv" title="Toggle theme">
                    <input
                        type="checkbox"
                        id="togglecheckbox"
                        title="Toggle light/dark theme"
                        checked={isLight}
                        onChange={() => setIsLight(!isLight)}
                    />
                    <label htmlFor="togglecheckbox" className="toggler">
                        <span className="toggleball">
                            <span className="lightIcon">☀</span>
                            <span className="moonIcon">🌒</span>
                        </span>
                    </label>
                </div>
            </nav>

            {/* HERO */}
            <section id="hero">
                <h1 className="hero-name playfair">
                    Oklo
                    <br />
                    <span>Solomon</span>
                </h1>
                <p className="hero-desc">
                    A passionate junior developer focused on building clean,
                    impactful mobile &amp; web experiences
                </p>
                <div className="hero-cta">
                    <a
                        href="#projects"
                        className="fillbtn"
                        onClick={(e) => smoothScroll(e, "projects")}
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="fillbtn"
                        onClick={(e) => smoothScroll(e, "contact")}
                    >
                        Get In Touch
                    </a>
                    <a href={resume} download className="fillbtn">
                        Download Resume
                    </a>
                </div>
            </section>

            {/* ABOUT */}
            <section id="about">
                <div className="section-inner">
                    <div className="about-grid">
                        <div className={r(aboutText)} ref={aboutText.ref}>
                            <h5 className="section-label">About Me</h5>
                            <h2 className="section-title">
                                Learning
                                <br />
                                by building.{" "}
                            </h2>
                            <p>
                                Hi, I'm <strong>Oklo Solomon</strong> — a driven
                                and curious developer with a deep love for
                                crafting digital products. I believe great
                                software starts with empathy for the user and
                                ends with clean, maintainable code.
                            </p>
                            <p>
                                A problem-solver at heart with a genuine
                                curiosity for how things work — and an itch to
                                build things that actually do. I pick up new
                                tools quickly, ask the right questions, and
                                don't stop until the job is done right.
                            </p>
                            <p>
                                Currently levelling up toward an{" "}
                                <strong>Associate Software Developer</strong>{" "}
                                role — hungry for real-world projects, intensive
                                training, and opportunities that pushes me to
                                grow. I bring reliability, adaptability, and the
                                kind of enthusiasm that doesn't wear off after
                                week one.
                            </p>
                            <div className="about-stats">
                                {stats.map((s) => (
                                    <div className="stat-box" key={s.label}>
                                        <div className="stat-num">{s.num}</div>
                                        <div className="stat-label">
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className={r(aboutRight)}
                            ref={aboutRight.ref}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            <div className="about-img-wrap">
                                <img
                                    src={okloimg}
                                    alt="Oklo Solomon"
                                    onError={(e) => {
                                        e.target.parentElement.style.background =
                                            "var(--surface2)";
                                    }}
                                />
                                <div className="img-tag">Oklo Solomon</div>
                            </div>
                        </div>{" "}
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
                <div className="section-inner">
                    <h5
                        className={r(skillLabel, "section-label")}
                        ref={skillLabel.ref}
                    >
                        Skills
                    </h5>
                    <h2
                        className={r(skillTitle, "section-title")}
                        ref={skillTitle.ref}
                    >
                        What I work
                        <br />
                        with.
                    </h2>
                    <div
                        className={r(skillGrid, "skills-grid")}
                        ref={skillGrid.ref}
                    >
                        {skills.map((group) => (
                            <div className="skill-group" key={group.group}>
                                <h4 className="skill-group-name">
                                    {group.group}
                                </h4>
                                {group.items.map((item) => (
                                    <div className="skill-item" key={item.name}>
                                        <div className="skill-top">
                                            <span className="skill-name">
                                                {item.name}
                                            </span>
                                            <span className="skill-pct">
                                                {item.pct}%
                                            </span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: skillGrid.visible
                                                        ? `${item.pct}%`
                                                        : "0%",
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects">
                <div className="section-inner">
                    <p
                        className={r(projLabel, "section-label")}
                        ref={projLabel.ref}
                    >
                        Projects
                    </p>
                    <h2
                        className={r(projTitle, "section-title")}
                        ref={projTitle.ref}
                    >
                        Things I've
                        <br />
                        built.
                    </h2>
                    <div
                        className={r(projList, "projects-list")}
                        ref={projList.ref}
                    >
                        {projects.map((project, i) => (
                            <div
                                key={project.name}
                                className="project-row"
                                onClick={() => setSelected(project)}
                            >
                                <div className="project-num">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className="project-info">
                                    <div className="project-name">
                                        {project.name}
                                    </div>
                                    <div className="project-desc">
                                        {project.desc}
                                    </div>
                                </div>
                                <div className="project-tags">
                                    {project.tags.map((t) => (
                                        <span className="tag" key={t}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selected && (
                    <div
                        className="modal-overlay"
                        onClick={() => setSelected(null)}
                    >
                        <div
                            className="modal-box"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelected(null)}
                            >
                                ✕
                            </button>
                            <div className="modal-preview">
                                {selected.preview ? (
                                    <img
                                        src={selected.preview}
                                        alt={`${selected.name} preview`}
                                    />
                                ) : (
                                    <div className="modal-no-preview">
                                        <span>No preview available</span>
                                    </div>
                                )}
                            </div>
                            <div className="modal-info">
                                <div className="modal-title">
                                    {selected.name}
                                </div>
                                <div className="modal-desc">
                                    {selected.desc}
                                </div>
                                <div className="modal-tags">
                                    {selected.tags.map((t) => (
                                        <span className="tag" key={t}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {selected.url && (
                                    <a
                                        href={selected.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="fillbtn modal-btn"
                                    >
                                        View Live Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* EXPERIENCE */}
            <section id="experience">
                <div className="section-inner">
                    <p
                        className={r(expLabel, "section-label")}
                        ref={expLabel.ref}
                    >
                        Experience
                    </p>
                    <h2
                        className={r(expTitle, "section-title")}
                        ref={expTitle.ref}
                    >
                        Where I've
                        <br />
                        worked.
                    </h2>
                    <div
                        className={r(expList, "experience-list")}
                        ref={expList.ref}
                    >
                        {experience.map((job, i) => (
                            <div className="exp-row" key={i}>
                                <div className="exp-left">
                                    <div className="exp-date">{job.date}</div>
                                    <div className="exp-company">
                                        {job.company}
                                    </div>
                                    <div className="exp-location">
                                        {job.location}
                                    </div>
                                </div>
                                <div className="exp-right">
                                    <div className="exp-role">
                                        {job.role}
                                        {job.badge && (
                                            <span className="exp-badge">
                                                {job.badge}
                                            </span>
                                        )}
                                    </div>
                                    <ul className="exp-bullets">
                                        {job.bullets.map((b, j) => (
                                            <li key={j}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact">
                <div className="section-inner">
                    <p
                        className={r(ctcLabel, "section-label")}
                        ref={ctcLabel.ref}
                    >
                        Contact
                    </p>
                    <h2
                        className={r(ctcTitle, "section-title")}
                        ref={ctcTitle.ref}
                    >
                        Let's work
                        <br />
                        together.
                    </h2>
                    <div className="contact-grid">
                        <div
                            className={r(ctcLeft, "contact-left")}
                            ref={ctcLeft.ref}
                        >
                            <p>
                                I'm always open to new opportunities. Whether
                                you have a question, a project idea, or just
                                want to say hello — fire away.
                            </p>
                            <div className="contact-links">
                                <a
                                    href="mailto:solomonoklo9@gmail.com"
                                    className="contact-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    solomonoklo9@gmail.com <span>→</span>
                                </a>
                                <a
                                    href="https://github.com/oklogit"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-link"
                                >
                                    github.com/oklogit <span>→</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/oklo-solomon"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-link"
                                >
                                    linkedin.com/in/oklo-solomon <span>→</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className={r(ctcRight, "contact-right")}
                            ref={ctcRight.ref}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            <form className="contact-form" ref={ejsform}>
                                <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="example@company.com"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        placeholder="Tell me about the opportunity..."
                                        value={form.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p
                                    style={{
                                        fontSize: "0.72rem",
                                        color: "var(--muted)",
                                    }}
                                >
                                    PS: this form isn't quite functional yet,
                                    but you can reach me at the email above!
                                </p>
                                <button
                                    className="form-submit"
                                    onClick={handleSubmit}
                                >
                                    Send Message →
                                </button>
                                {sent && (
                                    <p
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--accent)",
                                            marginTop: "8px",
                                        }}
                                    >
                                        Message sent! I'll get back to you soon.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* <footer>
                <div className="footer-left">
                    Designed &amp; coded by <strong>Oklo Solomon</strong> — No
                    templates used.
                </div>
                <div className="footer-right">© 2025 · All rights reserved</div>
            </footer> */}
        </>
    );
}
