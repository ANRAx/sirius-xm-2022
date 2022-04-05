const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "../client/public/")));

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.get("*", (req, res) => {
  res.status(404).send("Not Found");
});

const convertWavToMp3 = async (wav) => {
  const time = new Date().getTime();
  // create file names
  const convertedFileName = `tmp/${time}.mp3`;
  const mp3Path = path.join(__dirname, convertedFileName);

  const tempFileName = `tmp/${time}.wav`;
  const wavPath = path.join(__dirname, tempFileName);

  // save wav buffer to file system
  fs.writeFileSync(wavPath, wav, "utf8");

  // run the ffmpeg command
  try {
    childProcess.execSync(`ffmpeg -i ${wavPath} ${mp3Path}`);
    return mp3Path;
  } catch (err) {
    return null;
  }
};

app.post("/convert-to-MP3", async (req, res) => {
  const file = req.files && req.files.the_file;

  if (!file) {
    res.status(400).json({ status: 400, message: "No files were uploaded." });
    return;
  }

  const convertedFilePath = await convertWavToMp3(file.data);

  if (convertedFilePath) {
    res.setHeader("Content-Type", "audio/mpeg");
    res.download(convertedFilePath);
  } else {
    res
      .status(500)
      .json({ status: 500, message: "Failed to convert the WAV file" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App now running on PORT:" + port);
