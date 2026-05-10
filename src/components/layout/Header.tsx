import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#gallery", label: "作例" },
  { href: "/#how-it-works", label: "使い方" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Storyize ホーム"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-pink-500/20">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-normal text-foreground">
            Storyize
          </span>
        </Link>

        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="h-10 rounded-full bg-[linear-gradient(135deg,#EC4899_0%,#8B5CF6_55%,#38BDF8_100%)] px-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:opacity-95 sm:px-5"
        >
          <Link href="/#generator">無料で生成</Link>
        </Button>
      </div>
    </header>
  );
}
