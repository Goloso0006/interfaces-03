export default function Home() {
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
    <main className="seat-page">
      <section className="top-bar">
        <button className="icon-btn" aria-label="Back">
          &lt;
        </button>
        <p className="pager">0/2</p>
        <button className="icon-btn" aria-label="Settings">
          o
        </button>
      </section>

      <section className="route-card">
        <div className="city-block">
          <p className="iata">MUC</p>
          <p className="city">Munich</p>
        </div>
        <div className="route-line" aria-hidden>
          --------&gt;
        </div>
        <div className="city-block city-end">
          <p className="iata">LXR</p>
          <p className="city">London</p>
        </div>
      </section>

      <section className="legend">
        <span className="legend-item">
          <span className="seat free mini" aria-hidden />
          Free
        </span>
        <span className="legend-item">
          <span className="seat yours mini" aria-hidden />
          Yours
        </span>
        <span className="legend-item">
          <span className="seat taken mini" aria-hidden />
          Taken
        </span>
      </section>

      <section className="seat-areas">
        <article className="seat-section">
          <h2>Business Class</h2>
          <div className="section-grid">
            {businessSeats.map((row) => (
              <div className="seat-row" key={`business-${row.row}`}>
                <div className="seat-group">
                  {row.left.map((seat) => (
                    <button
                      key={`business-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="row-number">{row.row}</span>
                <div className="seat-group">
                  {row.right.map((seat) => (
                    <button
                      key={`business-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
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

        <article className="seat-section">
          <h2>First Class</h2>
          <div className="section-grid">
            {firstClassSeats.map((row) => (
              <div className="seat-row" key={`first-${row.row}`}>
                <div className="seat-group triple">
                  {row.left.map((seat) => (
                    <button
                      key={`first-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="row-number">{row.row}</span>
                <div className="seat-group">
                  {row.right.map((seat) => (
                    <button
                      key={`first-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
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

        <article className="seat-section">
          <h2>Economy Class</h2>
          <div className="section-grid">
            {economySeats.map((row) => (
              <div className="seat-row" key={`economy-${row.row}`}>
                <div className="seat-group triple">
                  {row.left.map((seat) => (
                    <button
                      key={`economy-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
                      aria-label={`Row ${row.row} Seat ${seat.code}`}
                    >
                      {seat.code}
                    </button>
                  ))}
                </div>
                <span className="row-number">{row.row}</span>
                <div className="seat-group triple">
                  {row.right.map((seat) => (
                    <button
                      key={`economy-${row.row}-${seat.code}`}
                      className={`seat ${seat.status}`}
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

      <section className="checkout-bar">
        <div className="price-wrap">
          <p className="total-label">Total</p>
          <p className="total-value">$0</p>
        </div>
        <button className="checkout-btn">Select a seat</button>
      </section>
    </main>
  );
}
