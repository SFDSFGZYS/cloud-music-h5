<template>
    <div class="song_list">
        <div class="title">
            <div class="left">
                <i class="iconfont play_mode" :class="playMode.class"></i>
                <span>{{playMode.title}}（{{playSongs.playList && playSongs.playList.length}}）</span>
            </div>
            <div class="right"></div>
        </div>
        <div class="content">
            <div class="item" v-for="(item, i) in playSongs.playList" :key="i">
                <div
                    class="name"
                    :class="{active:item.id === playInfo.id}"
                    @click="checkoutSong(i)"
                >
                    <span class="song_name">{{item.name}}</span>
                    <span class="icon">-</span>
                    <span
                        class="singer"
                        v-for="(singer,index) in item.artists"
                        :key="index"
                    >{{singer}}{{index=== item.artists.length - 1 ? '':'/'}}</span>
                </div>
                <div class="close iconfont icon-cha" @click="delSong(i)"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['playSongs']),
        ...mapGetters(['playInfo']),
        playMode() {
            switch (this.playSongs.playMode) {
                case 1:
                    return { title: '随机播放', class: 'icon-icon-2' }
                    break
                case 2:
                    return { title: '单曲循环', class: 'icon-icon-' }
                    break
                default:
                    return { title: '列表循环', class: 'icon-icon-1' }
                    break
            }
        }
    },
    methods: {
        delSong(index) {
            this.$store.commit('deleteSong', index)
        },
        checkoutSong(index) {
            this.$store.commit('setPlayIndex', index)
            this.$nextTick(() => this.$store.commit('changePlaying', true))
        }
    }
}
</script>

<style lang="less" scoped>
.song_list {
    width: 100%;
    height: 4.2rem;
    background-color: #fff;
    border-radius: 0.16rem 0.16rem 0 0;
    border-top: 0.01rem solid #969696;
    .title {
        border-bottom: 0.01rem solid #efefef;
        padding: 0 0.1rem;
        height: 0.46rem;
        display: flex;
        justify-content: space-between;
        .left {
            display: flex;
            align-items: center;
            .play_mode {
                &:before {
                    font-size: 0.2rem;
                }
                margin-right: 0.05rem;
            }
        }
        .right {
        }
    }
    .content {
        background-color: #fff;
        .item {
            width: 100%;
            height: 0.44rem;
            padding: 0 0.1rem;
            display: flex;
            justify-content: space-between;
            .name {
                width: 2.6rem;
                display: flex;
                align-items: center;
                &.active {
                    color: #e20000;
                    .song_name {
                        color: #e20000;
                    }
                }
                .song_name {
                    font-size: 0.16rem;
                    color: #000;
                }
                .icon {
                    margin: 0 0.05rem;
                }
            }
            .close {
                display: flex;
                align-items: center;
                color: #bababa;
            }
        }
    }
}
</style>
