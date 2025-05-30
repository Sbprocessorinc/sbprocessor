function openPopup(src) {
  document.getElementById("popup-img").src = src;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn = document.querySelector('.hamburger');
  var expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  menu.setAttribute('aria-hidden', expanded);
  menu.classList.toggle('open');
}

function closeMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var btn = document.querySelector('.hamburger');
  btn.setAttribute('aria-expanded', false);
  menu.setAttribute('aria-hidden', true);
  menu.classList.remove('open');
}
