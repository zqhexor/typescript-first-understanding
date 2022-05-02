// 接口
interface Person {
  name: string
  age: number
}
function printPerson(p: Person): void {
  console.log(p.name, p.age)
}
printPerson({name: '萧瑟', age: 24})

interface Post {
  title: string
  content: string
  subtitle?: string // 可选参数
  readonly summary: string // 只读参数
}
const post:Post = {
  title: 'Ti10',
  content: 'final',
  summary: 'dead game'
}
// post.summary = 'good' // 不能更改

/**
 * 动态参数
 */
interface CacheStore {
  [prop: string]: string
}
const cache:CacheStore = {}
cache.foo = 'value1'
cache.moo = 'value2'
