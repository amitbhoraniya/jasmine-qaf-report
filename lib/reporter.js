class Reporter {

    jasmineStarted(jasmineInfo) {
        console.log(JSON.stringify(jasmineInfo));
    }

    suiteStarted(suite) {
        console.log(JSON.stringify(suite));
    }

    specStarted(spec) {
        console.log(JSON.stringify(spec));
    }

    specDone(spec) {
        console.log(JSON.stringify(spec));
    }

    suiteDone(suite) {
        console.log(JSON.stringify(suite));
    }

    jasmineDone(jasmineInfo) {
        console.log(JSON.stringify(jasmineInfo));
    }
}
module.exports = Reporter;