"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/paper-icon-button";
import "@polymer/paper-styles/default-theme.js";

class HTToolabarMenuButton extends LitElement {
  static styles = css`<style>
    :host {
        display: block;
        position: relative;
        box-sizing: border-box;
    }

    paper-icon-button {
      color: var(--secondary-text-color);
    }
  </style>`;

  render() {
    return html`
      <iron-iconset-svg size="24" name="ht-toolbar-menu-button-icons">
    <svg>
        <defs>
           <g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
        </defs>
    </svg>
</iron-iconset-svg>
<paper-icon-button icon="ht-toolbar-menu-button-icons:menu" @click="${e => {
      this.toggle(e);
    }}" alt="Menu button"></paper-icon-button>
  `;
  }

  toggle(e) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("toggle", {
        bubbles: false
      })
    );
  }
}

customElements.define("ht-toolbar-menu-button", HTToolabarMenuButton);
