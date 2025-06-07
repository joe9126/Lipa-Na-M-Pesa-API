const axios = require("axios");
const getAccessToken = require("../middlewares/authTokenMiddleware");

const stkPush = async function (
  phone,
  amount,
  accountReference,
  transactionDesc
) {
  const accessToken = await getAccessToken();
  //console.log("access token: ", accessToken);
  const timestamp = new Date()
    .toISOString()
    .replace(/[-T:\.Z]/g, "")
    .slice(0, 14);

  const password = Buffer.from(
    `${process.env.SHORTCODE}${process.env.PASS_KEY}${timestamp}`
  ).toString("base64");

  const payload = {
    BusinessShortCode: process.env.SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phone,
    PartyB: process.env.SHORTCODE,
    PhoneNumber: phone,
    CallBackURL: process.env.CALLBACK_URL,
    AccountReference: accountReference,
    TransactionDesc: transactionDesc,
  };
  // console.log("payload", payload);

  const url = `${process.env.STK_PUSH_URL}`;

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    //  console.error(error.response.data);
    throw new Error("STK Push Failed");
  }
};
module.exports = stkPush;
