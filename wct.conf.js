module.exports = {
  "plugins": {
    "local": {
      "browsers": [ "chrome" ]
    },
    "sauce": {
      // If set to false it will run all of the time
      "disabled": true,
      "browsers": [
        {
          "browserName":  "chrome",
          "platform":     "OS X 10.13"
        },
        {
          "browserName":  "firefox",
          "platform":     "OS X 10.13"
        },
        {
          "browserName":  "microsoftedge",
          "platform":     "Windows 10",
          "version":      ""
        },
        {
          "browserName":  "safari",
          "platform":     "OS X 10.13",
          "version":      "11"
        },
      ]
    },
    "istanbub": {
      "dir": "./coverage",
      "reporters": ["text", "text-summary", "lcov"],
      "include": [
        "**/*.html"
      ],
      "exclude": [
        "**/bin/*",
        "**/bower_components/**/*",
        "**/demo/*",
        "**/locales/*",
        "**/reports/*",
        "**/test/*"
      ]
    }
  }
};