const {Router} = require('express');
const passport = require('passport'); 
const local = require('./../strategies/local')
const router = Router();
const path = require('path');




// router.get('/login', passport.authenticate('local'), (req, res) => {
//     res.send(200)
// });

// router.post('/', (req, res) => {

//     if (req.user) {
//         res.sendFile('../clien')
//     }
//     res.send(200)
// });

router.get('/', (req, res) => { 

    if (req.user) {
        // res.sendFile('../clien')
        res.send(200)
        // res.sendFile(path.join(__dirname, '../client/public/index.html'))
    } else (
        // res.sendFile(path.join(__dirname, '../client/public/login/index.html'))
        res.send(403)
    )

    
    // res.send(200)
});


module.exports = router;