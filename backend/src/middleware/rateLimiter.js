import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const result = await rateLimit.limit('my-limit-key');
        if (!result.success) {
            return res.status(429).json({ message: 'Too many requests, try later'});
        }
        next();
    } catch (error) {
        console.error('Error occurred in rateLimiter middleware', error);
        next(error);
    }
}
export default rateLimiter;