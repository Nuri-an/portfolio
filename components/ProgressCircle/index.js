class ProgressCircle extends HTMLElement {
  constructor() {
    super();

    this.build();
  }

  build() {
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(this.styles());
    shadowRoot.appendChild(this.setStyle());

    const container = this.createContainer();
    const boxCircular = this.createBoxCircular();
    const progress = this.createRightProgress();
    const fillLeftProgress = this.createLeftFillProgress();
    const hiddenLeftProgress = this.createHiddenLeftProgress();
    const containerValue = this.createContainerValue();
    const descriptionSkill = this.createDescriptionSkill();

    boxCircular.appendChild(progress);
    boxCircular.appendChild(fillLeftProgress);
    boxCircular.appendChild(hiddenLeftProgress);
    boxCircular.appendChild(containerValue);

    container.appendChild(boxCircular);
    container.appendChild(descriptionSkill);

    shadowRoot.appendChild(container);
  }

  createContainer() {
    const circular = document.createElement("div");
    circular.classList.add("circular");

    return circular;
  }

  createBoxCircular() {
    const boxCircular = document.createElement("div");
    boxCircular.classList.add("boxCircular");

    return boxCircular;
  }

  createRightProgress() {
    const progressRight = document.createElement("div");
    progressRight.classList.add("progress-circle");
    progressRight.classList.add("progress-right");

    return progressRight;
  }

  createLeftFillProgress() {
    const progressLeft = document.createElement("div");
    progressLeft.classList.add("progress-circle");
    progressLeft.classList.add("progress-left");

    return progressLeft;
  }

  createHiddenLeftProgress() {
    const progressHiddenLeft = document.createElement("div");
    progressHiddenLeft.classList.add("hidden-progress");

    return progressHiddenLeft;
  }

  createContainerValue() {
    const cantainerValue = document.createElement("div");
    cantainerValue.classList.add("container-value");
    cantainerValue.innerHTML = this.getAttribute("data-value");

    return cantainerValue;
  }

  createDescriptionSkill() {
    const descriptionSkill = document.createElement("p");
    descriptionSkill.classList.add("description-skill");
    descriptionSkill.innerText = this.getAttribute("data-description");

    return descriptionSkill;
  }

  setStyle() {
    // cria a tag style
    const styles = document.createElement("style");

    const dataValue = this.getAttribute("data-value");
    const value = (360 / 100) * ((dataValue * 100) / 5) - 180;

    // representa que será um conteúdo de texto
    styles.textContent = `
      .progress-right {
        z-index: 3;
        clip: rect(140px, ${value > 2 ? "280px" : "140px"}, 280px, 0px);
        transform: rotate(${value}deg);
        animation: fill ease-in-out 3s;
      }
      
      .progress-left {
        z-index: 1;
        clip: rect(0px, 280px, 140px, 0px);
        transform: ${value > 2 ? `rotate(${value}deg)` : "initial"};
        animation: ${value > 2 ? "fillLeft ease-in-out 3s" : "auto"};
      }
      
      @keyframes fill{
        0% {
          transform: rotate(${value > 2 ? "-108deg" : "-198deg"});
        }
        100% {
          transform: rotate(${value}deg);
        }
      }
      
      
      @keyframes fillLeft{
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(${value}deg);
        }
      }
    `;

    return styles;
  }

  styles() {
    var cssId = "progressCircle";

    var link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "components/ProgressCircle/styles.css";
    link.media = "all";

    return link;
  }
}

customElements.define("progress-circle", ProgressCircle);
