import db from '../models/index'

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll()
    return res.render('home', {
      data: JSON.stringify(data),
    })
  } catch (error) {
    console.log(error)
  }
}

let getAboutPage = (req, res) => {
  return res.render('about')
}

export default {
  getHomePage,
  getAboutPage,
}
