exports.handleSTKCallBack = (req, res) => {
  const callbackdata = req.body;
  console.log("STK Callback data: ", JSON.stringify(callbackdata, null, 2));

  res.sendStatus(200);
};
