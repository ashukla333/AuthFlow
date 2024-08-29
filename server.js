import express from "express";
const app = express();
const PORT = 5000;


app.get("/", (req, res) => {
  try {
    res.send("welcome")
   
  } catch (error) {
    console.log(error)
  }
});



app.get("/hello", (req, res) => {
    try {
      if (req.url == "/hello") {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "yeah searver is started",
        });
      } else {
        res.status(200).json({
          status: false,
          statusCode: 402,
          message: "O0ps searver is started",
        });
      }
    } catch (error) {
        console.log(error)
    }
  });


app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
