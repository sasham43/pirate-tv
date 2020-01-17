<template>
    <div class="channel-list-container">
        <div class="page-icon">
            <Hex @click.native="goToMenu()" icon="fa-list" label="Menu"></Hex>
        </div>
        <div class="channel-header">
            All Channels
        </div>
        <div class="channel-list">
            <div @click="selectChannel(channel.id)" class="channel" v-for="channel in all_channels" :key="channel.id">
                <span>{{channel.id}} {{channel.name}}</span>
                <span class="currently-playing" v-if="current_channel == channel.id">
                    <i class="fas fa-tv"></i>
                </span>
            </div>
            <div @click="add_channel = true" class="channel" v-if="!add_channel">
                <i class="fas fa-plus"></i>
                Add Channel
            </div>
            <div class="add-channel" v-if="add_channel">
                <div class="add-channel-name">
                    Name: <input type="text" v-model="new_channel.name" />
                </div>
                <div v-if="new_channel.type == 'link'" class="add-channel-link">
                    Link: <input type="text" v-model="new_channel.link" />
                </div>
                <div v-if="new_channel.type == 'file'" class="add-channel-file">
                    File: <input type="text" v-model="new_channel.file" />
                </div>
                <div class="add-channel-type">
                    <!-- <div> -->
                        Type:
                    <!-- </div> -->
                    <label for="type_radio_link">
                        Link
                        <div class="fake-radio" :class="{'selected-radio': new_channel.type == 'link'}">

                        </div>
                    </label>
                    <input v-model="new_channel.type" type="radio" id="type_radio_link" value="link" name="type_radio" />
                    <span></span>
                    <label for="type_radio_file">
                        File
                        <div class="fake-radio" :class="{'selected-radio': new_channel.type == 'file'}">

                        </div>
                    </label>
                    <input v-model="new_channel.type" type="radio" id="type_radio_file" value="file" name="type_radio" />
                </div>
                <div class="add-channel-button">
                    <button @click="addChannel()">
                        Add New Channel
                    </button>
                </div>
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
            all_channels: [],
            add_channel: false,
            new_channel: {
                name: '',
                link: '',
                file: '',
                type: 'link'
            },
            current_channel: null,
        }
    },
    methods: {
        getChannels: async function(){
            const response = await axios.get('/api/channels')

            // console.log('response', response)
            this.all_channels = response.data
        },
        goToMenu: function(){
            this.$router.push({
                path: '/'
            })
        },
        addChannel: async function(){
            this.new_channel.id = this.all_channels.length,
            const response = await axios.post('/api/new-channel', this.new_channel)

            this.add_channel = false
            this.new_channel = {
                name: '',
                link: '',
                file: '',
                type: 'link'
            }
            this.getChannels()
            return response
        },
        selectChannel: async function(id){
            const response = await axios.post(`/api/select-channel/${id}`)

            this.getCurrentChannel()

            return response
        },
        getCurrentChannel: async function(){
            const response = await axios.get('/api/current-channel')

            this.current_channel = response.data.current_channel
        }
    },
    created(){
        this.getChannels()
        this.getCurrentChannel()
    },
    components: {
        Hex
    }
}
</script>

<style>
.page-icon .hex {
    margin-left: 5px;
}
.channel-header,
.channel-list {
    text-shadow: 0px 0px 4px;
}
.channel-list-container {
    color: #ec6e2f;
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
.currently-playing {
    margin-left: 10px;
    font-size: 18px;
}

.add-channel input,
.add-channel button {
    padding: 5px;
    color: #ec6e2f;
    font-family: 'VT323', 'Courier New', monospace;
    font-size: 24px;
    text-shadow: 0px 0px 4px;
    outline: none;
}

.add-channel input {
    background: transparent;
    border: none;
    border-bottom: solid 2px;
    border-color: #ec6e2f;
    color: #ec6e2f;
}
.add-channel button {
    background: transparent;
    border: solid 2px #ec6e2f;
    margin-top: 15px;
}
.add-channel button:hover {
    color: #28afb0;
    border-color: #28afb0;
    cursor: pointer;
}

.fake-radio {
    width: 10px;
    height: 10px;
    border: solid 2px #ec6e2f;
    display: inline-block;
}
.selected-radio {
    background-color: #ec6e2f;
}

#type_radio_file,
#type_radio_link {
    display: none;
}
</style>
