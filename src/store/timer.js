export const timer = ({ time, duration }) => {
    // console.log(this.el.currentTime + ' + ' + this.el.duration)

    // this.progressLeft = (time / duration) * 270 + 'px'
    // this.progressWidth = (time / duration) * 100 + '%'
    let min = Math.floor(time / 60)
    let minD = Math.floor(duration / 60)
    let second = time % 60
    let secondD = duration % 60
    if (min < 10) {
        min = '0' + min
    }
    if (minD < 10) {
        minD = '0' + minD
    }
    if (second < 10) {
        second = '0' + second
    }
    if (secondD < 10) {
        secondD = '0' + secondD
    }
    let currentTime = min + ':' + second
    duration = minD + ':' + secondD
    // console.log(currentTime, duration)
    // state.currentTime = currentTime
    // state.duration = duration
    return { currentTime, duration }
}
