# Emojus

Emojus is singular of emoji, right?

Ever wanted to enrich your GitHub comments with some less generic emoji?
https://emojus.com is a website which exposes special emoji for the emoji
connoisseur to whom only the best emoji are good enough. To use an emoji in a
GitHub comment simply find an emoji on http://emojus.com that you like and copy
the code for that emoji into your comment.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to add new emojis

Simply put a .png image into the public/emoji folder and create a PR for it.

## How to deploy

Anything that's merged into master is automatically deployed, provided that all
the checks pass.
