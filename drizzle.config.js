/** @type { import("drizzle-kit").Config } */

export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_M9lvaqKy3TEm@ep-sparkling-grass-a504oyj4-pooler.us-east-2.aws.neon.tech/prep-ai?sslmode=require',
    }
};