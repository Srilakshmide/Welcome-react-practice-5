import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClickSubscribe = () => {
    const {isSubscribed} = this.state
    this.setState(() => ({
      isSubscribed: !isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            className="button"
            type="button"
            onClick={this.onClickSubscribe}
          >
            Subscribe
          </button>
        ) : (
          <button
            className="button"
            type="button"
            onClick={this.onClickSubscribe}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
