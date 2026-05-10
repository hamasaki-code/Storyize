import { ArrowRight, ImageIcon, Sparkles, WandSparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_380px] md:items-center md:py-24 lg:px-8">
        <div>
          <Badge className="h-7 rounded-full bg-primary-soft px-3 text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Soft Creative Studio
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-foreground md:text-6xl">
            文章や画像から、インスタ映えするストーリー画像をAI生成。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            告知、日常投稿、作品公開に使えるSNS画像を、用途と雰囲気を選ぶだけで手軽に作れます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-full bg-[linear-gradient(135deg,#EC4899_0%,#8B5CF6_55%,#38BDF8_100%)] px-6 text-base font-semibold text-white shadow-lg shadow-pink-500/20 hover:opacity-95"
            >
              <a href="#generator">
                無料で生成する
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full bg-white px-6 text-base font-medium"
            >
              <a href="#gallery">作例を見る</a>
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[340px]">
          <div className="aspect-[9/16] rounded-[32px] border border-white/70 bg-[linear-gradient(160deg,#FCE7F3_0%,#EDE9FE_52%,#E0F2FE_100%)] p-6 shadow-2xl shadow-pink-500/15">
            <div className="flex h-full flex-col justify-between rounded-[24px] bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-muted-foreground">
                  Storyize
                </span>
                <WandSparkles
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-primary">New episode</p>
                <p className="mt-2 text-3xl font-semibold leading-tight text-foreground">
                  週末ライブのお知らせ
                </p>
              </div>
              <div className="rounded-3xl bg-white p-4 text-sm leading-6 text-muted-foreground">
                画像生成後のプレビューはここに表示されます。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="generator"
        className="mx-auto grid w-full max-w-6xl scroll-mt-24 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-8"
      >
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
              <ImageIcon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">生成フォーム</h2>
              <p className="text-sm text-muted-foreground">
                次の実装単位で入力フォームを追加します。
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-xl font-semibold">プレビュー</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Instagram Story の9:16プレビュー領域をここに展開します。
          </p>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-semibold">作例</h2>
      </section>
      <section
        id="how-it-works"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-semibold">使い方</h2>
      </section>
      <section
        id="pricing"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-semibold">料金</h2>
      </section>
      <section
        id="faq"
        className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-semibold">FAQ</h2>
      </section>
    </main>
  );
}
