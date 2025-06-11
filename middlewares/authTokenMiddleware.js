const axios = require("axios");

const getAccessToken = async () => {
  const url = process.env.OAUTH_URL;
  const auth = Buffer.from(
    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    console.log("access token: ", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    throw Error("Failed to get access token");
  }
};
module.exports = getAccessToken;
