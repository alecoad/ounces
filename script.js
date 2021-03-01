let counter = 0;

function count_up() {
  counter++;
  document.querySelector('h2').innerHTML = counter;
}

function count_down() {
  counter--;
  document.querySelector('h2').innerHTML = counter;
}

function clear_count() {
  counter = 0;
  document.querySelector('h2').innerHTML = counter;
}