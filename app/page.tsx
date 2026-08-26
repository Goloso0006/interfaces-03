export default function Home() {
  type SeatStatus = "free" | "yours" | "taken";

  const seatStyles: Record<SeatStatus, string> = {
    free: "border-2 border-[#ef7058] text-[#ef7058] bg-white",
    yours: "border-2 border-[#ef7058] text-white bg-[#ef7058]",
    taken: "border-2 border-[#e5e7ef] text-[#b9bfca] bg-[#e5e7ef]",
  };

  const seatBaseClass =
    "grid h-7.5 w-7.5 place-items-center rounded-[8px] text-[13px] font-semibold sm:h-8.5 sm:w-8.5 sm:rounded-[9px] sm:text-[15px]";

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
    <main className="mx-auto flex min-h-screen w-full max-w-115 flex-col gap-4 bg-linear-to-b from-white to-[#fef7f4] px-4 py-4 sm:px-5 sm:py-5">
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
    </main>
  );
}
