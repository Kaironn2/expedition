import { useTranslations } from "next-intl";
import { profile } from "@/data/profile";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="mx-auto flex max-w-5xl justify-center px-6 py-8 md:px-10">
        <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
          &copy; {year} {profile.name}. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
