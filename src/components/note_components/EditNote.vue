<template>
	<div>		
		<personal-history></personal-history>
    <personal-info></personal-info>
    <review-of-the-system></review-of-the-system>
	</div>
</template>

<script>
import PersonalHistory from '../note_components/PersonalHistory';
import PersonalInfo from '../note_components/PersonalInfo';
import ReviewOfTheSystem from '../note_components/ReviewOfTheSystem';

export default {
  name: "EditNote",
  components: {
    PersonalInfo,
    PersonalHistory,
    ReviewOfTheSystem
  },
	data() {
		return {

		}
	}
}
</script>

<style>

</style>