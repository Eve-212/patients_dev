<template>
  <div>
    <div v-if="showInputField">          
      <div    
        class="display-inline" 
        v-for="(item, index) in schema.attrs.values" 
        :key="index">
        <input 
          type="checkbox" 
          :id="item" 
          :value="item" 
          v-model="value[schema.attrs.fieldName]">
        <label :for="item">{{ item }}</label>
      </div>
      <div class="display-inline padding-left">
        <label 
          for="other">Other:				
        </label>
        <input 
          id="other" 
          type="text" 
          name="other" 
          v-model="other">
      </div>    	 
      {{ other }}  
      
    </div>
    {{ value }}
  </div>
</template>

<script>
import TextInput from './TextInput'

export default {
  name: 'CheckListWithOther',
  components: {
    TextInput
  },
  props: {
    schema: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      other: null,
      currentFieldName: this.schema.attrs.fieldName
    }
  },
  created: function() {
    if (!(this.currentFieldName in this.value)) {
      // this.value[this.currentFieldName] = {}
      // this.$emit('input', this.value)
      this.$set(this.value, this.currentFieldName, [])
      //this.value["keyOnCreate"] = {};
    }
  },
  methods: {
    clearInput() {
      let initValue = []
      this.$set(this.value, this.currentFieldName, initValue)
    }
  },
  computed: {
    addUpdateOther() {
      if (this.value[schema.attrs.fieldName].includes(this.other)) {
      }
    },
    showInputField() {
      let schemaAttrs = this.schema.attrs
      //dependsOn name is Array?
      if (typeof schemaAttrs !== 'undefined') {
        if (typeof schemaAttrs.dependsOn !== 'undefined') {
          if (
            typeof schemaAttrs.dependsOn.values !== 'undefined' &&
            typeof schemaAttrs.dependsOn.name !== 'undefined'
          ) {
            if (Array.isArray(this.value[schemaAttrs.dependsOn.name])) {
              for (let i = 0; i < schemaAttrs.dependsOn.values.length; i++) {
                if (
                  this.value[schemaAttrs.dependsOn.name].indexOf(
                    schemaAttrs.dependsOn.values[i]
                  ) !== -1
                ) {
                  return true
                } else {
                  this.clearInput()
                  return false
                }
              }
            } else {
              if (
                schemaAttrs.dependsOn.values.indexOf(
                  this.value[schemaAttrs.dependsOn.name]
                ) !== -1
              ) {
                return true
              } else {
                this.clearInput()
                return false
              }
            }
          }
          return true
        }
        return true
      }
      return true
    }
  }
}
</script>

<style>
</style>