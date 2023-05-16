module.exports = (req, res) => {
  // Mocked data
  const messages = [
    { id: '1', subject: 'First email', sender: 'sender@example.com', body: 'Hello!' },
    { id: '2', subject: 'Second email', sender: 'sender@example.com', body: 'Hi there!' },
    { id: '3', subject: 'Third email', sender: 'sender@example.com', body: 'How are you?' }
  ];

  const email = 'sgrady@innerexplorer.org';

  // Filter messages for the specified email address
  const filteredMessages = messages.filter(message => message.sender === email);

  res.status(200).json(filteredMessages);
};
