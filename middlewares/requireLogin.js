module.exports=(req,res,next)=>{

    if(!req.user)
    {
        return res.status(401).send({
            error:"You must Login To Continue"
        });
    }

    next();

};