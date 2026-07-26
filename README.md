# @lucid-softworks/after

Invoke a function on and after a non-negative call threshold. Earlier calls
return `undefined`.

```ts
import { after } from "@lucid-softworks/after";

const announceReady = after(3, announce);
```
