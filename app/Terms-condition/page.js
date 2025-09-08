// app/(legal)/terms-and-conditions/page.jsx
// Server Component (no event handlers). Next.js App Router compatible.

export const metadata = {
    title: "Terms & Conditions | OptimaWebDesign",
    description:
        "OptimaWebDesign Terms & Conditions covering services description, pricing and payments, customer obligations, privacy and data protection, liability, IP rights, dispute resolution, termination, and contact details.",
    robots: { index: true, follow: true },
    alternates: { canonical: "/terms-and-conditions" },
    openGraph: {
        title: "Terms & Conditions | OptimaWebDesign",
        description:
            "Official Terms & Conditions for OptimaWebDesign, including scope of services, payment terms, privacy, liability, IP, dispute resolution, and termination.",
        url: "/terms-and-conditions",
        siteName: "OptimaWebDesign",
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
    <ul style={{ margin: "10px 0 0 18px", padding: 0, listStyle: "disc" }}>
        {items.map((it, i) => (
            <li
                key={i}
                style={{ marginBottom: "6px" }}
                dangerouslySetInnerHTML={{ __html: it }}
            />
        ))}
    </ul>
);

export default function TermsAndConditionsPage() {
    const today = new Date();
    const effectiveDate = new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(today);

    const quickLinks = [
        { href: "#intro", label: "Overview" },
        { href: "#services", label: "Services/Products" },
        { href: "#pricing", label: "Pricing & Payment" },
        { href: "#obligations", label: "Customer Obligations" },
        { href: "#privacy", label: "Privacy & Data" },
        { href: "#liability", label: "Liability" },
        { href: "#ip", label: "IP Rights" },
        { href: "#disputes", label: "Dispute Resolution" },
        { href: "#termination", label: "Termination" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <main
            style={{
                paddingTop: "9rem",
                minHeight: "100dvh",
                background:
                    "radial-gradient(1200px 600px at 20% 0%, rgba(126,166,255,0.08), transparent), radial-gradient(1000px 500px at 100% 20%, rgba(242,159,255,0.07), transparent), #0A0F1E",
                padding: "40px 18px",
                color: "#E6ECFF",
                scrollBehavior: "smooth",
            }}
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
                        OptimaWebDesign – Terms and Conditions
                    </h1>

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

                <Section id="intro" title="Overview">
                    <p>
                        Ye Terms and Conditions (“T&C”) OptimaWebDesign ke saath kiye gaye sabhi projects, retainers, aur digital services par apply hote hain. Project-specific details (deliverables, timelines, inclusions) SOW/proposal me define honge. In T&C me changes company website par publish hote hi effective ho jayenge.
                    </p>
                </Section>

                <Section id="services" title="Services/Products Description">
                    <p>
                        OptimaWebDesign custom website design, ecommerce setup, branding, UI/UX, basic on‑page SEO, maintenance, aur support provide karta hai, as per signed SOW. Deliverables, timelines, aur revision limits SOW me defined honge; scope se bahar ka kaam change request aur additional fees par hoga.
                    </p>
                </Section>

                <Section id="pricing" title="Pricing and Payment Terms">
                    <List
                        items={[
                            "<strong>Currency:</strong> Saari pricing INR me hogi.",
                            "<strong>Milestones:</strong> Standard: 50% advance (project start), 40% staging approval par, 10% go‑live se pehle; alternate schedules contract me specified ho sakte hain.",
                            "<strong>Invoices:</strong> Net‑7/Net‑15 as agreed; late payment par service hold aur applicable late fee lag sakta hai.",
                            "<strong>Third‑party costs:</strong> Domains, hosting, plugins, stock assets, wagairah client accounts me bill honge ya pre‑paid honge.",
                            "<strong>Refunds:</strong> Milestone completion ke basis par limited/conditional; completed work non‑refundable.",
                        ]}
                    />
                </Section>

                <Section id="obligations" title="Customer Obligations and Responsibilities">
                    <List
                        items={[
                            "Client timely content, brand assets, aur approvals provide kare; delays hone par timeline accordingly extend hogi.",
                            "Client warrant karta hai ki diya gaya content lawful aur IP‑safe hai; unlawful ya third‑party IP infringement ki liability client par hogi.",
                            "Access credentials (hosting, DNS, CRM, payments, etc.) secure channel se share karna aur updated rakhna client ki zimmedari hogi.",
                        ]}
                    />
                </Section>

                <Section id="privacy" title="Privacy and Data Protection">
                    <List
                        items={[
                            "Personal data minimum necessary basis par collect/process hota hai project execution aur support ke liye.",
                            "Company India ke DPDP Act ke principles follow karti hai: consent, access/correction, deletion requests handle, reasonable security controls, breach response, aur retention limits.",
                            "Sensitive credentials/PII encrypted channels me exchange kiye jayenge jahan possible.",
                        ]}
                    />
                </Section>

                <Section id="liability" title="Liability and Disclaimers">
                    <List
                        items={[
                            "Services “as‑is” provide ki jaati hain; indirect, incidental, special, or consequential losses ke liye company liable nahi hogi.",
                            "Maximum aggregate liability last 3 months me client dwara paid fees tak limited rahegi.",
                            "Force Majeure (outages, cyber incidents, natural events, regulatory actions) se hone wale delays/failures ke liye responsibility nahi hogi.",
                        ]}
                    />
                </Section>

                <Section id="ip" title="Intellectual Property Rights">
                    <List
                        items={[
                            "Full payment se pehle saara work product (designs, code, content) company ki IP rahegi.",
                            "Full payment par SOW ke mutabik project‑specific deliverables ki usage license/ownership client ko transfer hogi.",
                            "Agency tooling, frameworks, reusable components, aur pre‑existing IP par company ki perpetual ownership rahegi.",
                            "Client warrant karta hai ki provided materials ke rights unke paas hain.",
                        ]}
                    />
                </Section>

                <Section id="disputes" title="Dispute Resolution">
                    <List
                        items={[
                            "Parties pehle 15 din tak amicable discussion/mediation attempt karenge.",
                            "Unresolved disputes Arbitration and Conciliation Act, 1996 ke tahat resolve honge; seat/city: [Your City], language: English/Hindi.",
                            "Courts at [Your City] shall have exclusive jurisdiction (replace with chosen city, e.g., Ahmedabad).",
                        ]}
                    />
                </Section>

                <Section id="termination" title="Termination and Modifications">
                    <List
                        items={[
                            "Either party convenience ke liye 15‑day written notice par terminate kar sakta hai; performed work/milestones ke pro‑rata charges due rahenge.",
                            "Material breach par 7‑day cure notice ke baad immediate termination possible hai.",
                            "Company kabhi bhi T&C update kar sakti hai; latest version website par publish hone par effective hoga.",
                        ]}
                    />
                </Section>

                <Section id="contact" title="Contact Information">
                    <p style={{ margin: 0 }}>
                        OptimaWebDesign<br />
                        Email: contact@optimawebdesign.in<br />
                        Phone: +91‑7990402535<br />
                        Address: HIrawadi, mahaveer nagar Ahmedabad, Gujarat.
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
                    © {new Date().getFullYear()} OptimaWebDesign. All rights reserved.
                </footer>
            </div>
        </main>
    );
}
