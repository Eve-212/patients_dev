<template>
	<div>    
		<Section :schema="schema" :schemaData="schemaData"></Section>
	</div>
</template>

<script>
import Section from "../Section"  


export default {
	name: "PersonalInfo",
	components: {
		Section
	},
	data() {
		return {
			schemaData: {},
			schema: {
				$schema: "http://json-schema.org/draft-07/schema#",
				$id: "http://example.com/product.schema.json",
				title: "Personal Information",
				description: "Information of the patient",
				type: "object",
				properties: {
					name: {
						description: "", // legend data
						type: "string", //type of input
						title: "Name",            
						attrs: {
							fieldName: "name",
							fieldType: "text",							
							title: "fleajlfajljfi"
						}
					},
					age: {
						description: "", // legend data
						type: "integer", //type of input
						title: "Age",           
						attrs: {
							fieldName: "age",
							fieldType: "number",							
							dependsOn: {
								name: "name",
								values: ["david"]
							}
						}
					},
					date: {
						description: "", // legend data
						type: "string", //type of input
						title: "Date of birth",            
						attrs: {
							fieldName: "date",
							fieldType: "date",							
							// dependsOn: {
							//   name: "name",
							//   values: ["david"]
							// }
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
