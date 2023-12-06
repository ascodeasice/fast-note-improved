let firstOpen = true;

(function () {
  function storeData() {
    localStorage.setItem('data', data.value);
    var height = parseInt(data.style.height) - 100;
    if (height < 100) height = 100;
    data.style.height = height + 'px';
    data.style.height = parseInt(data.scrollHeight) + 'px';

    // only refocus on first open, to successfully input chinese
    if (firstOpen) {
      data.blur();
      data.focus();
      firstOpen = false;
    }
  }

  function init() {
    var data = document.getElementById('data');
    if (!data) {
      return;
    }
    data.value = localStorage.getItem('data');
    data.onkeyup = storeData;
    storeData();
  }

  init();
}());
