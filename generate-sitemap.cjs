const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');
const path = require('path');

// Define your base URL
const baseUrl = 'https://rcfh.vercel.app';  // Change to your website's domain

// Define the list of routes (can also be dynamically generated)
const routes = [
  '/',
  '/services',
  '/teams',
  '/va-ninja'
];

// Generate the sitemap
const sitemapStream = new SitemapStream({ hostname: baseUrl });
routes.forEach((route) => {
  sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.8 });
});
sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });
