const server = require('express').Router();
const passport = require('passport');

isAuthenticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user) return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User not authenticated',
    });
};
isAdmin = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.user.rol === 'admin') return next();
  else
    return res.json({
      loggedin: false,
      isAdmin: false,
      message: 'User is not admin',
    });
};

server.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.json({
        success: false,
        message: err.message,
        info,
      });
    }
    if (!user) {
      return res.json({
        success: false,
        info,
      });
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.json(err);
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        info,
        user,
      });
    });
  })(req, res, next);
});

server.get('/logout', function (req, res) {
  req.logout();
  res.json({ message: 'Logged out!' });
});

server.get('/me', isAuthenticated, function (req, res) {
  res.status(200).json({
    loggedin: true,
    message: 'User is authenticated',
    user: req.user,
  });
});

server.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
  }),
);

server.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

server.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  }),
);

server.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login',
  }),
);

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = server;
