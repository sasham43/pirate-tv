<template>
    <div class="currently-playing-container">
        <div class="page-icon">
            <Hex @click.native="goToMenu()" icon="fa-tv" label="Menu"></Hex>
        </div>
        <div class="current-header">
            Currently Playing
        </div>
        <div class="currently-playing">
            {{ currentlyPlaying.id }}
            {{ currentlyPlaying.name }}
        </div>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Hex from '../components/Hex.vue'

export default {
    name: 'CurrentlyPlaying',
    computed: {
        ...mapGetters('channels', ['currentChannel', 'currentlyPlaying'])
    },
    methods: {
        ...mapActions('channels', ['getCurrentChannel', 'getChannel']),
        goToMenu: function(){
            this.$router.push({
                path: '/'
            })
        },
    },
    components: {
        Hex
    },
    created(){
        this.getCurrentChannel().then(()=>{
            this.getChannel(this.currentChannel)
        })
    }
}
</script>

<style scoped>
.page-icon .hex {
    margin-left: 5px;
}
.current-header,
.currently-playing {
    text-shadow: 0px 0px 4px;
}
.currently-playing-container {
    color: #ec6e2f;
}
</style>
