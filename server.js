const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "Did you GET IT??!" });
});

//middleware modules for error handling
app.use((req, res, next) => {
  //   res.json({ name: "Stephen", course: "WDV353" });
  const error = new Error("HTTP Status: 404 Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

app.listen(process.env.port, () =>
  console.log(`Starting server on port ${process.env.port}`)
);
