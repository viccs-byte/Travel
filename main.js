const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <div class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>Travel Explorer</h1>
        <p>Discover amazing places, tours, and adventures.</p>
        <a class="cta" href="#destinations">Explore Destinations</a>
      </div>
    </div>
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div class="destinations-list">
        <div class="destination-card">
          <img src="https://ugc.same-assets.com/YdN_MGLteBV-5eJ4BjgNZGv7LW0JKfMw.jpeg" alt="Tropical Island" />
          <h3>Bali</h3>
        </div>
        <div class="destination-card">
          <img src="https://ugc.same-assets.com/IrKRcLzeR5pkQ1xDamtwiGyzg6NM0KGw.jpeg" alt="Paris" />
          <h3>Paris</h3>
        </div>
        <div class="destination-card">
          <img src="https://ugc.same-assets.com/Pt98g1TLr6-mpdhSwSEiOBbAPvotdPSf.jpeg" alt="Maldives Beach" />
          <h3>Maldives</h3>
        </div>
        <div class="destination-card">
          <img src="https://ugc.same-assets.com/XtxpWlhPurNWzHjCFyif8HYoDaXCY69H.jpeg" alt="Santorini" />
          <h3>Santorini</h3>
        </div>
      </div>
    </section>
    <footer>
      <p>&copy; 2025 Travel Explorer. All rights reserved.</p>
    </footer>
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', Arial, sans-serif;
        color: #222;
        background: #fafbfc;
      }
      .hero {
        position: relative;
        min-height: 70vh;
        background-image: url('https://ugc.same-assets.com/mWHRccPzET92LWDh1dzv8YgrBymvAc1c.jpeg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .hero .overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.35);
        z-index: 1;
      }
      .hero-content {
        position: relative;
        z-index: 2;
        color: #fff;
      }
      .hero h1 {
        font-size: 3rem;
        margin-bottom: 0.7em;
      }
      .hero p {
        font-size: 1.5rem;
        margin-bottom: 1.2em;
      }
      .cta {
        padding: 0.75em 2em;
        background: #3f8efc;
        color: #fff;
        text-decoration: none;
        border-radius: 24px;
        font-size: 1.1rem;
        transition: background 0.2s;
        box-shadow: 0 4px 20px rgba(40,100,255,.2);
        border: none;
        cursor: pointer;
        outline: none;
      }
      .cta:hover {
        background: #4873b7;
      }
      section#destinations {
        max-width: 1100px;
        margin: 3rem auto;
        padding: 1rem;
      }
      section#destinations h2 {
        text-align: center;
        font-size: 2.25rem;
        margin-bottom: 2rem;
      }
      .destinations-list {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }
      .destination-card {
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 2px 18px 0 rgba(40,60,140,0.07);
        padding: 0 0 1.5rem 0;
        transition: box-shadow 0.18s;
        overflow: hidden;
      }
      .destination-card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
      .destination-card h3 {
        text-align: center;
        margin: 1rem 0 0 0;
        color: #265aa0;
        font-size: 1.25rem;
      }
      footer {
        text-align: center;
        font-size: 1rem;
        padding: 2rem 0;
        background: #f3f8fa;
        color: #333;
      }
      @media (max-width: 700px) {
        .hero h1 { font-size: 2.1rem; }
        .hero p { font-size: 1.07rem; }
        section#destinations h2 { font-size: 1.5rem; }
      }
    </style>
  `;
}