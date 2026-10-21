import { useTranslations } from "next-intl";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { ContactLinks } from "./ContactLinks";

export function Contact() {
  const t = useTranslations("nav");

  return (
    <Section id="contact">
      <Heading eyebrow="VII." as="h2">
        {t("contact")}
      </Heading>
      <ContactLinks links={profile.socials} />
    </Section>
  );
}
