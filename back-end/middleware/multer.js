import fs from 'fs';
import path from 'path';
import multer from 'multer';

const uploadDir = path.resolve(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, uploadDir);
    },
    filename: function (req, file, callback) {
        // keep original filename but avoid path traversal
        const name = path.basename(file.originalname);
        callback(null, `${Date.now()}-${name}`);
    }
});

const upload = multer({ storage });

export default upload;