import getFakeGame from '../../test'

const GameDate = ({ date, activeDate, setActiveDate, setGameCardList }) => {
  const onClickHandler = () => {
    setActiveDate(date)
    // axios.get  e.g. /:date
    // backend await db.execute(query, [req.params.date]);
    const fakeGame = getFakeGame(date)
    if (!fakeGame.success) return console.log('do sth')
    setGameCardList(fakeGame.result)
  }

  const activeEffect = date === activeDate ? 'game-date--active' : ''

  const showTime = date.replace('-', '年') + '月'

  return (
    <div className={`game-date ${activeEffect}`} onClick={onClickHandler}>
      {showTime}
    </div>
  )
}

export default GameDate
