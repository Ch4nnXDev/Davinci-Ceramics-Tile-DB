'use client'
import { Bot, Calculator, GalleryHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
export default function FloaterNav() {

  const router = useRouter();

  return (
    <nav
      className="
        fixed bottom-5 left-1/2 z-50
        -translate-x-1/2

        flex items-center gap-2

        rounded-3xl
        border border-white/40

        bg-white/10
        px-3 py-3

        shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        backdrop-blur-2xl
        backdrop-saturate-150

        ring-1 ring-white/10

        transition-all duration-300

        hover:bg-white/15
        hover:shadow-[0_12px_50px_rgba(0,0,0,0.18)]
      "
    >
      {/* Products */}
      <button
        className="
          group/item
          flex items-center gap-2.5
          rounded-2xl
          border border-transparent

          px-4 py-3.5

          text-black

          transition-all duration-300

          hover:border-white/30
          hover:bg-white/25
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]

          hover:px-5
        "
        onClick={() => router.push("/")}
      >
        <GalleryHorizontal
          size={23}
          strokeWidth={1.8}
        />

        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap

            text-sm font-medium

            opacity-0

            transition-all duration-300

            group-hover/item:max-w-24
            group-hover/item:opacity-100
          "
        >
          Products
        </span>
      </button>

      {/* AI Agent */}
      <button
        className="
          group/item
          flex items-center gap-2.5
          rounded-2xl
          border border-transparent

          px-4 py-3.5

          text-black

          transition-all duration-300

          hover:border-white/30
          hover:bg-white/25
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]

          hover:px-5
        "
        onClick={() => router.push("/agent")}
      >
        <Bot
          size={23}
          strokeWidth={1.8}
        />

        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap

            text-sm font-medium

            opacity-0

            transition-all duration-300

            group-hover/item:max-w-24
            group-hover/item:opacity-100
          "
        >
          AI Agent
        </span>
      </button>

      {/* Calculator */}
      <button
        className="
          group/item
          flex items-center gap-2.5
          rounded-2xl
          border border-transparent

          px-4 py-3.5

          text-black

          transition-all duration-300

          hover:border-white/30
          hover:bg-white/25
          hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]

          hover:px-5
        "
        onClick={() => router.push("/calculator")}
      >
        <Calculator
          size={23}
          strokeWidth={1.8}

        />
        

        <span
          className="
            max-w-0
            overflow-hidden
            whitespace-nowrap

            text-sm font-medium

            opacity-0

            transition-all duration-300

            group-hover/item:max-w-28
            group-hover/item:opacity-100
          "
        >
          Calculator
        </span>
      </button>
    </nav>
  );
}

