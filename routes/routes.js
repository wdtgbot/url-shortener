require('dotenv').config();
const express = require('express');
const router = express.Router();
const ua = require('universal-analytics');
const visitor = ua(process.env.GA_ACCID);

router.get('/run', async (req, res) => {
  await visitor.pageview('/run').send();
  await res.redirect('https://github.com');
});

router.get('/', async (req, res) => {
  await res.redirect('https://github.com/ankityadavhere');
});

router.get('/gh', async (req, res) => {
  await res.redirect('https://github.com/ankityadavhere');
});

router.get('/repo', async (req, res) => {
  await res.redirect('https://github.com/ankityadavhere/url-shortener');
});

router.get('/nd', async (req, res) => {
  await res.redirect('https://ankityadavhere.github.io/NotoDesk');
});

router.get('/ndc', async (req, res) => {
  await res.redirect('https://github.com/ankityadavhere/NotoDesk');
});

router.get('/wc', async (req, res) => {
  await res.redirect('https://whatsapp-node-clone.herokuapp.com');
});

router.get('/wcc', async (req, res) => {
  await res.redirect('https://github.com/ankityadavhere/whatsapp-clone');
});

router.get('/m', async (req, res) => {
  await res.redirect('https://ankityadavhere.github.io/musix/');
});

router.get('*', async (req, res) => {
  await res.render('404');
});

module.exports = router;
