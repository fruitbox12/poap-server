const express = require("express");
const router = express.Router();
// Mocked data

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "ecovault AVAX/USDC deployed at 0xAEAEA52D68a72D32g98312bde248D27dD5cbd4d6 ",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});



module.exports = router;

