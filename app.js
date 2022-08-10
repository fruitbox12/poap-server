const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const { deploy } = require("./scripts/deploy");

app.get("/", async (req, res) => {
  const deployedContract = await deploy(100);
  res.send(deployedContract.address);
  //   res.send("Hi there");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
