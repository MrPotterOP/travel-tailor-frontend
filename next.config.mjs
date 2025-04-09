/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http', // Or 'https' if your localhost uses HTTPS
            hostname: 'localhost',
            port: '1337', // Or the port your local server runs on (if not 3000)
            pathname: '/**', // Allows any path from this hostname
          }
        ],
        domains: ['localhost', '127.0.0.1', 'https://travel-tailer-cms.onrender.com', 'travel-tailer-cms.onrender.com', '34.122.149.139:1337', '34.122.149.139', 'storage.googleapis.com'],
      },
};

export default nextConfig;
