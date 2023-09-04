import Mock from 'mockjs'

// @[method] = Mock.Random([method])
Mock.mock(new RegExp('/mock/test@method'), () => {
  return Mock.mock({
    code: 0,
    data: new Array(10).fill(0).map(() => {
      return Mock.mock({
        id: Mock.mock('@guid()'),
        name: Mock.mock('@cname()'),
        age: Mock.mock('@integer(20,100)'),
        sex: Mock.mock('@boolean()'),
        address: Mock.mock('@county(true)'),
        ip: Mock.mock('@ip()'),
        birth: Mock.mock('@date(yyyy-MM-dd)'),
        img: Mock.mock("@image('200x100', '#894FC4', '#FFF', 'PNG', 'DYZ')"),
      })
    }),
  })
})

// '[keyName]|[generatorRole]，keyName：也就是字段名、generatorRole：也就是生成规则，具体规则看官网示例
// http://mockjs.com/examples.html#String
Mock.mock(new RegExp('/mock/test'), () => {
  return Mock.mock({
    'code|0-1': 0,
    data: new Array(10).fill(0).map(() => {
      return Mock.mock({
        'number|1-1000': 0,
        'float|1-100.1-10': 1,
      })
    }),
  })
})
