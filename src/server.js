import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import ViewEngine from './config/viewEngine.js'
import initWebRoutes from './routes/web.js'

// --- Đọc biến môi trường từ file .env ---
dotenv.config()

// --- Khởi tạo ứng dụng express ---
const app = express()
const PORT = process.env.PORT || 8080

// Middleware xử lý request body
app.use(bodyParser.json()) // Xử lý JSON
app.use(bodyParser.urlencoded({ extended: true })) // Xử lý form (x-www-form-urlencoded)

// --- Cấu hình view engine (EJS + thư mục public) ---
ViewEngine(app)

// --- Khai báo các route web ---
initWebRoutes(app)

// --- Khởi động server ---
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`)
})
