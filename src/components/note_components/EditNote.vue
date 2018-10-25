<template>
<div  :class="{isExpanded: isExpanded}">
  <personal-history></personal-history>
  <personal-info></personal-info>
  <review-of-the-system></review-of-the-system>
</div>
</template>

<script>
import PersonalHistory from '../note_components/PersonalHistory'
import PersonalInfo from '../note_components/PersonalInfo'
import ReviewOfTheSystem from '../note_components/ReviewOfTheSystem'

export default {
  name: 'EditNote',
  props: ['isExpanded'],
  components: {
    PersonalInfo,
    PersonalHistory,
    ReviewOfTheSystem
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';
</style>
