import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const PORTUGUESE_COUNTRIES = new Set(["BR", "PT"]);

function hasLocalePrefix(pathname: string): boolean {
  return routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function resolveDefaultLocale(headers: Headers): (typeof routing.locales)[number] {
  const country =
    headers.get("x-vercel-ip-country") ??
    headers.get("cf-ipcountry") ??
    headers.get("x-country-code");

  if (country && PORTUGUESE_COUNTRIES.has(country.toUpperCase())) return "pt";

  const acceptLanguage = headers.get("accept-language")?.toLowerCase() ?? "";
  if (/\bpt(?:-br|-pt)?\b/.test(acceptLanguage)) return "pt";

  return "en";
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!hasLocalePrefix(pathname)) {
    const locale = resolveDefaultLocale(request.headers);
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(url);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
