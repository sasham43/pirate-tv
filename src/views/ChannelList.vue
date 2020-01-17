<template>
    <div class="channel-list-container">
        <div class="page-icon">
            <Hex icon="fa-list"></Hex>
        </div>
        <div class="channel-header">
            All Channels
        </div>
        <div class="channel-list">
            <div class="channel" v-for="channel in all_channels" :key="channel.id">
                {{channel.id}} {{channel.name}}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Hex from '../components/Hex.vue'

export default {
    name: "ChannelList",
    data: function(){
        return {
            all_channels: []
        }
    },
    methods: {
        getChannels: async function(){
            const response = await axios.get('/api/channels')

            // console.log('response', response)
            this.all_channels = response.data
        }
    },
    created(){
        this.getChannels()
    },
    components: {
        Hex
    }
}
</script>

<style scoped>
.channel-list-container {
    color: #ec6e2f;
    text-shadow: 0px 0px 4px;
}
.page-icon {
    text-align: left;
    margin-bottom: 25px;
}
.channel-header {
    font-size: 40px;
    margin-bottom: 15px;
    margin-top: -20px;
}
.channel-list {
    border: dashed 3px;
    height: 50vw;
}
.channel {
    padding: 5px;
    text-align: left;
    cursor: pointer;
}
.channel:hover {
    color: #28afb0;
}
</style>
