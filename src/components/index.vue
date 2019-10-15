<template>
    <div class="index">
        <van-popup v-model="popupVisible" position="left" class="user_info">
            <side-popup></side-popup>
        </van-popup>
        <div class="main_body">
            <div class="header">
                <div class="left">
                    <van-icon class="icon_nav" name="wap-nav" @click="popupVisible=true" />
                </div>
                <div class="tab_bar">
                    <van-tabbar
                        v-model="active"
                        active-color="#333"
                        nactive-color="#999"
                        :fixed="false"
                        @change="tabChange"
                    >
                        <van-tabbar-item>我的</van-tabbar-item>
                        <van-tabbar-item>发现</van-tabbar-item>
                        <van-tabbar-item>朋友</van-tabbar-item>
                        <van-tabbar-item>视频</van-tabbar-item>
                    </van-tabbar>
                </div>
                <div class="search">
                    <van-icon class="icon_search" name="search" @click="routerTo('/search')" />
                </div>
            </div>
            <div class="swiper_main">
                <van-swipe
                    :autoplay="0"
                    indicator-color="white"
                    :loop="false"
                    @change="changeSwiper"
                    ref="swiper"
                >
                    <van-swipe-item>
                        <div class="desc">
                            1、可以通过搜索后点击歌曲进行播放，每点击一首会往歌单添加一首歌
                            <br />2、歌单中有歌的时候，底部播放栏才会出现
                            <br />3、点击歌单的歌曲可以切换歌曲，点击叉叉可以删除歌单的歌曲
                            <br />4、目前只支持单曲循环和列表循环模式，不保证兼容iPhone
                            <br />5、要是有问题请刷新后重试。。
                        </div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div>2</div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div>3</div>
                    </van-swipe-item>
                    <van-swipe-item>
                        <div>4</div>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="footer">
                <bottom-player></bottom-player>
            </div>
        </div>
    </div>
</template>

<script>
import sidePopup from './sidePopup'
import bottomPlayer from './bottom-player'
export default {
    components: { sidePopup, bottomPlayer },
    data() {
        return {
            popupVisible: false,
            active: 0
        }
    },
    created() {},
    methods: {
        routerTo(val) {
            this.$router.push(val)
        },
        tabChange(val) {
            this.$refs.swiper.swipeTo(val)
        },
        changeSwiper(val) {
            this.active = val
        }
    }
}
</script>

<style lang="less" scoped>
.user_info {
    width: 85%;
    height: 100%;
}
.index {
    width: 100%;
    height: 100%;
    .main_body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header {
            width: 100%;
            height: 0.6rem;
            display: flex;
            line-height: 0.6rem;
            padding: 0 0.16rem;
            .left,
            .search {
                font-size: 0.2rem;
                width: 0.6rem;
                display: flex;
                align-items: center;
            }
            .search {
                justify-content: flex-end;
            }
            .tab_bar {
                flex: 1;
                .van-tabbar {
                    height: 100%;
                    &.van-hairline--top-bottom::after {
                        border: 0;
                    }
                    .van-tabbar-item {
                        font-size: 0.12rem;
                        font-family: 'PingFangSC-Semibold', sans-serif;
                        line-height: 0.6rem;
                        .van-tabbar-item__icon {
                            margin-bottom: 0;
                        }
                        .van-tabbar-item__text {
                            font-weight: bold;
                        }
                        &.van-tabbar-item--active {
                            font-size: 0.16rem;
                        }
                    }
                }
            }
        }
        .swiper_main {
            width: 100%;
            // height: 5rem;
            flex: 1;
            .van-swipe {
                height: 100%;
                .van-swipe-item {
                    width: 100%;
                }
                .desc {
                    line-height: 0.2rem;
                    padding-left: 0.16rem;
                }
            }
        }
        .footer {
        }
    }
}
</style>
<style lang="less">
.index {
    .main_body {
        .header {
            .tab_bar {
                .van-tabbar-item__icon {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>