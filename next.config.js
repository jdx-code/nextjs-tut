/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source : '/studentlist',
                destination : '/login',
                permanent : false
            },
            {
                source : '/study',
                destination : '/login',
                permanent : false
            },
        ]
    }
}

module.exports = nextConfig
