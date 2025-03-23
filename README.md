# YouTube Playback Speed Buttons Extension

This browser extension adds custom playback speed buttons to YouTube videos, allowing you to quickly set speeds beyond the default options. You can configure your preferred speeds through the extension's options page.

## Features

* Adds custom buttons to the YouTube video player controls bar.
* Allows setting playback speeds beyond the default YouTube options.
* User-configurable speeds: Set your preferred speeds via the extension's options page.
* Uses Chrome Storage API to save and sync user preferences.
* Compatible with Chrome and Firefox.

## Installation

**For Chrome-based Browsers (Chrome, Edge, Brave, etc.):**

1.  **Download the Extension Files:**
    * Clone this Git repository to your local machine:
        ```bash
        git clone https://github.com/thathsara404/youtube_play_speed_ext.git
        ```
        Replace `<repository_url>` with the actual URL of your Git repository.
    * Alternatively, download the repository as a ZIP file and extract it.

2.  **Open Chrome Extensions:**
    * Open Google Chrome (or your Chromium-based browser).
    * Go to `chrome://extensions/` in the address bar and press Enter.

3.  **Enable Developer Mode:**
    * In the top right corner of the Extensions page, toggle the "Developer mode" switch to the "On" position.

4.  **Load Unpacked:**
    * Click the "Load unpacked" button in the top left corner of the Extensions page.
    * A file dialog will appear. Navigate to the folder where you cloned or extracted the extension files.
    * Select the extension folder (the one containing `manifest.json`, `content.js`, `options.html`, and `options.js`) and click "Select Folder" or "Open".

5.  **The extension should now be installed.** You should see it listed on the `chrome://extensions/` page.

**For Firefox:**

1.  **Download the Extension Files:**
    * Clone this Git repository to your local machine:
        ```bash
        git clone https://github.com/thathsara404/youtube_play_speed_ext.git
        ```
    * Alternatively, download the repository as a ZIP file and extract it.

2.  **Open Firefox Add-ons Debugging:**
    * Open Firefox.
    * Go to `about:debugging#/runtime/this-firefox` in the address bar and press Enter.

3.  **Load Temporary Add-on:**
    * Click the "Load Temporary Add-on..." button.
    * A file dialog will appear. Navigate to the folder where you cloned or extracted the extension files.
    * Select any file within the extension folder (e.g., `manifest.json`, `content.js`) and click "Open".

4.  **The extension should now be installed temporarily.** It will be active until you close Firefox.

    * **Note for Permanent Installation on Firefox:** To install permanently on Firefox, you would typically need to submit it to Mozilla Add-ons (AMO). For development and personal use, "Load Temporary Add-on" is usually sufficient.

## Usage

1.  **Open YouTube:** Navigate to any YouTube video page.
2.  **Access Options (Optional):**
    * **Chrome/Chromium:** Right-click on the extension's icon in the browser toolbar and select "Options".
    * **Firefox:** The extension might have an "Options" item when you right-click its entry in `about:debugging#/runtime/this-firefox`.
3.  **Configure Speeds (Options Page):**
    * On the options page, you can enter your desired playback speeds in the "Enter desired speeds (comma-separated):" field.
    * Separate each speed with a comma (e.g., `1.5, 2.5, 4`).
    * Click the "Save Options" button.
4.  **Use Speed Buttons:**
    * Once on a YouTube video page, you will see new buttons added to the video player controls bar, typically next to the settings button.
    * These buttons will be labeled with the speeds you configured (or the default speeds if you haven't changed them).
    * Click on a speed button to set the video playback speed to that value. The active speed button will be highlighted.

## Contributing

If you'd like to contribute to this project, please feel free to:

* Report bugs and issues.
* Suggest new features.
* Submit pull requests with improvements or fixes.

---

This README file provides a good overview of your extension and clear instructions for installation on both Chrome and Firefox. You can further customize it with more details about the project, development, or contributing guidelines as needed.
