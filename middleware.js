const initializeMiddleware = (express,io,app) => {
    app.use(express.json());
    app.use(function(req,res,next){
        res.io=io;
        next();
    });
}
module.exports = initializeMiddleware;