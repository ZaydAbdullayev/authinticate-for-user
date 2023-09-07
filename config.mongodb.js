import { MongoClient, ServerApiVersion } from "mongodb";

const password = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://zeyyadabuzayd:${password}@authinticate.lmzee9c.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
