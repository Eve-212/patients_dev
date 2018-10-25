<template>
	<div>
		<Section :schema="schema" :schemaData="schemaData"></Section>
	</div>
</template>

<script>
import Section from '../Section'

export default {
  name: 'PersonalHistory',
  components: {
    Section
  },
  data() {
    return {
      schemaData: {},
      schema: {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: 'http://example.com/product.schema.json',
        title: 'Personal History',
        description: 'Personal history of the patient',
        type: 'object',
        properties: {
          habits: {
            description: 'habits of the patient',
            type: 'object',
            title: 'Habits',
            attrs: {
              // fieldType: "object",
              fieldName: 'habits'
            },
            properties: {
              smoking: {
                description: 'smoking habit',
                type: 'string',
                attrs: {
                  fieldType: 'radio',
                  label: 'Smoking',
                  values: ['Yes', 'No'],
                  fieldName: 'smoking'
                }
              },
              species: {
                description: 'cigarette species',
                type: 'array',
                attrs: {
                  dependsOn: {
                    name: 'smoking',
                    values: ['Yes']
                  },
                  fieldType: 'checklist',
                  fieldName: 'species',
                  label: 'Species',
                  values: ['Cigarettes', 'Electronic cigarettes']
                }
              }
            }
          },
          things: {
            description: 'blah blah blah',
            type: 'object',
            title: 'Exercise',
            attrs: {
              fieldType: 'object',
              fieldName: 'things'
            },
            properties: {
              exercise: {
                description: 'exercise habits',
                type: 'string',
                title: 'More than once a week',
                attrs: {
                  fieldType: 'radio',
                  values: ['Yes', 'No'],
                  fieldName: 'exercise'
                }
              }
            }
          }
        }
      },
      required: ['productId']
    }
  }
}
</script>

<style>
</style>