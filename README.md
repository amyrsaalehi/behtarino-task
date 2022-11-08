This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

to run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3008](http://localhost:3008) with your browser to see the result.

---

and to run the cypress e2e testing server:

```bash
npm run cypress
# or
yarn cypress
```

## Preferable Structure

I used `Atomic Design` for directory structure.

## Preferable Technology

Using `ISR` technology instead of `SSR` or `SSG` is much more better because it's as fast as `SSG` and dynamic like `SSR`.

## Make it better

These options would make the app better:

- Using `Context API` instead of drilling props. (It's not approptiate for now because when we want to use this we should have SPA version of our app and loading components and etc...)
- Add toggle button for `next-themes` to set theme state (with its persistance).
- Add `next-pwa` in `next.config.js` file to have caching. (and offline support by adding `_offline.jsx` file in `pages` directory).
- Add Snackbar for notify users to their own actions. (such as copied in clipboard!)

## Deploy on Vercel

You can check out [Live Demo](https://github.com/vercel/next.js/).

## PAY ATTENTION!

I wanted to add `cypress e2e` testing but for installtion (`npm run cypress:install`) it seems that needs VPN!
but these Items should be tested:

- Home page should have exactly 20 products as the `cy` intercepts the `GET` request from fakestoreapi. (`data-testid=PRODUCT_CARD`)
- Product detail pages should contains exactly the same Title as the `cy` intercepts the `GET` request from fakestoreapi. (`data-testid=PRODUCT_TITLE`)
- Other infos about Product details can be tested but it's optional for more assurance!
