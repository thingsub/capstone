const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors()); // CORS 오류 방지

// 텍스트 파일이 저장된 폴더 경로
const FILE_DIR = path.join(__dirname, "data");

// ID에 해당하는 텍스트 파일 조회 API
app.get("/fetch/:id", (req, res) => {
  const { id } = req.params;
  const filePath = path.join(FILE_DIR, `${id}.txt`);

  if (!fs.existsSync(filePath)) {
    return res.json({
      id: "undefined",
      age: "undefined",
      name: "undefined",
      job: "undefined",
    });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "파일을 읽는 중 오류 발생" });
    }

    const result = {};
    const regex = /<(\w+)>(.*?)<\/\1>/g;
    let match;

    while ((match = regex.exec(data)) !== null) {
      result[match[1]] = match[2];
    }

    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
