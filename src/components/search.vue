<template>
    <div class="search_box">
        <my-header :right-width="0">
            <template v-slot:middle-header>
                <van-field
                    class="middle_input"
                    v-model="searchInput"
                    placeholder="请输入歌名"
                    :right-icon="rightIcon"
                    @click-right-icon="clickRightIcon"
                    @keyup.enter="searchSongs"
                />
            </template>
        </my-header>
        <div class="song_cells">
            <div
                class="song_cell"
                v-for="item in songsList"
                :key="item.id"
                @click="playMusic(item)"
            >
                <div class="left">
                    <span class="song_name">{{item.name}}</span>
                    <span class="singers">
                        <span
                            class="singer"
                            v-for="(singer,index) in item.artists"
                            :key="singer.id"
                        >{{singer.name}}{{index=== item.artists.length - 1 ? '':'/'}}</span>
                        - {{item.album.name}}
                    </span>
                </div>
            </div>
        </div>
        <div class="footer">
            <bottom-player></bottom-player>
        </div>
    </div>
</template>

<script>
import myHeader from './my-header'
import bottomPlayer from './bottom-player'

export default {
    data() {
        return {
            searchInput: '',
            offset: 0,
            limit: 20,
            songsList: []
        }
    },
    computed: {
        rightIcon() {
            return this.searchInput ? 'xxx iconfont icon-cha' : ''
        }
    },
    methods: {
        async searchSongs() {
            if (!this.searchInput) {
                return
            }
            let params = {
                keywords: this.searchInput,
                limit: this.limit,
                offset: this.offset
            }
            let res = await this.$axios.get(`search`, { params })
            if (res) {
                console.log(res)

                this.songsList = res.result.songs
            }
        },
        async playMusic(item) {
            let res = await this.$axios.get(`/album?id=${item.album.id}`)
            console.log(res.album)
            let album = { name: res.album.name, picUrl: res.album.picUrl }
            let artists = item.artists.map(v => v.name)
            let name = item.name
            let res1 = await this.$axios.get(`/song/url?id=${item.id}`)
            if (res1) {
                console.log(res1)
                let data = Object.assign({ album, artists, name }, { url: res1.data[0].url, id: item.id })
                this.$store.commit('addPlayList', data)
                setTimeout(() => {
                    this.$store.commit('changePlaying', true)
                    this.$store.dispatch('setTimer')
                }, 500)
            }
        },
        pauseMusic() {
            this.$refs.audio.pause()
        },
        clickRightIcon() {
            this.searchInput = ''
        }
    },
    components: { myHeader, bottomPlayer }
}
</script>

<style lang="less" scoped>
.search_box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .middle_input {
        padding: 0.05rem 0.05rem 0.05rem 0;
        height: 100%;
        font-size: 0.16rem;
        color: #333;
        line-height: 0.4rem;
    }
    .song_cells {
        flex: 1;
        overflow: auto;
        padding: 0.1rem 0.16rem;
        .song_cell {
            padding: 0.12rem 0;
            .left {
                display: flex;
                flex-direction: column;
                .song_name {
                    font-size: 0.14rem;
                    margin-bottom: 0.08rem;
                }
                .singers {
                }
            }
        }
    }
    .footer {
        height: 0.5rem;
        .play {
            margin-right: 0.2rem;
        }
    }
}
</style>
<style lang="less">
.middle_input {
    .van-field__body {
        border-bottom: 0.02rem solid #ccc;
        padding-right: 0.15rem;
    }
    // input.van-field__control {
    //     border-bottom: 0.02rem solid #ccc;
    // }
}
</style>