# DMLog

DMLog is a simple Chrome extension that allows you to download a full transcript of your Twitter DM conversations. This tool is ideal for archiving conversations or using them as a source of data for AI analysis.

## Installation

1. Clone this repo to your computer.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to Twitter and open your DMs.
2. Click the DMLog extension icon in the Chrome toolbar when you are viewing the conversation you want to save.
3. Click the "Download" button in the popup. The extension will automatically generate a text file containing a transcript of the entire conversation and download it to your default downloads location.

## Notes

- DMLog relies on specific CSS classes used by Twitter to identify the conversation elements. If Twitter's site structure changes, the extension may require updates.
- DMLog does not send any data to external servers. All processing is done locally within the Chrome browser.

## Contributing

If you'd like to contribute to DMLog, suggest new features, or report any issues, please visit the [GitHub repository](https://github.com/elifiner/dmlog).

## License

DMLog is released under the [MIT License](https://opensource.org/licenses/MIT).
