module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome'],
            seleniumPort: 4444,
            skipSelenium: false // You have your own selenium server running
        },
        "sauce": {
            "disabled": true,
            "browsers": [{
                "browserName": "microsoftedge",
                "platform": "Windows 10",
                "version": ""
            }, {
                "browserName": "internet explorer",
                "platform": "Windows 8.1",
                "version": "11"
            }, {
                "browserName": "safari",
                "platform": "OS X 10.11",
                "version": "9"
            }, {
                "browserName": "android",
                "platform": "linux",
                "version": "4.4"
            }, {
                "browserName": "opera",
                "platform": "Windows 7",
                "version": "12"
            }, {
                "browserName": "firefox",
                "platform": "Windows 7",
                "version": "22"
            }
            ]
        }

    }
};
