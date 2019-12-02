module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: process.env.SCHEDULE_TO_DANCE_API,
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    }
}