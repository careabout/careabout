import React from 'react'

export default (props) => {
  return (


      <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h3 className="modal-title">{props.title}</h3>
                    </div>
                    <div className="modal-body">
                      <p>{props.description}</p>
                    </div>
                  </div>
                </div>


  )
}
