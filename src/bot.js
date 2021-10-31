// Post a message to a channel your app is in using ID and message text
const publishMessage = async (id, text) => {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: "xoxb-your-token",
      channel: id,
      text: text,
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const pickRandomPeople = async () => {
  try {
    // Call the conversations.list method using the built-in WebClient
    const result = await app.client.conversations.list({
      // The token you used to initialize your app
      token: "xoxb-your-token",
      types: "im",
      exclude_archived: true,
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  await pickRandomPeople();
};
