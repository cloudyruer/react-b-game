import dec20 from './fakeGame/2020-12.json'
import jan21 from './fakeGame/2021-1.json'
import feb21 from './fakeGame/2021-2.json'
import mar21 from './fakeGame/2021-3.json'
import apr21 from './fakeGame/2021-4.json'
import may21 from './fakeGame/2021-5.json'
import jun21 from './fakeGame/2021-6.json'
import jul21 from './fakeGame/2021-7.json'

const getFakeGame = (date) => {
  switch (date) {
    case '2020-12':
      return dec20
    case '2021-1':
      return jan21
    case '2021-2':
      return feb21
    case '2021-3':
      return mar21
    case '2021-4':
      return apr21
    case '2021-5':
      return may21
    case '2021-6':
      return jun21
    case '2021-7':
      return jul21
    default:
      return dec20
  }
}

export default getFakeGame
