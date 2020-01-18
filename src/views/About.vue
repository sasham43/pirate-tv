<template>
  <div class="about-container">
      <div class="page-icon">
          <Hex @click.native="goToMenu()" icon="fa-info" label="Menu"></Hex>
      </div>
      <div class="about-header">
          About
      </div>
      <div class="about">
          The Human Interest Virtual Experience Tele Vision (or H.I.V.E. TV for short) is an experiment in generated radiostatic imagery designed to elicit certain autonomal nervous system responses from carbon-based lifeforms.  By engaging in channel selection and absorbing the ensuing information, participants in the experiment are exposing themselves to positive radiations and cylindrical loop wavelengths.
      </div>
  </div>
</template>

<script>
import Hex from '../components/Hex.vue'

export default {
    name: 'About',
    components: {
        Hex
    },
    methods: {
        goToMenu: function(){
            this.$router.push({
                path: '/'
            })
        },
    },
}
</script>

<style scoped>
.page-icon .hex {
    margin-left: 5px;
}
.about-header,
.about {
    text-shadow: 0px 0px 4px;
}
.about-container {
    color: #ec6e2f;
}
</style>
