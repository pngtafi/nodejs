let getHomePage = (req, res) => {
  return res.render('home')
}

let getAboutPage = (req, res) => {
  return res.render('about')
}

export default {
  getHomePage,
  getAboutPage,
}
