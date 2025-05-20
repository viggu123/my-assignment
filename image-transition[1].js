
import { LitElement, html, css } from 'lit';

class ImageTransition extends LitElement {
  static styles = css\`
    div {
      width: 100%;
      height: 300px;
      background-image: url('https://tympanus.net/Development/RepeatingImageTransition/img/1.jpg');
      background-size: cover;
      animation: fadeIn 5s ease-in-out infinite;
    }

    @keyframes fadeIn {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }
  \`;

  render() {
    return html\`<div></div>\`;
  }
}

customElements.define('image-transition', ImageTransition);
