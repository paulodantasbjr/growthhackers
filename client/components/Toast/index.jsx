import { Alert } from '@material-ui/lab'

import { ToastStyled } from './styled'

export const Toast = ({ info, handleClose }) => {
  return (
    <ToastStyled>
      <Alert severity={info.title} onClose={handleClose} variant='filled'>
        {info.msg}
      </Alert>
    </ToastStyled>
  )
}
