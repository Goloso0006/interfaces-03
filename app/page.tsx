export default function Home() {
  type SeatStatus = "free" | "yours" | "taken";

  const seatStyles: Record<SeatStatus, string> = {
    free: "border-2 border-[#ef7058] text-[#ef7058] bg-white",
    yours: "border-2 border-[#ef7058] text-white bg-[#ef7058]",
    taken: "border-2 border-[#e5e7ef] text-[#b9bfca] bg-[#e5e7ef]",
  };

  const seatBaseClass =
    "grid h-7.5 w-7.5 place-items-center rounded-[8px] text-[13px] font-semibold sm:h-8.5 sm:w-8.5 sm:rounded-[9px] sm:text-[15px]";

  const desktopSeatBaseClass =
    "grid h-10 w-10 place-items-center rounded-[10px] text-base font-semibold";

  const businessSeats = [
    {
      row: 1,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
      ],
      right: [
        { code: "C", status: "taken" },
        { code: "D", status: "taken" },
      ],
    },
    {
      row: 2,
      left: [
        { code: "A", status: "taken" },
        { code: "B", status: "free" },
      ],
      right: [
        { code: "C", status: "free" },
        { code: "D", status: "taken" },
      ],
    },
    {
      row: 3,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
      ],
      right: [
        { code: "C", status: "free" },
        { code: "D", status: "free" },
      ],
    },
    {
      row: 4,
      left: [
        { code: "A", status: "taken" },
        { code: "B", status: "taken" },
      ],
      right: [
        { code: "C", status: "taken" },
        { code: "D", status: "free" },
      ],
    },
  ] as const;

  const firstClassSeats = [
    {
      row: 1,
      left: [
        { code: "A", status: "taken" },
        { code: "B", status: "free" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "free" },
      ],
    },
    {
      row: 2,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "free" },
      ],
    },
    {
      row: 3,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "taken" },
        { code: "C", status: "taken" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "free" },
      ],
    },
    {
      row: 4,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
        { code: "C", status: "taken" },
      ],
      right: [
        { code: "D", status: "taken" },
        { code: "E", status: "free" },
      ],
    },
    {
      row: 5,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "taken" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "taken" },
        { code: "E", status: "taken" },
      ],
    },
    {
      row: 6,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "free" },
      ],
    },
  ] as const;

  const economySeats = [
    {
      row: 7,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "free" },
        { code: "C", status: "taken" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "taken" },
        { code: "F", status: "free" },
      ],
    },
    {
      row: 8,
      left: [
        { code: "A", status: "taken" },
        { code: "B", status: "free" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "taken" },
        { code: "E", status: "free" },
        { code: "F", status: "free" },
      ],
    },
    {
      row: 9,
      left: [
        { code: "A", status: "free" },
        { code: "B", status: "taken" },
        { code: "C", status: "free" },
      ],
      right: [
        { code: "D", status: "free" },
        { code: "E", status: "free" },
        { code: "F", status: "taken" },
      ],
    },
  ] as const;

  return (
    <main className="min-h-screen bg-[#fdf2ef] p-3 lg:p-0">
      <div className="mx-auto flex min-h-screen w-full max-w-115 flex-col gap-4 bg-linear-to-b from-white to-[#fef7f4] px-4 py-4 sm:px-5 sm:py-5 lg:hidden">
      <section className="flex items-center justify-between">
        <button
          className="grid size-10 place-items-center rounded-xl bg-[#f3f4f9] text-[#b9bfca]"
          aria-label="Back"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p className="text-2xl font-semibold tracking-wide text-[#b9bfca]">0/2</p>
        <button
          className="grid size-10 place-items-center rounded-xl bg-[#f3f4f9] text-[#5f6880]"
          aria-label="Settings"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
          >
            <path
              d="M12 8.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 15a1 1 0 00.2 1.1l.1.1a1.2 1.2 0 010 1.7l-.7.7a1.2 1.2 0 01-1.7 0l-.1-.1a1 1 0 00-1.1-.2 1 1 0 00-.6.9V20a1.2 1.2 0 01-1.2 1.2h-1a1.2 1.2 0 01-1.2-1.2v-.2a1 1 0 00-.6-.9 1 1 0 00-1.1.2l-.1.1a1.2 1.2 0 01-1.7 0l-.7-.7a1.2 1.2 0 010-1.7l.1-.1a1 1 0 00.2-1.1 1 1 0 00-.9-.6H4a1.2 1.2 0 01-1.2-1.2v-1A1.2 1.2 0 014 11.6h.2a1 1 0 00.9-.6 1 1 0 00-.2-1.1l-.1-.1a1.2 1.2 0 010-1.7l.7-.7a1.2 1.2 0 011.7 0l.1.1a1 1 0 001.1.2h.1a1 1 0 00.6-.9V4a1.2 1.2 0 011.2-1.2h1A1.2 1.2 0 0114.5 4v.2a1 1 0 00.6.9 1 1 0 001.1-.2l.1-.1a1.2 1.2 0 011.7 0l.7.7a1.2 1.2 0 010 1.7l-.1.1a1 1 0 00-.2 1.1v.1a1 1 0 00.9.6h.2A1.2 1.2 0 0121.2 11v1a1.2 1.2 0 01-1.2 1.2h-.2a1 1 0 00-.9.6V15z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </section>

      <section className="flex items-center justify-between gap-3 rounded-[28px] bg-[#86a1c4] px-5 py-4 text-white shadow-[0_18px_24px_-22px_rgba(80,108,146,0.95)]">
        <div className="flex flex-col">
          <p className="text-[32px] leading-none font-bold tracking-wide sm:text-[42px]">MUC</p>
          <p className="mt-1 text-[22px] leading-tight text-[#dde7f5] sm:text-[35px]">Munich</p>
        </div>

        <div className="mx-2 flex min-w-0 flex-1 items-center text-[#e7edf8]" aria-hidden>
          <span className="h-0 w-full border-t-2 border-dashed border-current opacity-90" />
          <svg
            viewBox="0 0 24 24"
            className="mx-2 size-5 shrink-0"
            fill="currentColor"
          >
            <path d="M2 12l8.4-.8L20.6 4l1.4 1.4-7 8.1 7 8.1-1.4 1.4-10.2-7.2L2 16z" />
          </svg>
          <span className="h-0 w-full border-t-2 border-dashed border-current opacity-90" />
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[32px] leading-none font-bold tracking-wide sm:text-[42px]">LXR</p>
          <p className="mt-1 text-[22px] leading-tight text-[#dde7f5] sm:text-[35px]">London</p>
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-3 text-[18px] font-medium text-[#7f899f] sm:gap-4 sm:text-[22px]">
        <span className="inline-flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#ef7058] bg-white" aria-hidden />
          Free
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#ef7058] bg-[#ef7058]" aria-hidden />
          Yours
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#e5e7ef] bg-[#e5e7ef]" aria-hidden />
          Taken
        </span>
      </section>

      <section className="grid gap-5 rounded-t-[180px] bg-[radial-gradient(140%_100%_at_50%_0%,#ffffff_0%,#fbfbfe_70%,#f7f8fc_100%)] px-3 pt-8 pb-5 sm:px-4">
        <article>
          <h2 className="mb-3 text-center text-[26px] font-bold text-foreground sm:text-[31px]">Business Class</h2>
          <div className="grid gap-3">
            {businessSeats.map((row) => (
              <div className="grid grid-cols-[auto_24px_auto] items-center justify-center gap-x-3 sm:grid-cols-[auto_28px_auto] sm:gap-x-4" key={`business-${row.row}`}>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.left.map((seat) => (
                    <button
                      key={`business-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="text-center text-[18px] font-medium text-[#b9bfca] sm:text-[22px]">{row.row}</span>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.right.map((seat) => (
                    <button
                      key={`business-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article>
          <h2 className="mb-3 text-center text-[26px] font-bold text-foreground sm:text-[31px]">First Class</h2>
          <div className="grid gap-3">
            {firstClassSeats.map((row) => (
              <div className="grid grid-cols-[auto_24px_auto] items-center justify-center gap-x-3 sm:grid-cols-[auto_28px_auto] sm:gap-x-4" key={`first-${row.row}`}>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.left.map((seat) => (
                    <button
                      key={`first-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="text-center text-[18px] font-medium text-[#b9bfca] sm:text-[22px]">{row.row}</span>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.right.map((seat) => (
                    <button
                      key={`first-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <article>
          <h2 className="mb-3 text-center text-[26px] font-bold text-foreground sm:text-[31px]">Economy Class</h2>
          <div className="grid gap-3">
            {economySeats.map((row) => (
              <div className="grid grid-cols-[auto_24px_auto] items-center justify-center gap-x-3 sm:grid-cols-[auto_28px_auto] sm:gap-x-4" key={`economy-${row.row}`}>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.left.map((seat) => (
                    <button
                      key={`economy-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="text-center text-[18px] font-medium text-[#b9bfca] sm:text-[22px]">{row.row}</span>
                <div className="grid auto-cols-max grid-flow-col gap-2.5">
                  {row.right.map((seat) => (
                    <button
                      key={`economy-${row.row}-${seat.code}`}
                      className={`${seatBaseClass} ${seatStyles[seat.status]}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-auto flex items-center gap-3 pb-1">
        <div className="flex flex-col">
          <p className="text-base font-semibold text-[#b9bfca]">Total</p>
          <p className="-mt-1 text-[38px] leading-none font-extrabold text-foreground sm:text-[46px]">$0</p>
        </div>
        <button className="h-14 flex-1 rounded-full bg-[#efe6e1] text-[22px] font-semibold text-[#b0a69f] sm:h-15.5 sm:text-[29px]">
          Select a seat
        </button>
      </section>
      </div>

      <div className="mx-auto hidden min-h-screen w-full max-w-365 grid-cols-[19rem_minmax(42rem,1fr)_23rem] overflow-hidden rounded-[36px] bg-white shadow-[0_22px_70px_-40px_rgba(58,70,93,0.5)] lg:grid">
        <aside className="flex flex-col gap-7 rounded-r-[30px] bg-linear-to-b from-[#edf2fb] to-[#dfe8f8] p-6">
          <div className="flex items-center gap-3 text-[#8d98ad]">
            <button
              className="grid size-9 place-items-center rounded-xl bg-white/75 text-[#aeb7c8]"
              aria-label="Back"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="text-[30px] font-semibold">Flight details</p>
          </div>

          <div className="rounded-[26px] bg-white p-6 shadow-[0_12px_24px_-20px_rgba(20,38,67,0.8)]">
            <div className="mb-5 flex items-center gap-4 text-foreground">
              <span className="grid size-10 place-items-center rounded-[12px] bg-[#fdf2ef] text-[#ef7058]">
                <span className="size-3 rounded-[2px] bg-[#ef7058]" />
              </span>
              <h2 className="text-[40px] leading-none font-bold">Business Class</h2>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-6 text-[#9ea8bd]">
              <div>
                <p className="text-[26px] font-semibold">Seat</p>
                <p className="mt-2 text-[44px] leading-none font-bold text-foreground">-</p>
              </div>
              <div>
                <p className="text-[26px] font-semibold">Seat</p>
                <p className="mt-2 text-[44px] leading-none font-bold text-foreground">-</p>
              </div>
            </div>
            <p className="text-[35px] text-[#8f9bb2]">
              Price: <span className="font-semibold text-[#ef7058]">$0</span>
            </p>
          </div>

          <div className="space-y-3 text-foreground">
            <div>
              <p className="text-[56px] leading-none font-extrabold">MUC</p>
              <p className="mt-2 text-[40px] text-[#8a97af]">Munich</p>
            </div>

            <div className="relative pt-6 pb-4 text-[#ef7058]">
              <svg viewBox="0 0 220 74" className="h-[74px] w-full" fill="none">
                <path
                  d="M8 58C58 10 146 10 210 58"
                  stroke="currentColor"
                  strokeOpacity="0.45"
                  strokeWidth="2.5"
                  strokeDasharray="8 9"
                />
                <circle cx="8" cy="58" r="4" fill="currentColor" />
                <circle cx="210" cy="58" r="4" fill="currentColor" />
                <path d="M194 24l9 10 6-4-4 7 5 7-8-5-9 8 5-10-6-8z" fill="currentColor" />
              </svg>
              <span className="absolute right-0 top-11 text-[22px] text-[#8f9bb2]">2h 10m</span>
            </div>

            <div>
              <p className="text-[56px] leading-none font-extrabold">LXR</p>
              <p className="mt-2 text-[40px] text-[#8a97af]">London</p>
            </div>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-white px-5 py-4">
              <p className="text-[20px] font-semibold text-[#adb7c9]">DATE</p>
              <p className="text-[36px] leading-none font-bold text-foreground">Dec 1, 2026</p>
            </div>
            <div className="rounded-3xl bg-white px-5 py-4">
              <p className="text-[20px] font-semibold text-[#adb7c9]">FLIGHT</p>
              <p className="text-[36px] leading-none font-bold text-foreground">No 25</p>
            </div>
          </div>
        </aside>

        <section className="flex flex-col border-x border-[#eef0f6] px-8 pt-7 pb-4">
          <header className="mb-4 flex flex-col items-center gap-4">
            <div className="flex items-center gap-5 text-[#b8bfce]">
              <p className="text-[32px] font-semibold">0/2</p>
              <span className="h-2 w-64 rounded-full bg-[#f1ece8]" />
            </div>

            <div className="flex items-center gap-7 text-[29px] font-medium text-[#7f899f]">
              <span className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#ef7058] bg-white" aria-hidden />
                Available
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#ef7058] bg-[#ef7058]" aria-hidden />
                Selected
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-[5px] border-2 border-[#e5e7ef] bg-[#e5e7ef]" aria-hidden />
                Taken
              </span>
            </div>
          </header>

          <div className="relative flex-1 overflow-hidden rounded-[42px] border border-[#ecf0f7] bg-linear-to-b from-[#fefefe] to-[#f2f5fb] px-10 pt-16">
            <div className="absolute right-2 top-10 h-2/5 w-1 rounded-full bg-[#ef7058]/40" />

            <div className="space-y-8">
              <article>
                <h2 className="mb-4 text-center text-[40px] font-bold text-foreground">Business Class</h2>
                <div className="grid gap-3">
                  {businessSeats.map((row) => (
                    <div className="grid grid-cols-[auto_34px_auto] items-center justify-center gap-x-5" key={`desktop-business-${row.row}`}>
                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.left.map((seat) => (
                          <button
                            key={`desktop-business-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>

                      <span className="text-center text-[31px] font-medium text-[#b9bfca]">{row.row}</span>

                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.right.map((seat) => (
                          <button
                            key={`desktop-business-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="mb-4 text-center text-[40px] font-bold text-foreground">First Class</h2>
                <div className="grid gap-3">
                  {firstClassSeats.map((row) => (
                    <div className="grid grid-cols-[auto_34px_auto] items-center justify-center gap-x-5" key={`desktop-first-${row.row}`}>
                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.left.map((seat) => (
                          <button
                            key={`desktop-first-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>

                      <span className="text-center text-[31px] font-medium text-[#b9bfca]">{row.row}</span>

                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.right.map((seat) => (
                          <button
                            key={`desktop-first-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article>
                <h2 className="mb-4 text-center text-[40px] font-bold text-foreground">Economy Class</h2>
                <div className="grid gap-3 pb-8">
                  {economySeats.map((row) => (
                    <div className="grid grid-cols-[auto_34px_auto] items-center justify-center gap-x-5" key={`desktop-economy-${row.row}`}>
                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.left.map((seat) => (
                          <button
                            key={`desktop-economy-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>

                      <span className="text-center text-[31px] font-medium text-[#b9bfca]">{row.row}</span>

                      <div className="grid auto-cols-max grid-flow-col gap-3">
                        {row.right.map((seat) => (
                          <button
                            key={`desktop-economy-${row.row}-${seat.code}`}
                            className={`${desktopSeatBaseClass} ${seatStyles[seat.status]}`}
                            aria-label={`Row ${row.row} Seat ${seat.code}`}
                          >
                            {seat.code}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <aside className="flex flex-col bg-linear-to-b from-white to-[#fef9f7] px-8 py-8">
          <h2 className="mb-5 text-[42px] font-bold text-foreground">Your selection</h2>

          <div className="grid h-28 place-items-center rounded-[24px] border-2 border-dashed border-[#f6c6bd] text-center text-[35px] leading-tight text-[#b7b3b2]">
            <p>Pick up to 2 seats from the cabin map</p>
          </div>

          <div className="mt-auto space-y-3 text-[37px] text-[#8896ad]">
            <div className="flex items-center justify-between">
              <span>Seats</span>
              <span className="font-semibold text-foreground">None</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes &amp; fees</span>
              <span className="font-semibold text-foreground">$0</span>
            </div>
            <div className="my-2 h-px bg-[#ebeaf0]" />
            <div className="flex items-end justify-between">
              <span>Total</span>
              <span className="text-[66px] leading-none font-extrabold text-foreground">$0</span>
            </div>
          </div>

          <button className="mt-4 h-15.5 rounded-full bg-[#efe6e1] text-[40px] font-semibold text-[#b0a69f]">
            Select a seat
          </button>
        </aside>
      </div>
    </main>
  );
}
