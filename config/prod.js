module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    callbackURL: process.env.CALLBACK_URL,
    loginRedirectURL: "/surveys",
    port: process.env.PORT,
    stripeKey: process.env.STRIPE_KEY,
    stripeSecret: process.env.STRIPE_SECRET,
    sendGridKey: process.env.SENDGRID_KEY,
    sendGridRedirect: process.env.SENDGRID_REDIRECT
};