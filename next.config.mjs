/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();


const nextConfig = {
    env: {
        OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY
    }
};

export default nextConfig;
