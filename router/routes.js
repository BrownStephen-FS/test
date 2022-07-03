const express = require("express");
const router = express.Router();

//GET without id
router.get("/", (req, res, next) => {
  res.json({
    message: "GET without ID",
    metadata: {
      host: req.hostname,
      port: req.headers.host.split(":")[1],
      method: req.method,
    },
  });
});

//GET with id
router.get("/:id", (req, res) => {
  res.status(200).json({
    message: "GET by ID",
    metadata: {
      host: req.hostname,
      port: req.headers.host.split(":")[1],
      method: req.method,
      ID: req.path.replace("/", ""),
    },
  });
});

//POST with id
router.post("/", (req, res, next) => {
  res.json({
    message: "POST without ID",
    metadata: {
      host: req.hostname,
      port: req.headers.host.split(":")[1],
      method: req.method,
    },
  });
});

//PATCH with id
router.patch("/:id", (req, res) => {
  res.status(200).json({
    message: "PATCH by ID",
    metadata: {
      host: req.hostname,
      port: req.headers.host.split(":")[1],
      method: req.method,
      ID: req.path.replace("/", ""),
    },
  });
});

//DELETE with id
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "DELETE by ID",
    metadata: {
      host: req.hostname,
      port: req.headers.host.split(":")[1],
      method: req.method,
      ID: req.path.replace("/", ""),
    },
  });
});

module.exports = router;
