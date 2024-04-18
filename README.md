# PoeLog

PoeLog is a simple Chrome extension that allows you to download a full transcript of your conversation with an AI bot on poe.com. It's particularly useful for capturing long-running conversations that you may want to use as a source of data for other purposes. With the new update, you can now choose to include either just the human, just the bot, or both parties' messages in the transcript.

## Installation

1. Clone this repo to your computer.
2. Open the Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to poe.com and start a conversation with an AI bot.
2. Once you've completed the conversation you want to save, click the PoeLog extension icon in the Chrome toolbar.
3. In the popup that appears, use the checkboxes to select whether you want to include messages from the human, the bot, or both in the transcript.
4. Click the "Download" button. The extension will generate a text file containing the selected transcript of your conversation and automatically download it to your default downloads location.

## Notes

- PoeLog relies on specific CSS classes used by poe.com to identify the conversation elements. If the website's structure changes, the extension may need to be updated accordingly.
- PoeLog does not send any data to external servers. All processing is done locally within the Chrome browser.

## Contributing

If you'd like to contribute to PoeLog, suggest new features, or report any issues, please visit the [GitHub repository](https://github.com/elifiner/poelog).

## License

PoeLog is released under the [MIT License](https://opensource.org/licenses/MIT).
