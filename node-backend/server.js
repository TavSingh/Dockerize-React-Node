const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const route = require("./routes/route");
app.use("/", route);

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});