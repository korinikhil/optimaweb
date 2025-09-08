// app/(legal)/shipping/page.jsx
// Server Component (no event handlers). Next.js 15+ App Router.

export const metadata = {
    title: "Shipping & Delivery | Optima WebDesign",
    description:
        "Electronic delivery policy for Optima WebDesign: delivery timelines for digital services, access handover, acceptance criteria, communication, and exceptions.",
    robots: { index: true, follow: true },
    alternates: { canonical: "/shipping" },
    openGraph: {
        title: "Shipping & Delivery | Optima WebDesign",
        description:
            "Digital-only 'shipping' policy covering electronic delivery of web design services, turnaround times, access credentials, and acceptance criteria.",
        url: "/shipping",
        siteName: "Optima WebDesign",
        type: "article",
    },
};

const Section = ({ id, title, children }) => (
    <section
        id={id}
        aria-labelledby={`${id}-title`}
        style={{
            background: "linear-gradient(180deg, #0C1222 0%, #0C1222 65%, #0e1428 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "18px",
            boxShadow:
                "0 10px 25px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        className="section"
    >
        <h3
            id={`${id}-title`}
            style={{
                color: "#E6ECFF",
                fontSize: "1.1rem",
                letterSpacing: "0.3px",
                margin: "0 0 10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <span
                aria-hidden
                style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background:
                        "linear-gradient(135deg, #7EA6FF 0%, #9B7CFF 50%, #F29FFF 100%)",
                    boxShadow: "0 0 10px rgba(126,166,255,0.6)",
                }}
            />
            {title}
        </h3>
        <div
            style={{
                color: "rgba(230, 236, 255, 0.82)",
                lineHeight: 1.7,
                fontSize: "0.98rem",
            }}
        >
            {children}
        </div>
    </section>
);

const List = ({ items }) => (
    <ul
        style={{
            margin: "10px 0 0 18px",
            padding: 0,
            listStyle: "disc",
        }}
    >
        {items.map((it, i) => (
            <li key={i} style={{ marginBottom: "6px" }} dangerouslySetInnerHTML={{ __html: it }} />
        ))}
    </ul>
);

export default function ShippingPage() {
    const today = new Date();
    const effectiveDate = new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(today);

    const quickLinks = [
        { href: "#overview", label: "Overview" },
        { href: "#digital", label: "Digital delivery" },
        { href: "#turnaround", label: "Turnaround" },
        { href: "#handover", label: "Access & handover" },
        { href: "#acceptance", label: "Acceptance" },
        { href: "#communication", label: "Communication" },
        { href: "#delays", label: "Delays & dependencies" },
        { href: "#revisions", label: "Revisions" },
        { href: "#thirdparty", label: "Third‑party services" },
        { href: "#no-physical", label: "No physical shipping" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <main
            style={{
                paddingTop: "8rem",
                minHeight: "100dvh",
                background:
                    "radial-gradient(1200px 600px at 20% 0%, rgba(126,166,255,0.08), transparent), radial-gradient(1000px 500px at 100% 20%, rgba(242,159,255,0.07), transparent), #0A0F1E",
                padding: "40px 18px",
                color: "#E6ECFF",
                scrollBehavior: "smooth",
            }}
        // If Next.js warns about smooth scroll attribute:
        // add data-scroll-behavior="smooth" on the html element via root layout if needed.
        >
            <style>{`
        .section { transition: transform .2s ease, box-shadow .2s ease; }
        .section:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04);
        }
        .chip {
          display: inline-flex; align-items:center; gap:8px; padding:8px 12px; margin-right:8px;
          font-size:.92rem; color: rgba(230,236,255,0.88); text-decoration:none;
          border:1px solid rgba(255,255,255,0.08); border-radius:999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          transition: background .2s ease, transform .2s ease;
        }
        .chip:hover {
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          transform: translateY(-1px);
        }
      `}</style>

            <div style={{ maxWidth: "920px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", marginBottom: "28px" }}>
                    <h1
                        style={{
                            fontSize: "2rem",
                            margin: 0,
                            fontWeight: 700,
                            letterSpacing: "0.2px",
                            background:
                                "linear-gradient(135deg, #FFFFFF 0%, #C5D2FF 40%, #9B7CFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Shipping & Delivery
                    </h1>
                    <p style={{ marginTop: "10px", color: "rgba(230,236,255,0.75)" }}>
                        Optima WebDesign
                    </p>

                    <div
                        style={{
                            marginTop: "14px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "6px 12px",
                            borderRadius: "999px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.03)",
                            fontSize: "0.9rem",
                            color: "rgba(230,236,255,0.8)",
                        }}
                        aria-label="Effective date"
                    >
                        <span
                            aria-hidden
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "999px",
                                background: "#7EA6FF",
                                boxShadow: "0 0 8px rgba(126,166,255,0.6)",
                            }}
                        />
                        Effective date: {effectiveDate}
                    </div>
                </header>

                <nav
                    aria-label="Quick links"
                    style={{
                        position: "sticky",
                        top: 8,
                        zIndex: 2,
                        marginBottom: "18px",
                        background: "rgba(12,18,34,0.6)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "14px",
                        padding: "10px",
                        backdropFilter: "blur(6px)",
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                    }}
                >
                    {quickLinks.map((l) => (
                        <a key={l.href} href={l.href} className="chip">
                            <span
                                aria-hidden
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "999px",
                                    background:
                                        "linear-gradient(135deg, #7EA6FF 0%, #9B7CFF 50%, #F29FFF 100%)",
                                }}
                            />
                            {l.label}
                        </a>
                    ))}
                </nav>

                <Section id="overview" title="Overview">
                    <p>
                        Optima WebDesign provides digital services delivered electronically; no physical goods are shipped. Deliverables include design files, source code, credentials, and live deployments, shared via secure online channels specified in project documents.
                    </p>
                </Section>

                <Section id="digital" title="Nature of delivery (digital)">
                    <List
                        items={[
                            "<strong>Modes:</strong> Email, secure links (Drive/Dropbox), Git repositories, project tools, or deployment to client hosting.",
                            "<strong>Formats:</strong> Figma/PSD/PNG/SVG assets, HTML/CSS/JS bundles, Next.js projects, CMS exports, docs, and credentials as applicable.",
                            "<strong>Security:</strong> Credentials are shared via encrypted channels or password managers upon request.",
                        ]}
                    />
                </Section>

                <Section id="turnaround" title="Estimated turnaround times">
                    <List
                        items={[
                            "Design concepts: typically 3–7 business days per scope block after intake and access receipt.",
                            "Front‑end builds/integrations: typically 1–3 weeks depending on complexity and approvals.",
                            "Small changes/bug fixes: typically 1–3 business days within retainer SLAs.",
                            "Timelines are indicative and may adjust based on scope, approvals, and third‑party dependencies.",
                        ]}
                    />
                </Section>

                <Section id="handover" title="Access & handover">
                    <List
                        items={[
                            "Staging or preview links are provided for review prior to final handover.",
                            "On acceptance or milestone sign‑off, final files/repos are shared and/or deployments are made to production.",
                            "Admin/editor access and credentials are transferred or created as agreed in the Statement of Work (SoW).",
                        ]}
                    />
                </Section>

                <Section id="acceptance" title="Acceptance criteria">
                    <List
                        items={[
                            "A deliverable is deemed delivered upon successful access being provided to the agreed location (e.g., repo, drive, or live URL).",
                            "If no issues are reported within 5 business days of delivery notice, the deliverable may be considered accepted for billing and scheduling purposes.",
                            "Any defects reported within the review window are triaged and resolved per the SoW and support terms.",
                        ]}
                    />
                </Section>

                <Section id="communication" title="Communication & tracking">
                    <List
                        items={[
                            "Delivery notifications are sent via email from optimawebdesigns12@gmail.com with links or deployment details.",
                            "Progress is tracked in the agreed project workspace (e.g., Jira, Trello, Asana, or email threads).",
                            "Versioning is maintained via Git or documented changelogs for each release.",
                        ]}
                    />
                </Section>

                <Section id="delays" title="Delays & client dependencies">
                    <List
                        items={[
                            "Delays may occur due to pending inputs: content, brand assets, approvals, or third‑party account access.",
                            "External outages (hosting/DNS/CDN/payment gateways) may impact delivery schedules; such events are outside direct control.",
                            "Revised timelines are communicated promptly upon identification of dependency‑driven impact.",
                        ]}
                    />
                </Section>

                <Section id="revisions" title="Revisions and scope changes">
                    <List
                        items={[
                            "Revisions are handled per the SoW’s included rounds; additional changes may be billed separately.",
                            "Change requests affecting scope or integrations may require updated estimates and timelines.",
                            "Post‑delivery tweaks within warranty/support windows are addressed under support terms.",
                        ]}
                    />
                </Section>

                <Section id="thirdparty" title="Third‑party services">
                    <List
                        items={[
                            "Delivery relying on third‑party services (domains, hosting, CMS, plugins, APIs) follows those providers’ availability and policies.",
                            "Account ownership for third‑party services remains with the respective account holder; administrative roles and transfers are coordinated during handover.",
                            "Licenses or subscriptions procured for the project are documented, including renewal responsibility.",
                        ]}
                    />
                </Section>

                <Section id="no-physical" title="No physical shipping">
                    <List
                        items={[
                            "No courier, postal, or physical shipment is provided or required for services.",
                            "Any references to “shipping” in invoices or portals refer to electronic delivery milestones.",
                            "For compliance, communications capture timestamps and links as delivery proof.",
                        ]}
                    />
                </Section>

                <Section id="contact" title="Contact">
                    <p style={{ margin: 0 }}>
                        Shipping & Delivery Desk — Optima WebDesign<br />
                        Email: optimawebdesigns12@gmail.com<br />
                        Address: Hirawadi, Mahaveer Nagar
                    </p>
                </Section>

                <footer
                    style={{
                        textAlign: "center",
                        marginTop: "12px",
                        color: "rgba(230,236,255,0.6)",
                        fontSize: "0.85rem",
                    }}
                >
                    © {new Date().getFullYear()} Optima WebDesign. All rights reserved.
                </footer>
            </div>
        </main>
    );
}
