# Let's compare

## Raw CSS

```css
.button,
.button-error {
  /* common style */
}

.button-error,
.is-error {
  /* bonus red style */
}
```

```html
<button class="button">Click me</button>
<button class="button is-error">Error</button>
<button class="button-error">Error</button>
```

## SCSS

```css
.button { /* common */}
.button-error {
  @extends(.button);
  /* red */
}
```

```css
.button, .button-error { /* common */ }
.button-error { /* red */ }
```

## CSS Modules

```css
/* Source code */
.button { /* common */ }
.button-error {
  composes: button;
  /* red */
}
```

```css
/* Generated CSS */
.style__button__zj45 { /* common */ }
.style__button-error__34az9 { /* red */ }
```

```javascript
// React component
import styles from './style.css';
render() {
  return (<button styleName={styles['button-error']}>Error</button>);
}
```

```html
<!-- HTML result -->
<button class="style__button__zj45 style__button-error__34az9">Error</html>
```

### Impots

```css
/* colors.css */
.primary {
  color: #720;
}
.secondary {
  color: #777;
}
```

```css
/* submit-button.css */
.common { /* font-sizes, padding, border-radius */ }
.primary {
  composes: common;
  composes: primary from "./colors.css";
}
```

```css
/* Generated colors.css */
.shared_colors__primary__fca929 {
  color: #720;
}
.shared_colors__secondary__acf292 {
  color: #777;
}
```

```css
/* Generated submit-button.css */
.components_submit_button__common__abc5436 { /* font-sizes, padding, border-radius */ }
.components_submit_button__primary__def6547 {}
```

```javascript
import styles from './submit-button.css';
render() {
  return (<button styleName={styles.primary}>Click me</button>)
}
```

```html
<button class="shared_colors__primary__fca929
               components_submit_button__common__abc5436
               components_submit_button__primary__def6547">
  Click me
</button>
```

#### Beyond

```css
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}

.article {
  composes: flex vertical centered from "./layout.css";
}

.masthead {
  composes: serif bold 48pt centered from "./typography.css";
  composes: paragraph-margin-below from "./layout.css";
}

.body {
  composes: max720 paragraph-margin-below from "layout.css";
  composes: sans light paragraph-line-height from "./typography.css";
}
```
