export const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy:true,
        maximumAge:1000
      }
      const errorMap = {
        1: '位置服务被拒绝',
        2: '暂时获取不到位置信息',
        3: '获取地理位置信息超时',
        4: '获取地址位置时发生未知错误'
      }

      const successHook = (position) => {
        resolve(position.coords)
      }

      const errorHook = (error) => {
        reject(errorMap[error.code])
      }
      navigator.geolocation.getCurrentPosition(successHook, errorHook, options)
    } else {
      reject('浏览器不支持获取地理位置')
    }
  })
}
