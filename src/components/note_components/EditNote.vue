<template>
	<div>    
		<div v-for="(schema, index) in schemas" :key="index">      
      <Section :schema="schema" :schemaData="data[index]"></Section>
    </div>
	</div>
</template>

<script>
import Section from '../Section';

export default {
  name: "EditNote",
  components: {
    Section
  },
	data() {
		return {
      schemas: [
        {
          $schema: "http://json-schema.org/draft-07/schema#",
          $id: "http://example.com/product.schema.json",
          title: "Personal History",
          description: "Personal history of the patient",
          type: "object",        
            properties: {
              habits: {
                description: "habits of the patient",
                type: "object",              
                title: "Habits",
                attrs: {
                  // fieldType: "object",
                  fieldName: "habits"                
                },
                properties: {
                  smoking: {
                    description: "smoking habit",
                    type: "string",                  
                    attrs: {
                      fieldType: "radio",
                      label: "Smoking",
                      values: ["Yes", "No"],
                      fieldName: "smoking"
                    }
                  },
                  species: {
                    description: "cigarette species",
                    type: "array",                  
                    attrs: {
                      dependsOn: {
                        name: "smoking",
                        values: ["Yes"]
                      },
                      fieldType: "checklist",
                      fieldName: "species",
                      label: "Species",
                      values: ["Cigarettes", "Electronic cigarettes"]
                    }                  
                  }
                }
              },
              things: {
                description: "blah blah blah",
                type: "object",              
                title: "Exercise",
                attrs: {
                  fieldType: "object",
                  fieldName: "things"                
                },
                properties: {
                  exercise: {
                    description: "exercise habits",
                    type: "string",             
                    title: "More than once a week",     
                    attrs: {
                      fieldType: "radio",										
                      values: ["Yes", "No"],
                      fieldName: "exercise"
                    }
                  }
                }
              }
            }
        },
        {
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
        },
        {
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
      ],
      data: [{}, {}, {}]
		}
	}
}
</script>

<style>

</style>