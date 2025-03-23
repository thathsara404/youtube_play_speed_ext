// Determine the storage API to use (Chrome or Firefox)
const storageApi = typeof browser !== 'undefined' ? browser.storage.sync : chrome.storage.sync;

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);

function saveOptions() {
  const speedsInput = document.getElementById('speeds');
  const speedsString = speedsInput.value;
  const speeds = speedsString.split(',').map(s => parseFloat(s.trim())).filter(s => !isNaN(s) && s > 0);

  storageApi.set({ speeds: speeds }, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  storageApi.get({
    speeds: [1, 2, 3, 5] // Default speeds
  }, function(items) {
    document.getElementById('speeds').value = items.speeds.join(', ');
  });
}