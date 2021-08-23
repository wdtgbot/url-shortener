# ⚡ Custom NodeJs URL Shortener [![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/ankityadavhere/url-shortener)

[![issues](https://img.shields.io/github/issues/ankityadavhere/url-shortener)](https://github.com/ankityadavhere/url-shortener/issues)
[![license](https://img.shields.io/github/license/ankityadavhere/url-shortener)](https://github.com/ankityadavhere/url-shortener/blob/master/LICENSE)
[![stars](https://img.shields.io/github/stars/ankityadavhere/url-shortener?style=social)](https://github.com/ankityadavhere/url-shortener/stargazers)

> It Shortens links, that's all.

## The Problem

URL shorteners out there in market provides random, hard to remember links that nobody can remember.
With this you can create easy to remember links! Enjoy!

Also it has google analytics 👀

## Prerequisites

- NodeJs, ExpressJs
- Google analytics account
- [Deta](https://deta.sh) account
- a short domain if you want (like mine https://ankt.me)

## Running locally

- Fork the repo

- Clone the repo in your local machine

- Installing dependencies

```bash
npm install
```

OR

```bash
yarn
```

- Running the development server

```bash
npm start dev
```

OR

```bash
yarn start dev
```

**One can route as many URLs in [routes](https://github.com/ankityadavhere/url-shortener/blob/main/routes/routes.js)**

## Analytics

I've used [google analytics](https://analytics.google.com), get your own gtag script and paste in into [404 page](https://github.com/ankityadavhere/url-shortener/blob/main/views/404.hbs) and [analytics page](https://github.com/ankityadavhere/url-shortener/blob/main/views/analytics.hbs)

> Else it'll show up in my account lol

## Deployment

- Get the deta access token and put it as a secret in the repo as `DETA_TOKEN`

I've deployed it to a [Deta Micro](https://docs.deta.sh/docs/micros/about)

we'll use this [action](https://github.com/marketplace/actions/deploy-to-deta) for automatic deployment to deta 👀, so put the access token first!

The Deta deployment URL is a bit long, it's recommended to have a custom domain (preferably a shorter domain) like the one I've https://ankt.me, this domain can be linked with Deta deployment

That's it! whoosh!

## Deploy to Deta

[![Deploy](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy)
