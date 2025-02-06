#

## !!steps Before

!duration 260

```ts ! wagmi-config.ts
import { http, createConfig } from '@wagmi/core';
import { zksyncSepoliaTestnet } from '@wagmi/core/chains';
import { walletConnect } from '@wagmi/connectors';

export const config = createConfig({
  chains: [zksyncSepoliaTestnet],
  connectors: [injected()], 
  transports: {
    [zksyncSepoliaTestnet.id]: http(),
  },
});
```

## !!steps After

!duration 270

```ts ! wagmi-config.ts
import { http, createConfig } from '@wagmi/core';
import { zksyncSepoliaTestnet } from '@wagmi/core/chains';
import { walletConnect } from '@wagmi/connectors';
import { zksyncConnector } from './connector.ts';
// !mark[4:32] 110
// npm i zksync-sso
export const config = createConfig({
  chains: [zksyncSepoliaTestnet],
  // !mark[3:32] 180
  connectors: [zksyncConnector],
  transports: {
    [zksyncSepoliaTestnet.id]: http(),
  },
});
```

## !!steps Connector

!duration 350

```ts ! connector.ts
import { zksyncSsoConnector } from 'zksync-sso/connector';

const zksyncConnector = zksyncSsoConnector({
  // !mark[3:10] 90
  session: {
      // !mark[5:13] 90
    feeLimit: parseEther("0.1"),
    transfers: [
      {
        // !mark[9:40] 200
        to: receiver,
        // !mark[9:40] 200
        valueLimit: parseEther("0.1"),
      },
    ],
  },
});
```
