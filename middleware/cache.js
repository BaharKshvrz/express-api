 import redis from "redis"

   const client = redis.createClient(); // Create a Redis client

   // Middleware to check Redis cache before processing the request
   export const checkCache = (req, res, next) => {
    const { key } = req.params; // You can use any unique identifier for the cache key

    // Try to retrieve data from Redis cache
    client.get(key, (err, data) => {
        if (err) throw err;

        if (data !== null) {
        // Data found in cache, send it as response
        res.send(JSON.parse(data));
        } else {
        // Data not found in cache, move to the next middleware
        next();
        }
    });
    };

    // Middleware to save data to Redis cache after processing the request
    export const  saveToCache = async (key, data) => {
      const client = redis.createClient(); 
      await client.connect();
      client.setEx(key, 3600, JSON.stringify(data)); // Cache for 1 hour (3600 seconds)
    };


