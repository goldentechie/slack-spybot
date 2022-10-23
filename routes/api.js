const express = require("express");
const router = express.Router();
const { postMessage, getUserInfo } = require("../apis/slack");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.body);
  res.render("index", { title: "Express" });
});

router.post("/", async (req, res, next) => {
  if (req.body.event.channel != "C0477Q9PL6B") {
    // get user info
    const user = await getUserInfo(req.body.event.user);
    // make alert string
    var text = `${user.data.user.real_name} shared company credentials at ${new Date(req.body.event_time).toString()}\n\`${req.body.event.text}\``;
    // post message
    postMessage(text)
  }
  console.log("log")
  res.status(200).send("");
});

module.exports = router;
