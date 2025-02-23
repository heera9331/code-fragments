## Loader5

```css
.loader5 {
  width: 50px;
  aspect-ratio: 1;
  --_c: no-repeat radial-gradient(farthest-side, #000000 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}

@keyframes l7 {
  to {
    transform: rotate(0.5turn);
  }
}
```

```tsx
import "./loader5.css";
import React from "react";

const Loader5 = () => {
  return <div className="m-4 loader5"></div>;
};

export default Loader5;
```
