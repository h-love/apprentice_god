<template>
  <div class="theCandidatesPage o-section__100vh">
    <nav-main />
    <div class="grid-container o-section__paddingBottomForNav">
      <div class="grid-x align-center">
        <div class="cell medium-7 small-10">
          <h1>Les candidats</h1>
          <div class="grid-x grid-margin-x grid-margin-y">
            <div
              v-for="(candidate, index) in candidatesData"
              :key="index"
              class="cell medium-6 small-12"
            >
              <switch-candidates
                :fictionalImage="candidatesData[index].imageFiction"
                :fictionalName="candidatesData[index].nameFiction"
                :fictionalAge="candidatesData[index].ageFiction"
                :fictionalDescription="candidatesData[index].descriptionFiction"
                :realityImage="candidatesData[index].imageReel"
                :realityName="candidatesData[index].nameReel"
                :realityDescription="candidatesData[index].descriptionReel"
                :mail="candidatesData[index].mail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import json from '@/assets/data/candidates.json'
import NavMain from '@/components/modules/navMain'
import SwitchCandidates from '@/components/modules/switchCandidates'

export default {
  name: 'theCandidatesPage',
  components: {
    NavMain,
    SwitchCandidates
  },
  data () {
    return {
      candidatesData: json.candidates
    }
  }
}
</script>
