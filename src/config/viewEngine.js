import path from 'path'
import express from 'express'

let configViewEngine = (app) => {
  app.set('views', path.join(__dirname, '../views'))
  app.set('view engine', 'ejs')

  // Cho phép truy cập static từ thư mục public
  app.use(express.static(path.join(__dirname, '../public')))
}

export default configViewEngine
