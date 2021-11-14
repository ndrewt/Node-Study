exports.GetERR = (req, res, next) => {
    res.status(404).render('404.pug', { title: 'ERROR 404!' })
}