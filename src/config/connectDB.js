import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME, // Tên database
  process.env.DB_USER, // Tên user
  process.env.DB_PASSWORD, // Mật khẩu
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false, // Bật true nếu muốn log SQL
  }
)

// Hàm kết nối
const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('✅ Kết nối MySQL thành công với Sequelize!')
  } catch (error) {
    console.error('❌ Lỗi kết nối Sequelize:', error)
  }
}

export { connectDB, sequelize }
