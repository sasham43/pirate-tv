import axios from 'axios'

const state = {
    all_channels: [],
    current_channel: null,
}
const getters = {
    allChannels: state => state.all_channels,
    currentChannel: state => state.current_channel,
}
const actions = {
    async getAllChannels({commit}){
        const response = await axios.get('/api/channels')

        commit('setAllChannels', response.data)
    },
    async getCurrentChannel({commit}){
        const response = await axios.get('/api/current-channel')

        commit('setCurrentChannel', response.data)
    },
}
const mutations = {
    setAllChannels: (state, channels)=> state.all_channels = channels,
    setCurrentChannel: (state, current) => state.current_channel = current,
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
