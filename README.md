# nuxtcn.web3hacker.world

We translate the [Nuxt Docs](https://github.com/nuxt/nuxt/tree/main/docs) into Chinese here.

It will auto sync the docs to the `content/en` folder, then we make manual translate into the `content/zh` folder.

## Setup

```bash [init projects]
git clone git@github.com:Web3Hacker-World/nuxtcn.web3hacker.world.git
take _github && git clone git@github.com:nuxt/nuxt.git
cd ../nuxtcn.web3hacker.world
pnpm i --shamefully-hoist
```

```bash [sync docs]
pnpm sync
```

```bash [run the docs site local]
pnpm dev
```


