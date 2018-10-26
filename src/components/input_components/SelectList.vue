
<template>
	<div>
		<fieldset>
			<div v-if="showInputField">
				<select v-model="value[currentKey]">
					<template v-if="typeof schema.attrs.placeholder !== 'undefined'">
						<option value="" >{{ schema.attrs.placeholder }}</option>
					</template>
					<!-- dynamic placeholder and placeholder name?-->
					<option
						v-for="(item, index) in schema.attrs.values"
						:key="index"
						:value="item">
						{{ item }}
					</option>
				</select>
			</div>
		</fieldset>
	</div>
</template>

<script>
export default {
  name: 'SelectList',
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
      placeholder: this.getPlaceholder()      
    }
  },
  created: function() {
    if (!(this.currentKey in this.value)) {
      // this.value[this.currentKey] = {}
      this.$set(this.value, this.currentKey, '')
      //this.value["keyOnCreate"] = {};
    }
  },
  methods: {
    clearInput() {
      // this.value[this.schema.attrs.fieldName] = null
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
    },
    getPlaceholder() {
      if (typeof this.schema.attrs !== 'undefined') {
        if (typeof this.schema.attrs.placeholder !== 'undefined') {
          return this.schema.attrs.placeholder
        }
      }
      return ''
    }
  },
  computed: {
    showInputField() {
      let schemaAttrs = this.schema.attrs
      //dependsOn name is Array?
      if (typeof this.schema.attrs !== 'undefined') {
        if (typeof this.schema.attrs.dependsOn !== 'undefined') {
          if (
            typeof this.schema.attrs.dependsOn.values !== 'undefined' &&
            typeof this.schema.attrs.dependsOn.name !== 'undefined'
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
                this.schema.attrs.dependsOn.values.indexOf(
                  this.value[this.schema.attrs.dependsOn.name]
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