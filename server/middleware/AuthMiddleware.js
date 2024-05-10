const jwt =  require("jsonwebtoken")

    //This middleware acts like a security guard for your application. 
    //It checks if a request to your server has a valid "pass" (a JSON Web Token, or JWT)
    // in the form of a cookie named auth-token. If the request doesn't have this token,
    // or if the token is invalid (like an expired or fake pass), the middleware stops the 
    //request from accessing certain parts of your application and sends an error message back.
    // This way, only requests from users who have properly logged in and received a valid token 
    //can access specific secure areas of your application. This ensures that your application's 
    //sensitive data and functionalities are protected from unauthorized access.

    function AuthMiddleware(req, res, next){
    const token = req.cookies["auth-token"];

    //An auth-token is a special kind of cookie that acts like a key for accessing certain parts of 
    //a website. It proves that a user has the right to enter and use those parts because they've logged in successfully before.
    //Using cookie-parser: When someone visits your website, cookie-parser makes it easy to find and read the auth-token stored in their cookies.
    //Checking auth-token: Each time the server gets a request from the user’s browser, it checks this token to make sure it’s valid. If it is, 
    //the server allows the user to continue what they were doing, like accessing a member-only area. If not, it might ask them to log in again.
    //This function call tells Express to proceed to the next middleware in the stack or to the route handler
    // if this is the last middleware. It's essential to call this if you want 
    //to continue processing the request after the middleware.
    if(!token){
        return res.status(401).json({msg: "No token, authorization denied"});
    }
   
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoeed.userId;
        next();

    }catch(e){
        res.status(400).json({msg: "Token is not Valid"});
    }
}
// This middleware is used to authenticate requests using JSON Web Tokens (JWT)
// It first checks if the auth-token cookie exists on the request
// If no token is found, it returns a 401 unauthorized error
// If a token is found, it verifies the token using jwt.verify()
// The token is verified against the JWT_SECRET environment variable
// If valid, the decoded userId is added to the request object
// Then next() is called to pass execution to the next middleware
// If invalid, a 400 bad request error is returned
module.exports =  AuthMiddleware;