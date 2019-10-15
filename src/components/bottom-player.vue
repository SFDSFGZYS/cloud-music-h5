<template>
    <div class="bottom_player" v-if="playSongs.playList.length !== 0">
        <div class="left" @click="$router.push('/playPage')">
            <div class="img_box">
                <img :src="playInfo.album&&playInfo.album.picUrl" alt />
            </div>
            <div class="song_info">
                <div class="name">{{playInfo.name}}</div>
                <div class="desc">横滑可以切换上下曲哦</div>
            </div>
        </div>
        <div class="right">
            <van-circle
                v-model="rate"
                color="#f00"
                fill="#fff"
                size="0.24rem"
                layer-color="#ccc"
                :stroke-width="20"
            />
            <i
                :class="{'icon-z': !playSongs.playing,'icon-iconfront-':playSongs.playing}"
                class="play_btn iconfont"
                @click.prevent="changePlaying"
            ></i>
            <i class="play_list iconfont icon-bofangliebiao" @click="showList"></i>
        </div>
        <van-popup v-model="showSongList" position="bottom" class="popup_songs">
            <song-list></song-list>
        </van-popup>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import songList from './song-list'

export default {
    data() {
        return {
            showSongList: false
        }
    },
    computed: {
        ...mapState(['playSongs']),
        ...mapGetters(['playInfo']),
        rate: {
            set() {},
            get() {
                return parseInt(this.playSongs.progressWidth)
            }
        }
    },
    methods: {
        changePlaying() {
            this.$store.commit('changePlaying')
            if (this.playSongs.playing) {
                this.$store.dispatch('setTimer')
            }
        },
        showList() {
            this.showSongList = true
        }
    },
    components: { songList }
}
</script>

<style lang="less" scoped>
.bottom_player {
    width: 100%;
    height: 0.5rem;
    border-top: 0.01rem solid #f6f6f6;
    padding: 0.05rem 0;
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
        flex: 1;
        .img_box {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 0.05rem;
            border-radius: 50%;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .song_info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
                margin-bottom: 0.05rem;
            }
            .desc {
                color: #999;
                font-size: 0.1rem;
            }
        }
    }
    .right {
        display: flex;
        align-items: center;
        position: relative;
        // i {
        //     margin: 0 0.1rem;
        // }
        .play_btn {
            position: absolute;
            width: 0.24rem;
            height: 0.24rem;
            // border-radius: 50%;
            // border: 0.01rem solid #ccc;
            left: 0;
            color: #ccc;
            font-size: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &.icon-z {
                font-size: 0.16rem;
            }
            &.icon-iconfront- {
                color: #fa5555;
            }
        }
        .play_list {
            margin: 0 0.1rem 0 0.2rem;
            font-size: 0.2rem;
            color: #666;
        }
    }
    .popup_songs {
        background-color: transparent;
    }
}
</style>
