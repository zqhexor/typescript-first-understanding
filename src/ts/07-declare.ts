// 类型声明
/**
 * 一般自带类型声明模块，如'query-string'；
 * 否则，则安装类型声明模块，如'lodash'，需安装"npm install @type/lodash --dev"
 * 否则，用declare
 */
import dayjs from 'dayjs'
// import * as dayjs from 'dayjs'
console.log(dayjs)

declare function add(x: number): number
