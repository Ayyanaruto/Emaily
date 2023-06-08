const express = require("express");
const router = express.Router();

router.get("/current_user",(req,res)=>{
    res.send(req.user)
  })

  router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.session.destroy()
      res.redirect('/');
    });
  });
  

  module.exports=router