module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3005',
                pathRewrite: {
                    '^/api': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
}
