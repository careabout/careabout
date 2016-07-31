import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <Link to={`decision/${props._id}`}>
            <h3 className="modal-title">{props.title}</h3>
          </Link>
        </div>
        <div className="modal-body">
          <div dangerouslySetInnerHTML={{__html: props.description}}/>
        </div>
      </div>
    </div>
  )
}
