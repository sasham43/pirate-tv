<template>
    <div>
        <div class="page-icon">
            <Hex @click.native="goToMenu()" icon="fa-tv" label="Menu"></Hex>
        </div>
        <div class="current-header">
            Currently Playing
        </div>
        <div class="currently-playing">
            {{currentChannel}}
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CurrentlyPlaying',
    computed: {
        ...mapGetters('channels', ['currentChannel'])
    },
}
</script>

<style scoped>

</style>
