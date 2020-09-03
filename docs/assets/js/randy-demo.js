(function () {
  const DEFAULT_NUMBER_LENGTH = 5;
  const entries = [];
  const tr = Array.from(document.querySelectorAll('table.table>tbody>tr'))
    .map(tr => Array.from(tr.querySelectorAll('td')));
  const count = document.querySelector('#count');
  let numberLength = 0;
  let collisions = 0;

  function updateTableWithRandomNumbers() {
    if (entries.length >= 10000) {
      entries.length = 0;
    }
    for (let i = 0; i < 10; i++) {
      const td = tr[i];

      for (let j = 0; j < 10; j++) {
        const randomNumber = window.randy(parseInt(numberLength) || DEFAULT_NUMBER_LENGTH);

        if (entries.includes(randomNumber)) {
          count.innerHTML = ++collisions;
        }

        entries.push(randomNumber);

        td[j].setAttribute('title', randomNumber);
        td[j].innerHTML = randomNumber;
      }
    }
  }

  document.getElementById('number-length').addEventListener('input', function(e) {
    entries.length = 0;
    numberLength = e.target.value;
  });
  window.setInterval(updateTableWithRandomNumbers, 1000);
  updateTableWithRandomNumbers();
})();
