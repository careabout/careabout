import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  var description = props.description.substring(0, 200) + '...'
  return (
    <Link to={`decision/${props._id}`} className="nounderline">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <div dangerouslySetInnerHTML={{__html: description}}/>
          </div>
        </div>
      </div>
    </Link>
  )
}
