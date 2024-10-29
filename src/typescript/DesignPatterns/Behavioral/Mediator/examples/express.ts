import express from "express";
const app = express();

// Logging middleware (mediator)
function logger(req, res, next) {
  console.log("Request Type: ", req.method);
  next();
}

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
}

app.use(logger);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/error", (req, res) => {
  throw new Error("Test error");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
