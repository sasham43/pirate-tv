<template>
    <div class="menu">
        <span class="menu-text">H.I.V.E. TV</span>
        <div class="hex-container">
            <Hex icon="fa-tv" label="Currently Playing"></Hex>
            <Hex icon="fa-info" label="About"></Hex>
            <Hex icon="fa-random" label="Shuffle"></Hex>
            <Hex @click.native="getChannels()" icon="fa-list" label="All Channels"></Hex>
            <div class="even-row">
                <Hex icon="fa-check-double" label="Test Pattern"></Hex>
                <Hex icon="fa-power-off" label="Disable"></Hex>
                <Hex icon="" label=""></Hex>
            </div>
        </div>
    </div>
</template>

<script>
import Hex from './Hex.vue'
import axios from 'axios'

export default {
    name: 'Menu',
    data: function(){
        return {
            all_channels: [],
        }
    },
    methods: {
        getChannels: async function(){
            const response = await axios.get('/api/channels')

            // console.log('response', response)
            this.all_channels = response.data
        }
    },
    components: {
        Hex
    }
}
</script>

<style>
body {
    background: #000;
}
.menu {
    color: #e24f33;
}
.menu-text {
    text-shadow: 0px 0px 4px;
    font-size: 30px;
}
.even-row {
    display:contents;
}
.hex-container {
    width: 500px;
    margin: 0 auto;
    min-height: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
}


</style>
