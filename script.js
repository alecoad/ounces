let counter = 0;

function clear_count() {
  counter = 0;
  document.querySelector('h2').innerHTML = counter;
  document.querySelector('#countdown').disabled = true;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#countdown').disabled = true;

  document.querySelector('#countup').onclick = function() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
    document.querySelector('#countdown').disabled = false;
  }

  document.querySelector('#countdown').onclick = function() {
    if (counter <= 0) {
      document.querySelector('#countdown').disabled = true;
    }
    else {
      document.querySelector('#countdown').disabled = false;
      counter--;
      document.querySelector('h2').innerHTML = counter;
      if (counter == 0) {
        document.querySelector('#countdown').disabled = true;
      }
    }
  }
});

