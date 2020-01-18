import axios from 'axios'

const state = {
    all_channels: [],
    current_channel: null,
    currently_playing: {},
}
const getters = {
    allChannels: state => state.all_channels,
    currentChannel: state => state.current_channel,
    currentlyPlaying: state => state.currently_playing,
}
const actions = {
    async getAllChannels({commit}){
        const response = await axios.get('/api/channels')

        commit('setAllChannels', response.data)
    },
    async getChannel({commit}, id){
        const response = await axios.get(`/api/channel/${id}`)

        commit('setCurrentlyPlaying', response.data)
    },
    async getCurrentChannel({commit}){
        const response = await axios.get('/api/current-channel')

        commit('setCurrentChannel', response.data.current_channel)

        return response
    },
    async selectChannel({commit}, id){
        const response = await axios.post(`/api/select-channel/${id}`)

        // dispatch('getCurrentChannel')

        commit('setCurrentChannel', response.data.current_channel)
    },
    async addChannel({dispatch, getters}, channel){
        channel.id = getters.allChannels.length
        const response = await axios.post('/api/new-channel', channel)

        dispatch('getAllChannels')

        return response
    }
}
const mutations = {
    setAllChannels: (state, channels)=> state.all_channels = channels,
    setCurrentChannel: (state, current) => state.current_channel = current,
    setCurrentlyPlaying: (state, channel) => state.currently_playing = channel,
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
