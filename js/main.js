function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('open');
}

// Close mobile menu when any nav link is tapped
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('mobile-menu');
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
    });
  });
});

const articleContent = {
  article1: {
    tag: 'Real Estate Tips', date: 'November 2024',
    title: 'Why Drone Photography Sells Homes 68% Faster in Sioux Falls',
    body: `
      <p>The Sioux Falls real estate market is competitive. With median home prices rising steadily and inventory tightening across Minnehaha and Lincoln counties, listing agents need every edge they can get. Drone photography has moved from a premium add-on to a standard expectation — and the numbers back it up.</p>
      <h2>The Data Behind Aerial Photography</h2>
      <p>According to data compiled by the National Association of Realtors, homes marketed with drone photography sell 68% faster than those without. In a market like Sioux Falls — where buyers are often relocating from Minneapolis, Omaha, or out of state — aerial video is frequently the first impression a buyer gets of a neighborhood, street context, and property layout.</p>
      <p>Out-of-state buyers can't drive by the listing first. A two-minute aerial flyover gives them context no ground photo can: proximity to parks, lot size relative to neighbors, driveway layout, views from the backyard, and surrounding neighborhood character.</p>
      <h2>What Aerial Shows That Ground Photos Can't</h2>
      <ul>
        <li>True lot size and property boundaries</li>
        <li>Proximity to parks, schools, and commercial areas</li>
        <li>Neighborhood quality and nearby infrastructure</li>
        <li>Acreage layout for rural and agricultural properties</li>
        <li>Roof condition — critical for buyers' insurance decisions</li>
        <li>Pond, treeline, and privacy features</li>
      </ul>
      <h2>The Sioux Falls Market Specifically</h2>
      <p>Sioux Falls has characteristics that make aerial photography especially powerful. The Big Sioux River corridor, the rapidly expanding Brandon and Tea suburbs, and the acreage properties in Lincoln County all benefit from aerial context. A $450,000 home on a half-acre in Harrisburg looks very different from above — and that difference converts browsers into scheduled showings.</p>
      <h2>What This Means for Your Next Listing</h2>
      <p>If you're listing in Sioux Falls, Brandon, Tea, or anywhere in SE South Dakota, drone photography is no longer a luxury. It's a competitive necessity. Prairie Sky Drones offers 48-hour turnaround on edited photos and video, starting at $149 for residential flyovers.</p>
    `
  }
};

function showArticle(id) {
  const data = articleContent[id] || {
    tag: 'Resource', date: '2024',
    title: 'Article Coming Soon',
    body: '<p>This article is being prepared. <a href="/contact" style="color:var(--sienna);">Contact us</a> for more information.</p>'
  };
  document.getElementById('article-tag').textContent = data.tag;
  document.getElementById('article-date').textContent = data.date;
  document.getElementById('article-title').textContent = data.title;
  document.getElementById('article-body').innerHTML = data.body;
  const list = document.getElementById('page-article-list');
  if (list) list.style.display = 'none';
  document.getElementById('page-article-single').classList.add('active');
  window.scrollTo(0, 0);
}

// Show success message if redirected back after form submission
if (new URLSearchParams(window.location.search).get('sent') === '1') {
  document.addEventListener('DOMContentLoaded', function () {
    const s = document.getElementById('form-success');
    if (s) {
      s.style.display = 'block';
      setTimeout(function () { s.style.display = 'none'; }, 8000);
    }
  });
}
