import { useLocale, useTranslations } from "next-intl";
import { HeaderBrand } from "@/components/layout/HeaderBrand";
import { HeaderMobileMenu } from "@/components/layout/HeaderMobileMenu";
import { HeaderNavigation } from "@/components/layout/HeaderNavigation";
import { HeaderScrollFrame } from "@/components/layout/HeaderScrollFrame";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import type { Locale } from "@/types/portfolio";

const SECTIONS = ["about", "experience", "skills", "projects", "academic", "contact"] as const;

export function Header() {
  const locale = useLocale() as Locale;
  const t = useTranslations("nav");
  const language = useTranslations("language");
  const items = SECTIONS.map((id) => ({ id, label: t(id) }));
  const activeItems = [{ id: "top" }, ...items];

  return (
    <HeaderScrollFrame>
      <div className="k-header-inner">
        <HeaderBrand activeItems={activeItems} />
        <HeaderNavigation items={items} />
        <div className="k-header-actions">
          <LanguageToggle ariaLabel={language("toggle")} locale={locale} className="k-language" />
          <HeaderMobileMenu items={items} />
        </div>
      </div>
    </HeaderScrollFrame>
  );
}
