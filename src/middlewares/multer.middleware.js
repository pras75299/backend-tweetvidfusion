import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// Then use it to derive the __dirname
const __dirname = path.dirname(__filename);

// Resolve an absolute path to your temp directory
const tempDirectory = path.resolve(__dirname, "../../public/temp");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
