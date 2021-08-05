const LocalStrategy = require('passport-local');
const passport = require('passport');
const db = require('../database.js');


passport.serializeUser((user, done) => {
    done(null, user.username)
});

passport.deserializeUser(async (username, done) => {
    

     try {
           const results = await db.promise().query(`SELECT * FROM USERS WHERE username = '${username}'`);
                if (results[0][0]) {
                    done(null, results[0][0]);
                }
        
        } catch (error) {
          done(error, false)  
        }
});

passport.use(new LocalStrategy(
    async (username, password, done) => {
        const results = await db.promise().query(`SELECT * FROM USERS WHERE username = '${username}'`);


        try {
            if (results[0].length === 0) {
            done(null, false);
            } else {
                if (results[0][0].password === password) {
                    done(null, results[0][0]);
                } else {
                    done(null, false);
                }
            }
        } catch (error) {
          done(error, false)  
        }
        

       
    }
));

