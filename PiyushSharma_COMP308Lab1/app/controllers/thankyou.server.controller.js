//This code uses the CommonJS module pattern to define a function named render()
//You can require this module and use this function
//You'll need to use Express routing functionality to utilize the controller

exports.render = function (req, res) {
    var session = req.session;
    var Fname = req.body.Fname;
    var Lname = req.body.Lname;
    session.Fname = Fname;
    session.Lname = Lname;
    //check if session object contains the username
    res.render('thankayou', {
        title: 'Feedback Submitted Successfully!',
        FirstNm: session.Fname,
        LastNm: session.Lname,
    });
};