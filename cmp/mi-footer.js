class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Brito Bonilla Elizabeth
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
