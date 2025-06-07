const stkPush = require("../utils/stkPush");

exports.stkpushRequest = async (req, res) => {
  const { phone, amount, reference, description } = req.body;

  try {
    const result = await stkPush(phone, amount, reference, description);
    res.json(result);
    console.log("callback results:");
    console.log(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
