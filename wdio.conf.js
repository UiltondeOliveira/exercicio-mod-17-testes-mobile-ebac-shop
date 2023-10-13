const {join} = require('path')
const allure = require('allure-commandline')

exports.config = {
    /*hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    path: '/',*/


    user: 'uiltonrodrigues_x2Gn6H',
    key: 'WK39VMgSe1bivEYvFzhD',
    services: ['browserstack'],

    specs: [
        './tests/specs/**/*.spec.js'
    ],
    framework: 'mocha',

    capabilities: [{
      'app': 'bs://98c85056269bf3eb7a53ba756e3f2d5f65aa48c7',
      'deviceName': 'Samsung Galaxy S20',
      'platformVersion': '10.0',
      'platformName': 'android',
      'projectName': "Testes EBAC Shop Mobile",
      'build': '1'

      /*"appium:platformName": "Android",
      "appium:platformName": "Android",
      "appium:platformVersion": "12.0",
      "appium:deviceName": "Redmi_Note_9S",
      "appium:automationName": "UiAutomator2",
      //"appium:app": join(process.cwd(),'./app/android/wcandroid-7.3.1.apk'),
      "appium:app": "C:\\projetos\\exercicios-ebac\\exercicio-mod-17-testes-mobile-ebac-shop\\app\\android\\wcandroid-7.3.1.apk",
      "appium:udid": "ee82fa37",
      "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity",
      "appium:appPackage": "com.woocommerce.android",
      "appium:appActivity": "ui.main.MainActivity"*/
      }],
      maxInstances: 10,
      waitForTimeout: 20000,
      mochaOpts: {
        timeout: 300000
      },
      reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

      onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
  }
}


