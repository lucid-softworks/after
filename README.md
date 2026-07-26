# @lucid-softworks/after

Invoke a function on and after a non-negative call threshold. Earlier calls
return `undefined`.

```ts
import { after } from "@lucid-softworks/after";

const announceReady = after(3, (message: string) => console.log(message));

announceReady("Waiting");
announceReady("Still waiting");
announceReady("Ready"); // Logs "Ready".
```
