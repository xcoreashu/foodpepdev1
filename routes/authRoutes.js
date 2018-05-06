const passport = require('passport');
module.exports = (app) => {

//route handler
app.get(
  '/auth/google',
  passport.authenticate('google', {
    //scope used to know what access you want to have in google
    scope: ['profile','email']
  })
);
//2nd route handler to exchange the code with actual profile and email
app.get('/auth/google/callback',passport.authenticate('google'));
app.get('/api/current_user',(req,res) => {
  res.send(req.user);
})
};
