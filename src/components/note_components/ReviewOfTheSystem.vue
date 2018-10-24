<template>
	<div>
		<Section :schema="schema" :schemaData="schemaData"></Section>
	</div>
</template>

<script>
import Section from "../Section" 


export default {
	name: "ReviewOfTheSystem",
	components: {
		Section
	},
	data() {
		return {
			schemaData: {},
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				$id: "http://example.com/product.schema.json",
				title: "Review of the System",
				description: "review of the system of the patient",
				type: "object",
					properties: {
						general: {
							description: "general review",
							type: "object",
							title: "General",                          
							attrs: {
								fieldName: "general"								              
							},
							properties: {
								state: {
									description: "general state",
									type: "string",                                                 
									attrs: {
										values: ["Normal", "Abnormal"],
										fieldType: "radio",
										fieldName: "state",
										label: "State"             
									}
								},
								abnormalities: {
									description: "abnormalities of the patient",
									type: "string",		
									title: "Abnormalities",							
									attrs: {
										fieldType: "checklist",
										fieldName: "abnormalities",
										values: [
											"dizziness",
											"Fainting", 
											"Insomnia",
											"Mental status change",
											"Weakness",
											"Numbness",
											"Convulsion",
											"Memory defect",
											"Tremor",
											"Gait disturbance",
											"Delusion",
											"Drug abuse",
											"Suicide attempt",
											"Hallucination",
											"Stress",
											"Nervousness",
											"Depression",
											"Other"											
										],
										dependsOn: {
											name: "state",
											values: ["Abnormal"]
										}
									}                                  
								},
								other: {
									description: "abnormalities of the patient",
									type: "string",                  
									attrs: {
										fieldType: "text",
										fieldName: "other",
										dependsOn: {                      
											name: "abnormalities",
											values: ["Other"]
										}
									}
								}
							}
						}
					},
				required: [ "productId" ]
			}
		}
	},

}
</script>

<style>

</style>
