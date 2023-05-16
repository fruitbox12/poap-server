const express = require("express");
const router = express.Router();
// Mocked data
const messages = [
  { id: '1', subject: 'First email', sender: 'sender@example.com', body: 'Hello!' },
  { id: '2', subject: 'Second email', sender: 'sender@example.com', body: 'Hi there!' },
  { id: '3', subject: 'Third email', sender: 'sender@example.com', body: 'How are you?' }
];
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



app.get('/api/emails', (req, res) => {
  const email = 'sgrady@innerexplorer.org';

  // Filter messages for the specified email address
  const filteredMessages = messages.filter(message => message.sender === email);

  res.json(filteredMessages);
});

module.exports = router;

