
import { LitElement, html, css } from 'lit';
import './image-transition.js';
import './tshirt-customizer.js';

class PodApp extends LitElement {
  static styles = css\`
    :host {
      display: block;
    }
  \`;

  render() {
    return html\`
      <h1>Customizable POD T-Shirt Store</h1>
      <image-transition></image-transition>
      <tshirt-customizer></tshirt-customizer>
    \`;
  }
}

customElements.define('pod-app', PodApp);
