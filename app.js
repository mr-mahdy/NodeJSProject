const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// const mongoose = require('mongoose');
const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const csrf = require('csurf');
const helmet = require('helmet');
const compression = require('compression')

const mainRoutes = require('./routes/main');
const axiosRoutes = require('./routes/axios');
const pmbFormRoutes = require('./routes/pmbForm');
const periodeRoutes = require('./routes/periode');
const komponenUSMRoutes = require('./routes/komponenUSM');
const opmbRoutes = require('./routes/opmb');

const PORT = 3000;
// const MONGODB_URI = process.env.dbURL;
// const SECRET = process.env.SECRET;

const app = express();
// const store = new MongoDBStore({
//     uri: MONGODB_URI,
//     collection: 'sessions'
// });
// const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);
app.use(session({secret:"rahasia12345", resave: true,saveUninitialized: true}));
app.use(flash());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, './public')));

// app.use(session({
//     secret: SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: store // store sessions in MongoDB with connect-mongodb-session
// }));
// app.use(flash());
// app.use(csrfProtection);

// app.use((req, res, next) => {
    // res.locals.isAuthenticated = req.session.isLoggedIn;
//     res.locals.csrfToken = req.csrfToken();
//     next();
// });

// app.use((req, res, next) => {
//     if (!req.session.user) {
//         return next();
//     }    
//     User.findById(req.session.user._id)
//         .then(user => {            
//             if (!user) {
//                 return next();
//             }
//             // set the user key in the request object to the model user we get from mongoose
//             req.user = user;
//             console.log(`Current Session User Email is: ${user.email}`);
//             next();
//         })
//         .catch(err => {
//             next(new Error(err));
//         });
// });

// route hal. home
app.use(mainRoutes);
app.use(axiosRoutes);

// route tabel simak_mst_pmb_formulir
app.use(pmbFormRoutes);

// route tabel simak_mst_pmb_gelombang
app.use(periodeRoutes);

// route tabel simak_mst_pmb_usm
app.use(komponenUSMRoutes)

// route tabel simak_mst_pmb_opmb
app.use(opmbRoutes)

// app.get('/500', errorController.get500);

// app.use(errorController.get404);

// app.use((error, req, res, next) => {
//     res.status(500).render('500', {
//         pageTitle: 'Error',
        // isAuthenticated: req.session.isLoggedIn
//     });
// });
 
// mongoose
//     .connect(MONGODB_URI)
//     .then(result => {
//         app.listen(PORT, process.env.IP, () => {
//             console.log(`App listening on port ${PORT}.`);
//         });
//     })
//     .catch(err => console.log(err));
app.listen(PORT, function() {
    console.log("server listening on port 3000")
})