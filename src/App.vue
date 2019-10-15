<template>
    <div class="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <audio :src="playInfo.url" ref="audio" :loop="playSongs.playMode === 2"></audio>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            el: ''
        }
    },
    computed: {
        ...mapState(['playSongs']),
        ...mapGetters(['playInfo'])
    },
    mounted() {
        this.el = this.$refs.audio
        this.$store.commit('getAudioDom', this.el)
        let playList = (localStorage.getItem('playList') && JSON.parse(localStorage.getItem('playList'))) || []
        this.$store.commit('setAttr', { playList })
    },
    methods: {}
}
</script>

<style lang="less" scoped>
</style>
