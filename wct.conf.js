const DIR = __dirname.split("/").slice(-1)[0];

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
            },
                {
                    "browserName": "safari",
                    "platform": "OS X 10.11",
                    "version": "9"
                }
            ]
        }
        //   istanbul: {
        //     dir: "./coverage",
        //     reporters: ["text-summary", "lcov"],
        //     include: [
        //       "/public/bm-ea-router.html",
        //       "**/modules/ea-supervisor/views/polymer-components/**/*.html",
        //       "**/modules/ea-supervisor/views/polymer-components/**/*.js"
        //     ],
        //     exclude: [
        //       "/polymer/polymer.js",
        //       "/platform/platform.js",
        //       "/"
        //     ],
        //     thresholds: {
        //       global: {
        //         statements: 80,
        //         //TODO: raise branches to 80
        //         branches: 75,
        //         functions: 80,
        //         lines: 80
        //       },
        //       // First, meet these thresholds for each file
        //       //each: {
        //         //statements: 80,
        //         //TODO: raise branches to 80
        //         //branches: 75,
        //         //functions: 80,
        //         //lines: 80
        //       //}
        //     }
        //   }
        // },
        // clientOptions: {
        //   environmentScripts: [
        //     'stacky/browser.js',
        //     'async/lib/async.js',
        //     'lodash/lodash.js',
        //     'mocha/mocha.js',
        //     'chai/chai.js',
        //     'sinonjs/sinon.js',
        //     'sinon-chai/lib/sinon-chai.js',
        //     'accessibility-developer-tools/dist/js/axs_testing.js',
        //     DIR.concat("/public/modules/ea-supervisor/utilities/bm_ea_utilities.js"),
        //     DIR.concat("/test/fixtures/nav.js"),
        //     DIR.concat("/test/fixtures/localeData.js"),
        //     DIR.concat("/test/fixtures/bm_ea_utilities.js")
        //   ]
    }
};
