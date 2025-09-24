const mongoose = require("mongoose");

const uri = "mongodb+srv://jhansirambha:J05%407@collegetalenthub.47hm9a4.mongodb.net/student";

mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas (student DB)"))
  .catch(err => console.error("❌ Connection error:", err));
