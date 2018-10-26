<template>
	<div :class="{isExpanded: isExpanded}">    
		<div v-for="(schema, index) in schemas" :key="index">      
      <Section :schema="schema"></Section>
    </div>
	</div>
</template>

<script>
import Section from '../Section';
import axios from 'axios';

export default {
  name: 'EditNote',
  props: ['isExpanded'],
  components: {
    Section 
  },
	data() {
		return {
      schemas: null,
      data: null        
    }    
  },
  created: function() {     
    // axios.get('fake_data/schemas.json')
    // .then((res) => {
    //   console.log(res.body)
    //   console.log("yay")
    // })   
    const json = require("../../../static/fake_data/schemas3.json")
    this.schemas = json
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';
</style>
