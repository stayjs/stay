module.exports = {
    'Demo test baidu' : function (browser) {
      browser
        .url('http://www.lianjia.com')
        .waitForElementVisible('body', 1000)
        // .setValue('input[type=text]', 'nightwatch')
        // .waitForElementVisible('button[name=btnG]', 1000)
        // .click('button[name=btnG]')
        .pause(1000)
        .assert.containsText('.exchange', '北京')
        .end();
    }
  }