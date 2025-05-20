
import { LitElement, html, css } from 'lit';

class TshirtCustomizer extends LitElement {
  static styles = css\`
    .customizer {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    select {
      margin: 0.5rem 0;
      padding: 0.5rem;
      width: 100%;
    }

    .preview {
      margin-top: 1rem;
      text-align: center;
    }

    .preview div {
      height: 200px;
      border: 1px dashed #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--shirt-color, #fff);
    }
  \`;

  static properties = {
    width: { type: String },
    height: { type: String },
    color: { type: String }
  };

  constructor() {
    super();
    this.width = 'M';
    this.height = 'Regular';
    this.color = '#ffffff';
  }

  updateColor(e) {
    this.color = e.target.value;
    this.style.setProperty('--shirt-color', this.color);
  }

  render() {
    return html\`
      <div class="customizer">
        <label>Width:</label>
        <select @change="\${e => this.width = e.target.value}">
          <option>S</option>
          <option selected>M</option>
          <option>L</option>
        </select>

        <label>Height:</label>
        <select @change="\${e => this.height = e.target.value}">
          <option>Short</option>
          <option selected>Regular</option>
          <option>Tall</option>
        </select>

        <label>Color:</label>
        <select @change="\${this.updateColor}">
          <option value="#ffffff" selected>White</option>
          <option value="#000000">Black</option>
          <option value="#ff0000">Red</option>
          <option value="#0000ff">Blue</option>
        </select>

        <div class="preview">
          <div>Preview: \${this.color}</div>
        </div>
      </div>
    \`;
  }
}

customElements.define('tshirt-customizer', TshirtCustomizer);
