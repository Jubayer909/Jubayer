// Add event listeners to social media icons
document.querySelectorAll('.icon').forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.preventDefault();
    var platform = this.id;
    switch (platform) {
      case 'facebook':
        window.open('https://www.facebook.com/', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/', '_blank');
        break;
      case 'website':
        window.open(window.location.href, '_blank');
        break;
      default:
        break;
    }
  });
});

// Add event listeners to clickable boxes
document.querySelectorAll('.box').forEach(function(box) {
  box.addEventListener('click', function(event) {
    event.preventDefault();
    var platform = this.id;
    switch (platform) {
      case 'facebook-box':
        window.open('https://www.facebook.com/', '_blank');
        break;
      case 'twitter-box':
        window.open('https://twitter.com/', '_blank');
        break;
      case 'instagram-box':
        window.open('https://www.instagram.com/', '_blank');
        break;
      case 'linkedin-box':
        window.open('https://www.linkedin.com/', '_blank');
        break;
      default:
        break;
    }
  });
});
