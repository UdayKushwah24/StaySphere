const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const path = require("path");
const methodOverride = require("method-override");
// const wrapAsync = require("./utils/wrapAsync");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const ExpressError = require("./utils/ExpressError");  
const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/review");



mongoose
  .connect("mongodb://127.0.0.1:27017/airbnb")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });



const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie : {
    httpOnly : true,
    expires : Date.now() + 1000 * 60 * 60 * 24 *7,
    maxAge : 1000 * 60 * 60 * 24 *7
  }
};

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.use(session(sessionOptions));
app.use(flash());


// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
// Flash middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});


app.get("/fakeUser", async (req, res) => {
  let user = new User({  email: "testuser@example.com", username: "testuser" });
  let registeredUser = await User.register(user, "mypassword");
  res.send(registeredUser);
});




app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);



app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "message went wrong" } = err;
  // res.send("something went wrong")
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", { message });
});




app.listen(8080, () => {
  console.log("server connected successfully");
});
