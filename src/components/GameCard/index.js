import { LOGO_PATH } from '../../config'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-tw'

const GameCard = ({ v }) => {
  const { gameId, date, time, location, team } = v

  const btnClickHandler = (e) =>
    alert(JSON.stringify({ gameId, date, time }, null, 4))

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
        <Link to="/" className="btn">
          查看詳情
        </Link>
        <Link to="/" className="btn btn--purchase" onClick={btnClickHandler}>
          購票
        </Link>
      </div>
    </div>
  )
}

export default GameCard
