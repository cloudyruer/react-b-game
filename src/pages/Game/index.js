import { useState, useEffect } from 'react'

import fakeDate from '../../test/date.json'

// components
import Container from '../../components/Container'
import Banner from '../../components/Banner'
import GameInfo from '../../components/GameInfo'
import GameWrap from '../../components/GameWrap'
import GameDate from '../../components/GameDate'
import GameCard from '../../components/GameCard'

const Game = () => {
  const [gameDateList, setGameDateList] = useState([])
  const [gameCardList, setGameCardList] = useState([])

  const [activeDate, setActiveDate] = useState('')

  useEffect(() => {
    const getDateInfo = async () => {
      //TODO:
      // axios.get ....
      if (!fakeDate.success) return console.log('do sth')
      setGameDateList(fakeDate.result)
    }
    getDateInfo()
  }, [])

  const renderedGameDate = gameDateList.map((v) => {
    return (
      <GameDate
        key={v.date}
        date={v.date}
        activeDate={activeDate}
        setActiveDate={setActiveDate}
        setGameCardList={setGameCardList}
      />
    )
  })

  const renderedGameCard = gameCardList.map((v) => {
    return <GameCard key={v.gameId} v={v} />
  })

  return (
    <Container>
      <Banner />
      <GameInfo />

      <GameWrap>{renderedGameDate}</GameWrap>
      <GameWrap>{renderedGameCard}</GameWrap>
    </Container>
  )
}

export default Game
