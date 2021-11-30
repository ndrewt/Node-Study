exports.getLogin = (req, res, next) => {
     /*  const isLoggedIn =req.get('Cookie')
       .split(';')
       
       console.log(isLoggedIn)*/
    res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated:false
        });
  };
  exports.postLogin = (req, res, next) => {  
        req.session.isLoggedIn=true
        User.findById('61a0d176b38e68b191e4992c')
        .then(user => {
          req.user = user;
          res.redirect('/')
        })
        .catch(err => console.log(err));
     
    };
    