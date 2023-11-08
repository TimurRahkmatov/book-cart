import { Button } from '@mui/material'
import React from 'react'

const EditButton = ({handleOpenModal, id}) => {
  return (
    <Button sx={{width: "87px" , height: '33px' , backgroundColor: 'green' , display: "flex" , alignItems: 'center' , gap: '0.3rem' , color: "#fff"  , textTransform: "none" , ":hover": {
        backgroundColor: "#fff",
        color: "green",
        textTransform: 'none',
        border: "1px solid green",
      }}} onClick={() => handleOpenModal(true, id)}>
    <i className="fa-solid fa-pen-nib"></i>
      Edit
    </Button>
  )
}

export default EditButton