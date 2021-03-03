let counter = 0;

function clear_count() {
  counter = 0;
  document.querySelector('h2').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.countup').onclick = function() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
  }

  document.querySelector('.countdown').onclick = function() {
    counter--;
    document.querySelector('h2').innerHTML = counter;
  }
});

