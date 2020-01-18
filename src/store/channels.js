import axios from 'axios'

const state = {
    all_channels: [],
    current_channel: null,
    currently_playing: {},
    paused: false,
}
const getters = {
    allChannels: state => state.all_channels,
    currentChannel: state => state.current_channel,
    currentlyPlaying: state => state.currently_playing,
    paused: state => state.paused,
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
    },
    async pause({commit}){
        axios.get('/api/pause')

        commit('setPaused', true)
    },
    async resume({commit}){
        axios.get('/api/resume')

        commit('setPaused', false)
    },
}
const mutations = {
    setAllChannels: (state, channels)=> state.all_channels = channels,
    setCurrentChannel: (state, current) => state.current_channel = current,
    setCurrentlyPlaying: (state, channel) => state.currently_playing = channel,
    setPaused: (state, paused) => state.paused = paused,
}


export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
