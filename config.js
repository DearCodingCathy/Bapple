const DB_URI =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://catherineobalogun:uxA5Uhe0rOFaYrDN@cluster0.40r571x.mongodb.net/?retryWrites=true&w=majority"
    : "mongodb://localhost:27017/nextecom";
module.exports = {
  DB_URI,
};