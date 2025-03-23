(function() {
    // Determine the storage API to use (Chrome or Firefox)
    const storageApi = typeof browser !== 'undefined' ? browser.storage.sync : chrome.storage.sync;
  
    // Get the video player element
    const videoPlayer = document.querySelector('video');
    if (!videoPlayer) {
      console.error('YouTube video player not found.');
      return;
    }
  
    // Get the controls bar
    const controlsBar = document.querySelector('.ytp-chrome-bottom');
    if (!controlsBar) {
      console.error('YouTube controls bar not found.');
      return;
    }
  
    // Find the existing playback rate menu button (if it exists) to position our buttons
    const existingRateButton = document.querySelector('.ytp-settings-button');
    const anchorElement = existingRateButton || controlsBar.lastElementChild; // Fallback if no settings button
  
    // Function to create a speed button
    function createSpeedButton(speed) {
      const button = document.createElement('button');
      button.classList.add('ytp-button'); // Use existing YouTube button class for styling
      button.innerText = `${speed}x`;
      button.title = `Set playback speed to ${speed}x`;
      button.style.marginLeft = '5px'; // Add some spacing
      button.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'; // Default background
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '2px';
      button.style.padding = '5px 8px';
      button.style.cursor = 'pointer';
      button.style.transition = 'background-color 0.2s ease'; // Smooth hover effect
  
      // Keep track of the current speed
      let isCurrentSpeed = false;
  
      // Function to update button appearance based on current speed
      function updateButtonAppearance() {
        if (videoPlayer.playbackRate === speed) {
          button.style.backgroundColor = '#4CAF50'; // Highlight when active
          button.style.fontWeight = 'bold';
          isCurrentSpeed = true;
        } else {
          button.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
          button.style.fontWeight = 'normal';
          isCurrentSpeed = false;
        }
      }
  
      // Initial update
      updateButtonAppearance();
  
      button.addEventListener('click', () => {
        videoPlayer.playbackRate = speed;
        console.log(`Playback speed set to ${speed}x`);
        // Update all buttons when one is clicked
        updateAllSpeedButtons();
      });
  
      // Hover effect
      button.addEventListener('mouseover', () => {
        if (!isCurrentSpeed) {
          button.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
      });
  
      button.addEventListener('mouseout', () => {
        updateButtonAppearance(); // Revert to active or default
      });
  
      return button;
    }
  
    const speedButtons = []; // Array to store created buttons
  
    // Function to update the appearance of all speed buttons
    function updateAllSpeedButtons() {
      speedButtons.forEach(button => {
        const speed = parseFloat(button.innerText.slice(0, -1)); // Extract speed from text
        const isCurrent = videoPlayer.playbackRate === speed;
        button.style.backgroundColor = isCurrent ? '#4CAF50' : 'rgba(0, 0, 0, 0.6)';
        button.style.fontWeight = isCurrent ? 'bold' : 'normal';
      });
    }
  
    // Get speeds from storage and then add buttons
    storageApi.get({
      speeds: [1, 2, 3, 5] // Default speeds if nothing is stored
    }, function(items) {
      const speedsToAdd = items.speeds;
  
      // Add the new speed buttons
      speedsToAdd.forEach(speed => {
        const speedButton = createSpeedButton(speed);
        speedButtons.push(speedButton);
        if (anchorElement) {
          anchorElement.parentNode.insertBefore(speedButton, anchorElement.nextSibling);
        } else {
          controlsBar.appendChild(speedButton);
        }
      });
  
      // Update button states on video playback rate change
      videoPlayer.addEventListener('ratechange', updateAllSpeedButtons);
  
      console.log('Custom interactive playback speed buttons added to YouTube.');
    });
  })();