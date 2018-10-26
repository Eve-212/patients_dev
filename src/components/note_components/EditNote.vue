<template>
	<div :class="{isExpanded: isExpanded}">    
    <!-- <h1 class="note-title">{{ noteSchema.title }}</h1>  		   
		<div v-for="(schema, key) in noteSchema.properties" :key="key">      
      <Section :schema="schema" :currentKey="key"></Section>
      <ObjectComponent :schema="schema" :currentKey="key"></ObjectComponent>
    </div> -->
    <Note :schema="noteSchema"></Note>
    
	</div>
</template>

<script>
import Note from '../Note';
import ObjectComponent from "../utility_components/ObjectComponent"
import axios from 'axios';

export default {
  name: 'EditNote',
  props: ['isExpanded'],
  components: {
    Note,
    ObjectComponent
  },
	data() {
		return {
      noteSchema: null,
      data: {}        
    }    
  },
  created: function() {     
    // axios.get('fake_data/schemas.json')
    // .then((res) => {
    //   console.log(res.body)
    //   console.log("yay")
    // })   
<<<<<<< HEAD
    const json = require("../../../static/fake_data/schemas.json")      
    this.noteSchema = json
=======
    const json = require("../../../static/fake_data/schemas3.json")
    this.schemas = json
>>>>>>> 2e5fe0e78ab7768ce9b5c8593f6d2c227c56e913
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';

// .note-title {
//   font-size: 2.0rem;
// }
</style>
