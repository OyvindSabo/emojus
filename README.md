# Emojus

Emojus is singular of emoji, right?

Ever wanted to enrich your GitHub comments with some less generic emoji?
https://emojus.com is a website which exposes special emoji for the emoji
connoisseur to whom only the best emoji are good enough. To use an emojus in a
GitHub comment simply find an emojus on http://emojus.com that you like and copy
the code for that emojus into your comment.

## How to add new emoji

Simply put a .png or .gif image into the public/emoji folder and create a PR for it.

## Emoji style guide

- The image should be 512px x 512px.
- For visual consistency I recommend using 10px line thickness in illustrations.
- It should be possible to identify what the image is displaying when rendered in 18px x 18px.

## Run emojus.com locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to deploy

Anything that's merged into master is automatically deployed, provided that all
the checks pass.
