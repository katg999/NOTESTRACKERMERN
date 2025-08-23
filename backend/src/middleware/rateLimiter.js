import ratelimit from "../../config/upstash.js";

const rateLimiter = async (req, res, next) => {
   
    try {
        
        const {success} = await ratelimit.limit(userid);
    

        if(!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later"
            })
        }
          next(); // Call the next middleware or route handler
        

    }  catch(error) {
        console.error("Error in rate limiter middleware", error);
        next(error); // Pass the error to the next middleware
    }



}


export default rateLimiter;