module.exports = {
    apps : [{
      name       : "actions-playground",
      script     : "./index.js",
      instances  : 2,
      exec_mode  : "cluster"
    }]
  }
