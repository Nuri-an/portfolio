class ProgressLine extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    // insere a tag link com estilos
    shadowRoot.appendChild(this.styles());
    // insere a tag style com animações customizáveis
    shadowRoot.appendChild(this.setStyle());

    const progressLineBox = this.createBox();
    const description = this.createDescription();
    const progressLine = this.createProgressLine();

    progressLineBox.appendChild(description);
    progressLineBox.appendChild(progressLine);

    shadowRoot.appendChild(progressLineBox);
  }

  createBox() {
    // cria uma tag div
    const progressLineBox = document.createElement("div");
    // adiciona nessa tag uma class, para o estilo
    progressLineBox.classList.add("progress-line-box");

    //retorna a tag criada
    return progressLineBox;
  }

  createDescription() {
    // cria uma tag div
    const description = document.createElement("div");
    // adiciona nessa tag uma class, para o estilo
    description.classList.add("progress-description");

    // 1-Iniciante; 2-Básico; 3-Intermadiário; 4-Proeficiente; 5-Fluente
    const dataValue = this.getAttribute("data-value");
    console.log(dataValue);
    const valueLanguage =
      dataValue == 1
        ? "Iniciante"
        : dataValue == 2
        ? "Básico"
        : dataValue == 3
        ? "Intermadiário"
        : dataValue == 4
        ? "Proeficiente"
        : dataValue == 5
        ? "Fluente"
        : "";

    description.innerHTML = `<p class="language"> ${this.getAttribute(
      "data-language"
    )} </p><p class="language-value"> ${valueLanguage} </p>`;

    //retorna a tag criada
    return description;
  }

  createProgressLine() {
    // cria uma tag div
    const progressLine = document.createElement("div");
    // adiciona nessa tag uma class, para o estilo
    progressLine.classList.add("progress-line");
    progressLine.classList.add("animate-progress");

    return progressLine;
  }

  setStyle() {
    // cria a tag style
    const styles = document.createElement("style");

    const dataValue = this.getAttribute("data-value");
    const value = (448.42 / 100) * ((dataValue * 100) / 5);

    // representa que será um conteúdo de texto
    styles.textContent = `
      .animate-progress {
        width: ${value}px;
        animation: scale ease-in-out 3s;
      }

      @keyframes scale {
        0% {
          width: 89.684px;
        }
        100% {
          width: ${value}px;
        }
      }
    `;

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
