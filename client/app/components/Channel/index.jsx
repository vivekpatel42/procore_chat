import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { sendMessage, closeChannel } from '../../actions'

const Channel = ({ friendlyName, uniqueName, messages, sendMessage, closeChannel }) =>
  <div className="channel border">
    <label>
      <b>{friendlyName}</b>
      <button onClick={() => closeChannel(uniqueName)}>CLOSE</button>
      <input type="checkbox" className="checkbox" />
      <div>
        <ul>
          {messages.map(({ index, body, author }) =>
            <li key={index}><b>{author}</b>: {body}</li>
          )}
        </ul>
        <input
          type="text"
          className="messageInput"
          onKeyPress={({ target, key }) => {
            if (key === 'Enter') {
              const message = target.value
              target.value = ''
              sendMessage(uniqueName, message)
            }
          }}
        />
      </div>
    </label>
  </div>

export default connect(
  state => ({ ...state, sendMessage }),
  { closeChannel }
)(Channel)
