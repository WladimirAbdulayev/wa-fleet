import "./Styles/tech.css";

export default function tech() {
  return (
    <div className="tech-container">
      <section className="tech-card">
        <h2 className="tech-text">Map</h2>
        <div className="tech-image-container">
          <img className="tech-image" alt="react" src={"/deco/leaflet.png"} />
        </div>
        <div className="tech-image-container">
          <img
            className="tech-image"
            alt="react"
            src={"/deco/reactleaflet.svg"}
          />
        </div>
      </section>
      <section className="tech-card">
        <h2 className="tech-text">App</h2>
        <div className="tech-image-container">
          <img className="tech-image" alt="react" src={"/deco/react.png"} />
        </div>
      </section>
      {/* <section className="tech-card">
        <h2>Deployment</h2>
      </section> */}
      <section className="tech-card">
        <h2 className="tech-text">Deploy</h2>
        <div className="tech-image-container tech-cardF">
          <img className="tech-image" alt="react" src={"/deco/firebase.png"} />
        </div>
      </section>
    </div>
  );
}
