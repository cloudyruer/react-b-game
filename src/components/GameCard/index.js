import { LOGO_PATH } from '../../config'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-tw'

const GameCard = ({ v }) => {
  const { gameId, date, time, location, team } = v

  const btnClickHandler = (e) => {
    // NOTE
    // 根據情境: 每個賽程表，有兩個連結
    // 但因為沒有實作該兩頁面 因此阻止預設行為 避免被換頁 推history
    // 但也因此URL不會改變!!
    const note =
      '根據情境:每個賽程表有兩個連結。由於尚未有該兩連結的頁面，因此阻止預設行為(preventDefault)，但也因此URL不會改變'

    e.preventDefault()

    alert(JSON.stringify({ gameId, date, time, NOTE: note }, null, 4))
  }

  moment.locale()
  const dateAndDay = moment(date).format('M[月]D[日][ (]dd[) ]')

  return (
    <div className="game-card">
      <div className="game-card__sb game-card__sb--py0">
        <div className="game-card__info">
          {dateAndDay} {time}
        </div>
        <div className="game-card__info">例行賽</div>
      </div>

      <div className="game-card__sb">{location}</div>
      <div className="game-card__sb game-card__sb">
        <div className="game-team">
          <div className="game-team__logo">
            <img src={LOGO_PATH + team[0].teamLogo} alt="" />
          </div>
          <div className="game-team__name">{team[0].teamName}</div>
        </div>
        <div className="game-card__score">{team[0].score}</div>
      </div>
      <div className="game-card__sb">
        <div className="game-team">
          <div className="game-team__logo">
            <img src={LOGO_PATH + team[1].teamLogo} alt="" />
          </div>
          <div className="game-team__name">{team[1].teamName}</div>
        </div>
        <div className="game-card__score">{team[1].score}</div>
      </div>

      <div className="game-card__sb game-card__sb--px0">
        <Link
          to={'/detail/' + gameId}
          className="btn"
          onClick={btnClickHandler}
        >
          查看詳情
        </Link>
        <Link
          to={'/purchase/' + gameId}
          className="btn btn--purchase"
          onClick={btnClickHandler}
        >
          購票
        </Link>
      </div>
    </div>
  )
}

export default GameCard
