

export const metadata = {
  title: "Privacy Policy | OptimaWebDesign",
  description:
    "Privacy Policy for OptimaWebDesign explaining what data is collected, why it is used, how it’s protected, user rights under India’s DPDP Act, data sharing, retention, and contact details.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | OptimaWebDesign",
    description:
      "Learn how OptimaWebDesign collects, uses, protects, and retains personal data, and how to exercise privacy rights.",
    url: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  const today = new Date();
  const effectiveDate = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(today);

  const quickLinks = [
    { href: "#intro", label: "Overview" },
    { href: "#scope", label: "Scope & Updates" },
    { href: "#info-we-collect", label: "Data We Collect" },
    { href: "#how-we-use", label: "How We Use" },
    { href: "#lawful-basis", label: "Lawful Basis" },
    { href: "#sharing", label: "Sharing" },
    { href: "#security", label: "Security" },
    { href: "#retention", label: "Retention" },
    { href: "#rights", label: "Your Rights" },
    { href: "#cookies", label: "Cookies" },
    { href: "#intl", label: "International Transfers" },
    { href: "#children", label: "Children" },
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
            Privacy Policy
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

        <Section id="intro" title="Introduction">
          <p>
            This Privacy Policy explains how OptimaWebDesign (“Company”, “we”, “our”) collects, uses, shares, and protects personal data in connection with our website, communications, and delivery of web‑design and related digital services. By using our services, this policy is accepted in addition to the Terms & Conditions. 
          </p>
        </Section>

        <Section id="scope" title="Scope and updates">
          <List
            items={[
              "This policy applies to visitors, prospects, and clients interacting with our website, emails, forms, and project workflows.",
              "We may update this policy from time to time; the latest version will be posted on this page with the effective date.",
              "If material changes impact rights materially, reasonable notice will be provided via our website or email.",
            ]}
          />
        </Section>

        <Section id="info-we-collect" title="Information we collect">
          <List
            items={[
              "<strong>Contact and business details:</strong> name, email, phone, company name, role, and address submitted via forms or emails.",
              "<strong>Project and content inputs:</strong> brand assets, copy, images, and requirements shared for project execution.",
              "<strong>Technical/usage data:</strong> device, browser, IP, timestamps, pages visited, referring URLs, limited analytics and error logs.",
              "<strong>Account/access data:</strong> credentials or tokens shared for hosting, DNS, CMS, or third‑party services (stored or exchanged via secure channels).",
              "<strong>Billing data:</strong> invoice details, transaction references, GST details where applicable; card/banking data is handled by payment gateways.",
            ]}
          />
        </Section>

        <Section id="how-we-use" title="How we use information">
          <List
            items={[
              "Provide and manage services: proposals, project setup, delivery, QA, deployment, and support.",
              "Communicate status, invoices, updates, and respond to inquiries.",
              "Improve quality: troubleshooting, analytics, and enhancing UX and reliability.",
              "Comply with legal obligations, tax/GST requirements, and enforce agreements.",
              "Prevent fraud, abuse, security incidents, and ensure platform integrity.",
            ]}
          />
        </Section>

        <Section id="lawful-basis" title="Lawful basis (India DPDP principles)">
          <List
            items={[
              "Consent for specific communications or marketing and for processing optional data supplied.",
              "Performance of a contract to deliver services under the SOW/agreements.",
              "Legitimate interests such as service improvement, security, and troubleshooting balanced with privacy.",
              "Legal obligations including record‑keeping, taxation, and responding to lawful requests.",
            ]}
          />
        </Section>

        <Section id="sharing" title="Sharing and disclosure">
          <List
            items={[
              "Service providers: hosting, email, analytics, error monitoring, payment gateways, and subcontractors under confidentiality and security obligations.",
              "Third‑party tools chosen for the project (e.g., CMS, plugins, CDNs) where access is required to deliver the scope.",
              "Legal and compliance: when required by law, to protect rights, or in connection with a business transaction.",
              "We do not sell personal data. Limited marketing tools may use cookies/identifiers with consent settings where applicable.",
            ]}
          />
        </Section>

        <Section id="security" title="Security practices">
          <List
            items={[
              "Reasonable technical and organizational measures: access controls, least‑privilege, encryption in transit, and secure credential exchange.",
              "Vendor due diligence for key processors and periodic review of access permissions.",
              "Incident response: reasonable efforts to investigate, mitigate, and notify as required by applicable laws.",
            ]}
          />
        </Section>

        <Section id="retention" title="Data retention">
          <List
            items={[
              "Personal data retained no longer than necessary for the purposes described, considering legal, accounting, or reporting requirements.",
              "Project artifacts may be archived for limited periods for support or legal purposes; clients may request deletion subject to legal holds.",
              "Backups and logs have separate limited retention windows and are purged on rolling schedules.",
            ]}
          />
        </Section>

        <Section id="rights" title="Your privacy rights">
          <List
            items={[
              "Access, correction, and deletion requests can be made using the contact details below.",
              "Withdraw consent for optional processing or marketing at any time; prior processing remains lawful.",
              "Objection or restriction requests will be assessed in line with applicable law and contractual needs.",
              "Data portability for provided data where technically feasible and applicable.",
            ]}
          />
        </Section>

        <Section id="cookies" title="Cookies and tracking">
          <List
            items={[
              "Essential cookies enable core site functionality and cannot be disabled via consent tools.",
              "Analytics and performance cookies help improve the site; controls may be offered via a cookie banner or browser settings.",
              "Third‑party embeds (e.g., fonts, videos, maps) may set their own cookies per their policies.",
            ]}
          />
        </Section>

        <Section id="intl" title="International data transfers">
          <List
            items={[
              "Vendors or servers may be located outside India; safeguards such as contractual clauses and vendor assessments are used where appropriate.",
              "By using our services, cross‑border processing necessary to provide the services may occur with reasonable protections.",
            ]}
          />
        </Section>

        <Section id="children" title="Children’s data">
          <List
            items={[
              "Services are not targeted at children under 18.",
              "If a child’s personal data is suspected to be collected inadvertently, reach out to request deletion.",
            ]}
          />
        </Section>

        <Section id="contact" title="Contact and grievance">
          <p style={{ margin: 0 }}>
            OptimaWebDesign<br />
            Email: contact@optimawebdesign.in<br />
            Phone: +91‑7990402535<br />
            Address: HIrawadi, mahaveer nagar Ahmedabad, Gujarat.<br />
            Grievance/Privacy contact: You may email the above address with subject “Privacy Request — [Describe Request]”.
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
