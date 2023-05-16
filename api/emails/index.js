module.exports = (req, res) => {
  // Mocked data
  const messages = [
    { id: '1', subject: 'First email', sender: 'dylanwong007@gmail.com', body: 'Hello check out chatgpt!' },
    { id: '2', subject: 'Second email', sender: 'dylanwong007@gmail.com', body: 'Hi there I am Dylan ncie to meet!' },
    { id: '3', subject: 'Third email', sender: 'dylanwong007@gmail.com', body: 'How are you doing, i know its been tough with the finals?' }
  ];

  const email = 'sgrady@innerexplorer.org';

  // Filter messages for the specified email address
  const filteredMessages = messages.filter(message => message.sender === email);

  res.status(200).json(filteredMessages);
};
