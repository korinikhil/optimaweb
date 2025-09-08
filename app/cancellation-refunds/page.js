// app/(legal)/cancellation-refunds/page.jsx
// Works with Next.js 15+ App Router as a Server Component (no event handlers)

export const metadata = {
  title: "Cancellation & Refunds | Optima WebDesign",
  description:
    "Official Cancellation & Refunds policy for Optima WebDesign covering cancellations, eligibility, timelines, non-refundable items, and the refund process.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/cancellation-refunds" },
  openGraph: {
    title: "Cancellation & Refunds | Optima WebDesign",
    description:
      "Understand cancellation windows, refund timelines, non-refundable items, and how to request a refund at Optima WebDesign.",
    url: "/cancellation-refunds",
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
      // hover via CSS class below
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

export default function CancellationRefundsPage() {
  const today = new Date();
  const effectiveDate = new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(today);

  const quickLinks = [
    { href: "#scope", label: "Scope" },
    { href: "#cancellations", label: "Cancellations" },
    { href: "#eligibility", label: "Refund eligibility" },
    { href: "#timelines", label: "Refund timelines" },
    { href: "#non-refundable", label: "Non‑refundable" },
    { href: "#process", label: "How to request" },
    { href: "#prorated", label: "Prorated refunds" },
    { href: "#chargebacks", label: "Chargebacks" },
    { href: "#exceptions", label: "Exceptions" },
    { href: "#contact", label: "Contact" },
    { href: "#jurisdiction", label: "Jurisdiction" },
  ];

  return (
    <main 
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(1200px 600px at 20% 0%, rgba(126,166,255,0.08), transparent), radial-gradient(1000px 500px at 100% 20%, rgba(242,159,255,0.07), transparent), #0A0F1E",
        padding: "40px 18px",
        paddingTop:"8rem",

        color: "#E6ECFF",
        scrollBehavior: "smooth", // CSS native smooth scroll
      }}
    >
      {/* lightweight CSS-in-JS for hover effects */}
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
            Cancellation & Refunds
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

        <Section id="intro" title="Overview">
          <p>
            This policy explains how cancellations work, when refunds apply, and the timelines and methods used for processing refunds for Optima WebDesign. Please read it along with our Terms of Service and any project-specific agreements or proposals.
          </p>
        </Section>

        <Section id="scope" title="Scope">
          <List
            items={[
              "Applies to website design, development, UI/UX, branding deliverables, retainers, and managed hosting under Optima WebDesign.",
              "Covers both fixed‑fee projects and time‑and‑materials engagements unless a signed contract specifies otherwise.",
              "For third‑party tools, plugins, domains, or licenses, vendor policies may apply in addition to this document.",
            ]}
          />
        </Section>

        <Section id="cancellations" title="Cancellations">
          <List
            items={[
              "<strong>Client‑initiated:</strong> Cancellation requests must be emailed from the contracting email to optimawebdesigns12@gmail.com with project name, invoice/PO, and reason.",
              "<strong>Company‑initiated:</strong> We may cancel due to non‑payment, scope breach, illegal content, abuse, or prolonged inactivity (≥15 days) after written notice.",
              "<strong>Notice window:</strong> For retainers/subscriptions, provide ≥7 days’ notice before the next billing cycle to avoid renewal charges.",
            ]}
          />
        </Section>

        <Section id="eligibility" title="Refund eligibility">
          <List
            items={[
              "<strong>Discovery/Strategy fees:</strong> Non‑refundable once sessions or deliverables have commenced.",
              "<strong>Deposits/booking fees:</strong> Non‑refundable after 72 hours from payment or once project work begins, whichever occurs first.",
              "<strong>Milestone payments:</strong> Refundable only for unperformed, clearly scoped work not yet started.",
              "<strong>Retainers/subscriptions:</strong> Unused future periods can be refunded if canceled before renewal cut‑off; used portions are non‑refundable.",
              "<strong>Hosting/maintenance:</strong> Prorated refund may apply for annual plans if canceled within the first 14 days, less setup and consumed months.",
            ]}
          />
        </Section>

        <Section id="timelines" title="Refund timelines">
          <List
            items={[
              "Refunds, if approved, are initiated within 7–10 business days.",
              "Credit appears within 5–15 business days depending on the payment method and card issuer/bank.",
              "Refunds are issued to the original payment method; alternate routes are not supported except where required by law.",
            ]}
          />
        </Section>

        <Section id="non-refundable" title="Non‑refundable items">
          <List
            items={[
              "Third‑party fees: domains, SSL, premium themes/plugins, stock assets, licenses, app fees.",
              "Completed deliverables, approved milestones, and hours already logged/consumed.",
              "Expedited/rush fees, setup/activation fees, and change requests outside of the original scope.",
            ]}
          />
        </Section>

        <Section id="process" title="How to request a refund">
          <List
            items={[
              "Email optimawebdesigns12@gmail.com with subject “Refund Request — [Project/Invoice #]”.",
              "Include: contract email, payment reference, reason, and relevant attachments (proof, screenshots, signed SoW).",
              "We review scope, activity logs, and deliverables; we may request access to staging, repositories, or communications.",
              "Outcome is communicated by email with approval/denial and the calculated refundable amount if applicable.",
            ]}
          />
        </Section>

        <Section id="prorated" title="Prorated refunds & calculations">
          <List
            items={[
              "For annual hosting/maintenance canceled in the first 14 days: refund = paid amount − setup fee − value of consumed months (rounded up).",
              "For milestones: refundable portion equals billable value of work not started or demonstrably unused.",
              "Currency and taxes: refunds are net of applicable taxes already remitted; FX differences, gateway fees, or bank charges may affect the final received amount.",
            ]}
          />
        </Section>

        <Section id="chargebacks" title="Disputes & chargebacks">
          <List
            items={[
              "Please contact us first to resolve any billing concerns; unauthorized chargebacks may lead to account suspension and debt collection for delivered work.",
              "We provide documentation (contracts, SoW, approvals, time logs, deliverables) to payment processors in dispute resolution.",
              "Late invoices may incur reactivation fees and interest as set out in the Master Services Agreement (if applicable).",
            ]}
          />
        </Section>

        <Section id="exceptions" title="Exceptions & statutory rights">
          <List
            items={[
              "Where consumer protection or local law grants additional rights, those rights prevail to the extent required.",
              "Force majeure events impacting delivery are handled per contract terms; refunds may not apply where performance is excused.",
              "Any bespoke exceptions must be in a signed addendum superseding the relevant clauses here.",
            ]}
          />
        </Section>

        <Section id="contact" title="Contact">
          <p style={{ margin: 0 }}>
            Billing & Refunds Desk — Optima WebDesign<br />
            Email: optimawebdesigns12@gmail.com<br />
            Address: Hirawadi, Mahaveer Nagar
          </p>
        </Section>

        <Section id="jurisdiction" title="Governing law & venue">
          <p style={{ margin: 0 }}>
            This policy is governed by the laws of India. Exclusive jurisdiction and venue lie with competent courts at the location specified in the governing agreement or, if unspecified, the courts having territorial jurisdiction where services are performed or contracted, subject to applicable law.
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
