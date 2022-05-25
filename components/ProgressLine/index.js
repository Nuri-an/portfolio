class ProgressLine extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(this.styles());
    shadowRoot.appendChild(this.setStyle());

    const progressLineBox = this.createBox();
    shadowRoot.appendChild(progressLineBox);
  }

  createBox() {
    const progressLineBox = document.createElement("div");

    return progressLineBox;
  }

  setStyle() {
    const styles = document.createElement("style");

    return styles;
  }

  styles() {
    var cssId = "progressLine";

    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "components/ProgressLine/styles.css";
    link.media = "all";

    return link;
  }
}

customElements.define("progress-line", ProgressLine);
