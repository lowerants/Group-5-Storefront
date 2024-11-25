const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('storefront');

        await db.createCollection('shopper_info');
        await db.createCollection('products');
        await db.createCollection('shopping_cart');
        await db.createCollection('billing');
        await db.createCollection('returns');

        console.log('Collections created');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

connectDB();
