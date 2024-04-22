document.getElementById('facebook').addEventListener('click', function() {
  window.open('https://www.facebook.com/share?url=' + encodeURIComponent(window.location.href), '_blank');
});

document.getElementById('twitter').addEventListener('click', function() {
  window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href), '_blank');
});

document.getElementById('instagram').addEventListener('click', function() {
  window.open('https://www.instagram.com/', '_blank');
});

document.getElementById('linkedin').addEventListener('click', function() {
  window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href), '_blank');
});

document.getElementById('website').addEventListener('click', function() {
  window.open(window.location.href, '_blank');
});
