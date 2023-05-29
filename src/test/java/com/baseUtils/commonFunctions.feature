@ignore
Feature: Common feature file to capture reusable methods
 	
 	@reusableMethods
 	Scenario: sample scenario
 		* def verifyObjectsInPage =
 		"""
 		function(){
 			var found = exists('button._r2iz6b2>span>span.dir:nth-child(1)')
 			if(found){
 				karate.log('Support Function displayed when verified from external feature file')
 				waitFor('button._r2iz6b2>span>span.dir:nth-child(1)').click()
 			}
 			else
 				karate.log('item not found')
 		}
 		"""