import React from 'react'
import Alert from '@material-ui/lab/Alert'

const AlertMessage = ({ severity, error, onClose, customClass }) => {
  return (
    <>
      <Alert
        className={customClass && customClass.text}
        onClose={
          onClose
            ? () => {
                onClose()
              }
            : () => {}
        }
        severity={severity}
      >
        {error}
      </Alert>
    </>
  )
}

export default AlertMessage
