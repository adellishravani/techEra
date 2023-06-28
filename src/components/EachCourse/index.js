import {Link} from 'react-router-dom'
import './index.css'

const EachCourse = props => {
  const {eachdata} = props
  const {name, logoUrl, id} = eachdata
  return (
    <Link to={`/course/>${id}`}>
      <div className="card">
        <img src={logoUrl} alt={name} className="image" />
        <p>{name}</p>
      </div>
    </Link>
  )
}

export default EachCourse
