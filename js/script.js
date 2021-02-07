/* exported menuToggle, closeMenu */
console.log('Hi there, Welcome to my Portfolio site! - Priya Bachegowda')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

function closeMenu () {
  if ($('.fa-bars').is(':visible')) {
    $('#myNavtoggle').attr('class', 'navtoggle')
  }
}
