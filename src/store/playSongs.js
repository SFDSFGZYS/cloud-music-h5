import { Toast } from 'vant'
import { timer } from './timer'

const playSongs = {
    state: {
        playing: false,
        playMode: 0,
        playList: [],
        playIndex: 0,
        dom: '',
        duration: '00:00',
        currentTime: '00:00',
        timer: '',
        progressLeft: '0',
        progressWidth: '0%'
    },
    getters: {
        playInfo(state) {
            return state.playList.length === 0 ? {} : state.playList[state.playIndex]
        },
        domUrl(state) {
            return state.dom.src
        }
    },
    mutations: {
        changePlaying(state, play) {
            if (state.playList.length === 0) {
                Toast({
                    message: '播放列表为空，请添加歌曲!'
                })
                return
            }
            if (play) {
                state.playing = true
            } else {
                state.playing = !state.playing
            }
            state.playing ? state.dom.play() : state.dom.pause()
        },
        checkoutMode(state) {
            if (state.playMode !== 2) {
                state.playMode += 1
            } else {
                state.playMode = 0
            }
            let msg
            switch (state.playMode) {
                case 0:
                    msg = '列表循环'
                    break
                case 1:
                    msg = '随机播放'
                    break

                default:
                    msg = '单曲循环'
                    break
            }
            Toast({
                message: msg,
                position: 'bottom',
                duration: 1000
            })
        },
        getAudioDom(state, dom) {
            state.dom = dom
        },
        addPlayList(state, song) {
            state.playList.unshift(song)
            localStorage.setItem('playList', JSON.stringify(state.playList))
        },
        setPlayIndex(state, index) {
            state.playIndex = index
        },
        setAttr(state, obj) {
            for (const key in obj) {
                state[key] = obj[key]
            }
        },
        resetTimer(state) {
            clearInterval(state.timer)
        },
        setTime(state, time) {
            let formatTime = timer(time)
            if (state.playing) {
                state.currentTime = formatTime.currentTime
                state.duration = formatTime.duration
                state.progressLeft = (time.time / time.duration) * 270 + 'px'
                state.progressWidth = (time.time / time.duration) * 100 + '%'
            } else {
                if (state.timer) {
                    clearInterval(state.timer)
                }
            }
        },
        nextSong(state) {
            if (state.playIndex === state.playList.length - 1) {
                state.playIndex = 0
            } else {
                state.playIndex += 1
            }
        },
        preSong(state) {
            if (state.playIndex === 0) {
                state.playIndex = state.playList.length - 1
            } else {
                state.playIndex -= 1
            }
        },
        deleteSong(state, index) {
            state.playList.splice(index, 1)
            localStorage.setItem('playList', JSON.stringify(state.playList))
        }
    },
    actions: {
        setTimer({ commit, state }) {
            if (state.timer) {
                clearInterval(state.timer)
            }
            state.timer = setInterval(() => {
                let time = Math.floor(state.dom.currentTime)
                let duration = Math.floor(state.dom.duration)
                commit('setTime', { time, duration })
                if (time == duration) {
                    if (state.playMode === 2) {
                        return
                    }
                    if (state.playIndex === state.playList.length - 1) {
                        state.playIndex = 0
                    } else {
                        state.playIndex += 1
                    }
                    setTimeout(() => {
                        commit('changePlaying', true)
                    }, 0)
                }
            }, 1000)
        }
    }
}

export default playSongs
