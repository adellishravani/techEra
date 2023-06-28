import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

import EachCourse from '../EachCourse'

const apistatus = {
  success: 'success',
  falure: 'failure',
  loading: 'loading',
}

class TechEra extends Component {
  state = {status: '', TechData: []}

  componentDidMount() {
    this.gettechData()
  }

  gettechData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.courses.id,
      name: each.courses.id,
      logoUrl: each.courses.logo_url,
      total: each.total,
    }))
    this.setState({TechData: updatedData, status: apistatus.success})
  }

  rendersuccessView = () => {
    const {TechData} = this.state
    return (
      <div>
        {TechData.map(each => (
          <EachCourse key={each.id} eachdata={each} />
        ))}
      </div>
    )
  }

  renderfailureView = () => {
    this.setState({status: apistatus.failure})
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button type="button">Retry</button>
      </div>
    )
  }

  renderloaderView = () => {
    this.setState({status: apistatus.loading})
    return (
      <div>
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    )
  }

  renderstatusview = () => {
    const {status} = this.state
    switch (status) {
      case 'success':
        return this.rendersuccessView()
      case 'failure':
        return this.renderfailureView()
      case 'loading':
        return this.renderloaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderstatusview()}</div>
      </div>
    )
  }
}

export default TechEra
