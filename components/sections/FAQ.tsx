import { FAQ as FAQ_ITEMS } from "@/lib/content";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-x">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            badge="FAQ"
            title="Perguntas frequentes"
            subtitle="Ainda com dúvida? Fale com a gente — respondemos por e-mail rapidinho."
            align="left"
            className="lg:sticky lg:top-32 lg:self-start"
          />
          <Reveal>
            <Accordion items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
