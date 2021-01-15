import "./Styles/orga.css";

// https://www.youtube.com/watch?v=qm0IfG1GyZU

export default function orga() {
  return (
    <section className="orga-container">
      <h2>01. Super Centered - place-items: center</h2>
      <div className="parent">
        <div className="child" contentEditable>
          :)
        </div>
      </div>
      <h2>02. The Deconstructed Pancake - flex: 0 1 baseWidth</h2>
      <div className="parent-white">
        <div className="box-green">1</div>
        <div className="box-green">2</div>
        <div className="box-green">3</div>
      </div>

      <h2>03. Sidebar Says - grid-template-columns: minmax(min, max)...</h2>
      <div className="parent-yellow">
        <div className="section-yellow" contentEditable>
          Min: 150px / Max: 25%
        </div>
        <div className="section-purple" contentEditable>
          This element takes the second grid position (1fr), meaning it takes up
          the rest of the remaining space.
        </div>
      </div>

      <h2>04. Pancake Stack - grid-template-rows: auto 1fr auto</h2>
      <div className="parent-black">
        <header className="blue-section" contentEditable>
          Header
        </header>
        <main className="coral-section" contentEditable>
          Main
        </main>
        <footer className="purple-section" contentEditable>
          Footer Content
        </footer>
      </div>

      <h2>
        05. Classic Holy Grail Layout grid-template: auto 1fr auto / auto 1fr
        auto
      </h2>
      <div className="parent-brown">
        <header className="header pink-section">Header</header>
        <div className="left-side blue-section" contentEditable>
          Left Sidebar
        </div>
        <main className="main section-coral" contentEditable>
          Main Content
        </main>
        <div className="right-side yellow-section" contentEditable>
          Right Sidebar
        </div>
        <footer className="footer green-section">Footer</footer>
      </div>

      <h2>06. 12-Span Grid grid-template-columns: repeat(12, 1fr)</h2>

      <div className="parent-12-span">
        <div className="span-12 green-section">Span 12</div>
        <div className="span-6 coral-section">Span 6</div>
        <div className="span-4 blue-section">Span 4</div>
        <div className="span-2 yellow-section">Span 2</div>
      </div>

      <h2>
        07. RAM (Repeat, Auto, Minmax) grid-template-columns: repeat(auto-fit,
        minmax(base, 1fr))
      </h2>
      <div className="par parent-rem">
        <div className="box pink-section">1</div>
        <div className="box purple-section">2</div>
        <div className="box blue-section">3</div>
        <div className="box green-section">4</div>
      </div>

      <h2>08. Line Up - justify-content: space-between</h2>
      <div className="par parent-space">
        <div className="card yellow-section">
          <h3>Title - Card 1</h3>
          <p contentEditable>
            Medium length description with a few more words here.
          </p>
          <div className="visual pink-section"></div>
        </div>
        <div className="card yellow-section">
          <h3>Title - Card 2</h3>
          <p contentEditable>
            Long Description. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
          <div className="visual blue-section"></div>
        </div>
        <div className="card yellow-section">
          <h3>Title - Card 3</h3>
          <p contentEditable>Short Description.</p>
          <div className="visual green-section"></div>
        </div>
      </div>

      <h2>09. Clamping My Style - clamp(min, actual, max)</h2>
      <div className="par parent-clamp">
        <div className="card-clamp purple-section">
          <h1>Title Here</h1>
          <div className="visual yellow-section"></div>
          <p>
            Descriptive Text. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sed est error repellat veritatis.
          </p>
        </div>
      </div>
    </section>
  );
}
