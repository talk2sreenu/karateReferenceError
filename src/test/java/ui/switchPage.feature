Feature: Validating the difference between Karate 1.2.0 amd 1.3.1
  Background:
		* configure driver = {type:'chrome', userDataDir:'target/chromeDriver'}
		* call read('classpath:ui/commonFunctions.feature@reusableMethods')
		
  Scenario: Verifying Reference Error in JS Functions
     Given driver 'https://www.airbnb.co.in/'
     * maximize()
     * delay(1000)
     * exists("button[aria-label='Close']")
     * click("button[aria-label='Close']")
     * print driver.url
     * print driver.title
     * def lnkSupport = exists('button._r2iz6b2>span>span.dir:nth-child(1)')
     * eval lnkSupport = true ? karate.log('Support Function link displayed') : karate.fail('Support Function link not displayed')
     * waitFor('button._r2iz6b2>span>span.dir:nth-child(1)').click()
     * delay(1000)
     * click("button[aria-label='Close']")
     * delay(1000)
     # Below function verify the above objects through JS function
     * verifyObjectsInPage()
     * close()
     * delay(3000)