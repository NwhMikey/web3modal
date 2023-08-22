import { css } from 'lit'

export default css`
  :host {
    display: block;
    width: 72px;
    height: 72px;
    border: 8px solid var(--wui-overlay-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    border: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--local-color-5) 31.25%,
      var(--local-color-3) 51.56%,
      var(--local-color-2) 65.63%,
      var(--local-color-1) 82.29%,
      var(--local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    border: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`