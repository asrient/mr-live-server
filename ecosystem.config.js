module.exports = {
  apps : [{
    name: "mr-live",
    script: 'index.js',
    watch: '.',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};
