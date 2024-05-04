import validators from './validator'

const formatNumber = n => {
  if (validators.isNull(n)) {
    return validators.emptyStr()
  }

  n = n.toString()
  return n[1] ? n : `0${n}`
}

const formatSimpleTime = date => {
  if (validators.isNull(date)) {
    return validators.emptyStr()
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map(formatNumber).join('/')}`
}

const formatTime = date => {
  if (validators.isNull(date)) {
    return validators.emptyStr()
  }

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const getTimeText = date => {
  if (validators.isNull(date)) {
    return validators.emptyStr()
  }

  let targetTime = new Date(date).getTime()
  let now = new Date().getTime()
  let delta = now - targetTime
  if (delta < 60000) {
    return '刚刚'
  } else if (delta >= 60000 && delta < 3600000) {
    return Math.floor(delta / 60000) + '分钟前'
  } else if (delta >= 3600000 && delta < 86400000) {
    return Math.floor(delta / 3600000) + '小时前'
  } else if (delta >= 86400000 && delta < 86400000 * 7) {
    return Math.floor(delta / 86400000) + '天前'
  } else {
    return '7天前'
  }
}

export default {
  formatTime,
  formatSimpleTime,
  getTimeText
}
