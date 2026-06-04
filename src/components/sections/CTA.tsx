import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

export default function CTA() {
  return (
    <section id="enquire" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <span className="font-script block text-6xl text-gold">Au plaisir</span>
          <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
            Arrange a private viewing
          </h2>
          <OrnamentDivider className="mt-6" />
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
            Our concierge welcomes enquiries for private viewings, bespoke
            commissions, and trade. Each conversation begins, as it always has,
            in person.
          </p>

          <div className="mt-12">
            <a
              href="mailto:concierge@maisonclassique.com"
              className="classic-frame inline-block bg-navy px-12 py-5 caption-label text-ivory transition-colors duration-500 hover:bg-navy-soft"
            >
              Request an Appointment
            </a>
          </div>

          <p className="mt-8 text-ink/55 italic">
            concierge@maisonclassique.com · +44 (0)20 7000 0000
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
