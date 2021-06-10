exports.getMain = (req, res, next) => {
  res.render('main', {
    title: 'PMB',
    layout: '../views/layouts/templates'
  });
};