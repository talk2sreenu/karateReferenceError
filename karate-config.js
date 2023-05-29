function fn(){
	var env = karate.env;
	karate.log("Environment variable is "+ env)
	config ={
		name: 'Srinivasu',
		baseURL: 'testing the global',
		browserType: 'chrome',
		host: 'http://httpstat.us/',
		//chromeDriverPath: 'C:/Drivers/chromedriver_win32/chromedriver.exe',
		ctVal: 'application/json'
		};
  
  // browser settings, if not set it takes chrome
  //var browser = karate.properties['browser']; //|| 'chrome';
  //karate.log('the browser set is: ' + browser + ', default: "chrome"');

  //grid flag, if not set it takes false. The grid url is in this format http://localhost:4444/wd/hub
  var grid_url = karate.properties['grid_url'] || false;
  karate.log('the grid url set is: ' + grid_url + ', default: false');

  return config;
}