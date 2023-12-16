// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBack: true}

  onClickEmoj = () => this.setState({isFeedBack: false})

  isThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="containera">
        <img className="love-image" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="love-heading">Thank you!</h1>
        <p className="paragraph">
          Will We use your feedback to improve customer support performance
        </p>
      </div>
    )
  }

  isFeedBackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoj-list">
          {emojis.map(eachItem => (
            <li className="list" key={eachItem.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickEmoj}
              >
                <img
                  className="image-url"
                  alt={eachItem.name}
                  src={eachItem.imageUrl}
                />
              </button>
              <p className="emoj-paragraph">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedBack ? this.isFeedBackScreen() : this.isThankyouScreen()}
        </div>
      </div>
    )
  }
}
export default Feedback
