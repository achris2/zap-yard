/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "a0.muscache.com",
                protocol: "https", 
                port: "", 
            }, 
            {
                hostname: "imnaypnzvatjbonhywqy.supabase.co",
                protocol: "https", 
                port: "", 
            },
            {
                hostname: "t3.ftcdn.net",
                protocol: "https", 
                port: "", 
            },
        ]
    }
};
export default nextConfig;
