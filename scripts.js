// Small helper script: mobile nav toggle, footer year, and simple contact form mailto fallback
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  }

  // set year in footers
  var year = new Date().getFullYear();
  ['year', 'year-foot', 'year-projects', 'year-about'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // contact form behavior: open user's mail client with prefilled subject/body
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value || 'No name';
      var email = document.getElementById('email').value || '';
      var message = document.getElementById('message').value || '';
      var to = 'beladiyashubham@gmail.com';
      var subject = encodeURIComponent('Portfolio enquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
});
