package testRunner;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import com.baseUtils.BaseClass;
import com.intuit.karate.Results;
import com.intuit.karate.Runner;


public class KarateRunner {
	
	@Test
	public void scenarioRunner() {
		  Results results = Runner.path("classpath:testRunner/switchPage.feature")
		  .backupReportDir(false).outputCucumberJson(true).parallel(1);
		  
		BaseClass.generateReport(results.getReportDir());
		assertTrue(results.getErrorMessages(), results.getFailCount() == 0);	
	}
}
