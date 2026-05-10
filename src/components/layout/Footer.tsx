import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label="Storyize ホーム"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold text-foreground">
              Storyize
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            文章や画像から、Instagram Story 向けのSNS画像をすばやく作るAIスタジオです。
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav
            aria-label="フッターナビゲーション"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-muted-foreground"
          >
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © 2026 Storyize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
