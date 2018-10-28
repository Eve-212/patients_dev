
<template>
	<div>
		<div class="display-inline" v-if="showInputField">
			<label :for="currentKey">{{ schema.title }}</label>
			<input
				id="number-input" 
				type="date" 
				:name="currentKey" 
				v-model="value[currentKey]">
		</div>
	</div>
</template>

<script>
export default {
  name: 'SelectDate',
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
    },
    currentKey: {
      type: String,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    clearInput() {
      // this.value[this.currentKey] = null
      let initValue = null
      switch (this.$options.name) {
        case 'TextInput':
          initValue = ''
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'NumberInput':
          initValue = ''
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'Checkbox':
          initValue = false
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'CheckList':
          initValue = []
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'RadioInput':
          initValue = ''
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'SelectDate':
          initValue = ''
          this.$set(this.value, this.currentKey, initValue)
          break
        case 'SelectList':
          initValue = ''
          this.$set(this.value, this.currentKey, initValue)
          break
      }
    }
  },
  computed: {
    showInputField() {
      let schemaAttrs = this.schema.attrs
      //dependsOn name is Array?
      if (schemaAttrs) {
        if (
          schemaAttrs.dependsOn &&
          Array.isArray(this.value[schemaAttrs.dependsOn.name])
        ) {
          if (
            this.value[schemaAttrs.dependsOn.name].indexOf(
              schemaAttrs.dependsOn.value
            ) !== -1
          ) {
            return true
          } else {
            this.clearInput()
            return false
          }
        }
        if (
          !schemaAttrs.dependsOn ||
          this.value[schemaAttrs.dependsOn.name] === schemaAttrs.dependsOn.value
        ) {
          return true
        } else {
          this.clearInput()
          return false
        }
      }
      return true
    }
  }
}
</script>

<style>
</style>


