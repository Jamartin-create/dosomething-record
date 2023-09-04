import Mock from 'mockjs'

Mock.mock(new RegExp('/mock/test'), () => {
  return {
    id: Mock.mock('@guid()'),
    name: Mock.mock('@cname()'),
    age: Mock.mock('@integer()'),
    sex: Mock.mock('@boolean()'),
    address: Mock.mock('@county(true)'),
    ip: Mock.mock('@ip()'),
  }
})
