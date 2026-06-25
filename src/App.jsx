import "./App.css";

export default function App() {
  return (
    <main>
      <nav>
        <strong>MenuPad Local</strong>
        <a href="mailto:YOUR_EMAIL@gmail.com?subject=Tablet menu demo">Get a Demo</a>
      </nav>

      <section className="hero">
        <p className="eyebrow">For local restaurants</p>
        <h1>Tablet menus without replacing your POS.</h1>
        <p className="sub">
          We help restaurants set up simple tablet menus, item updates, photos,
          and service requests — without forcing a full payment or POS migration.
        </p>
        <div className="actions">
          <a className="button" href="mailto:YOUR_EMAIL@gmail.com?subject=Tablet menu demo">
            Get a free demo
          </a>
          <a className="secondary" href="#fit">See if it fits</a>
        </div>
      </section>

      <section className="proof">
        <p>
          Built for restaurants that want a cleaner customer experience now,
          while keeping their current ordering and payment workflow.
        </p>
      </section>

      <section className="card">
        <h2>What we provide</h2>
        <div className="grid">
          <div>
            <h3>Tablet menu display</h3>
            <p>Categories, item photos, descriptions, prices, and specials.</p>
          </div>
          <div>
            <h3>Fast menu updates</h3>
            <p>Change prices, mark items unavailable, and update specials without reprinting menus.</p>
          </div>
          <div>
            <h3>Service requests</h3>
            <p>Let guests request water, help, the check, or staff attention from the table.</p>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="card">
          <h2>Good fit</h2>
          <ul>
            <li>You already have a POS you want to keep.</li>
            <li>You want digital menus without a major system migration.</li>
            <li>You want local setup and simple support.</li>
            <li>You want a low-risk pilot before changing operations.</li>
          </ul>
        </div>

        <div className="card" id="fit">
          <h2>Not a fit</h2>
          <ul>
            <li>You need full payroll, accounting, or inventory software.</li>
            <li>You need enterprise multi-location POS replacement.</li>
            <li>You need payment processing on day one.</li>
            <li>You want a giant corporate platform instead of a lightweight setup.</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Simple setup</h2>
        <div className="steps">
          <div><span>1</span><p>Send us your menu.</p></div>
          <div><span>2</span><p>We build your tablet menu demo.</p></div>
          <div><span>3</span><p>You test it in the restaurant.</p></div>
          <div><span>4</span><p>We launch and support changes.</p></div>
        </div>
      </section>

      <section className="card pricing">
        <h2>Start with a pilot</h2>
        <p className="price">Pilot setup starting at $___</p>
        <p>
          Monthly support available for menu changes, troubleshooting, and future feature upgrades.
          Payment integration may be added later, but the first version keeps your current payment workflow.
        </p>
      </section>

      <section className="cta">
        <h2>Want to see it with your menu?</h2>
        <p>Send us your menu and we’ll show a simple demo version.</p>
        <a className="button" href="mailto:YOUR_EMAIL@gmail.com?subject=Tablet menu demo">
          Get a free demo
        </a>
      </section>
    </main>
  );
}