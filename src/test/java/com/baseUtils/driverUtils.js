function fn(browserConfig){
	var localVar = browserConfig.browserVal||null;
	var env = karate.properties[karate.env]||null;
	var chromeDriver = 'src//test//resources//chromedriver.exe'
	var firefoxDriver = 'src//test//resources//geckodriver.exe'
	if(karate.env=='ci'){
		karate.log("Invoking Docker Chrome Instance");
		karate.configure('driverTarget', { docker: 'ptrthomas/karate-chrome', showDriverLog: true });
	}
	else{
		karate.log('Browser selected is: '+localVar);
		if(localVar=='chrome'){
			karate.configure('driver', {type:'chrome', userDataDir:'target/chromeDriver', headless:true, start: false, addOptions:['--enable-automation']});
		}
		else if(localVar=='geckodriver'){
			karate.configure('driver', {type:localVar, userDataDir:'target/firefoxDriver', executable:firefoxDriver});
		}
		else if(localVar=='chromedriver'){
			karate.configure('driver', {type:localVar, userDataDir:'target/chromeDriver', executable:chromeDriver});
		}
	}
}