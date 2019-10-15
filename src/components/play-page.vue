<template>
    <div class="play_page">
        <my-header white>
            <template v-slot:middle-header>
                <div class="mid_title">
                    <div class="name">{{playInfo.name}}</div>
                    <div class="desc">
                        <span
                            v-for="(item, index) in playInfo.artists"
                            :key="index"
                        >{{item}}{{index===playInfo.artists.length - 1 ? '':'/'}}</span>
                        >
                    </div>
                </div>
            </template>
            <template v-slot:right-header>
                <i class="iconfont icon-fenxiang"></i>
            </template>
        </my-header>
        <div class="play_info">
            <div class="img_box">
                <img :src="playInfo.album.picUrl" alt />
            </div>
        </div>
        <div class="play_control">
            <div class="progress_box">
                <div class="now_time">{{ playSongs.currentTime}}</div>
                <div class="progress_main">
                    <div class="progress" :style="{width:playSongs.progressWidth}"></div>
                    <div class="progress_dot" :style="{left:playSongs.progressLeft}"></div>
                </div>
                <div class="total_time">{{ playSongs.duration }}</div>
            </div>
            <div class="control">
                <i
                    class="iconfont play_mode"
                    :class="playMode"
                    @click="$store.commit('checkoutMode')"
                ></i>
                <i class="iconfont icon-shangyiqu101 prev" @click="preSong"></i>
                <i
                    class="iconfont play"
                    :class="{'icon-zanting':playSongs.playing,'icon-play':!playSongs.playing}"
                    @click="changePlaying"
                ></i>
                <i class="iconfont icon-xiayiqu101 next" @click="nextSong"></i>
                <i class="iconfont play_list icon-bofangliebiao" @click="showList"></i>
            </div>
        </div>
        <van-popup v-model="showSongList" position="bottom" class="popup_songs">
            <song-list></song-list>
        </van-popup>
    </div>
</template>

<script>
import myHeader from './my-header'
import songList from './song-list'
import { mapState, mapGetters } from 'vuex'

export default {
    data() {
        return {
            showSongList: false
        }
    },
    computed: {
        ...mapState(['playSongs']),
        ...mapGetters(['playInfo']),
        playMode() {
            switch (this.playSongs.playMode) {
                case 1:
                    return 'icon-icon-2'
                    break
                case 2:
                    return 'icon-icon-'
                    break
                default:
                    return 'icon-icon-1'
                    break
            }
        },

        progressWidth() {},
        currentTime() {},
        duration() {}
    },
    mounted() {
        // this.playSongs.dom.ontimeupdate = this.audioRunning(this.playSongs.dom)
    },
    methods: {
        changePlaying() {
            // if (this.playSongs.playing) {
            //     this.$refs.audio.pause()
            // } else {
            //     this.$refs.audio.play()
            // }
            this.$store.commit('changePlaying')
            if (this.playSongs.playing) {
                this.$store.dispatch('setTimer')
            }
        },
        nextSong() {
            this.$store.commit('nextSong')
            this.$nextTick(() => this.$store.commit('changePlaying', true))
        },
        preSong() {
            this.$store.commit('preSong')
            this.$nextTick(() => this.$store.commit('changePlaying', true))
        },
        showList() {
            this.showSongList = true
        }
    },
    components: { myHeader, songList }
}
</script>

<style lang="less" scoped>
.play_page {
    background-color: #646663;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .icon-fenxiang {
        color: #e7e7e7;
    }
    .mid_title {
        width: 100%;
        height: 100%;
        line-height: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
            font-size: 0.16rem;
            margin-bottom: 0.05rem;
        }
        .desc {
            color: #999;
        }
    }
    .play_info {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .img_box {
            width: 2.32rem;
            height: 2.32rem;
            border-radius: 50%;
            overflow: hidden;
            animation: imgRoll 15s linear infinite;
            img {
                width: 100%;
                height: 100%;
            }
        }
        @keyframes imgRoll {
            from {
                transform: rotateZ(0);
            }
            to {
                transform: rotateZ(360deg);
            }
        }
    }
    .play_control {
        color: #fff;
        .progress_box {
            display: flex;
            justify-content: center;
            align-items: center;
            .progress_main {
                width: 2.7rem;
                height: 0.02rem;
                margin: 0 0.1rem;
                background-color: #43494d;
                position: relative;
                .progress {
                    height: 100%;
                    background-color: #96978d;
                }
                .progress_dot {
                    position: absolute;
                    top: -0.02rem;
                    width: 0.06rem;
                    height: 0.06rem;
                    border-radius: 50%;
                    background-color: #fff;
                }
            }
        }
        .control {
            display: flex;
            justify-content: center;
            padding: 0.22rem 0;
            i {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 0.16rem;
                font-size: 0.24rem;
            }
            .play {
                width: 0.48rem;
                height: 0.48rem;
                border-radius: 50%;
                border: 0.01rem solid #fff;
                font-size: 0.26rem;
            }
        }
    }
    .popup_songs {
        background-color: transparent;
    }
}
</style>
