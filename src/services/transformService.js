const weebendMap = ['天', '一', '二', '三', '四', '五', '六']

export const transformWeekend = (number) => {
  number = (number || 0) % 7
  return `星期${weebendMap[number]}`
}
