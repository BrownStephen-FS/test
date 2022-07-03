const express = require("express");
const router = require("../router/routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", router);

//middleware modules for error handling
app.use((req, res, next) => {
  const error = new Error("HTTP Status: 404 Not Found");
  error.status = 404;
  next(error);
});

//middleware to send error gracefully
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

module.exports = app;