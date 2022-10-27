import Calendar from "react-calendar"
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { dateFormatter } from "./calendarData";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const handleClick = () => {
  return
}

const MyCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {console.log(date)})
  return (
    <div>
      <Calendar onChange={setDate} value={date} onClickDay={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book a trip starting: 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The Selected Date is: {dateFormatter(date)}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
export default MyCalendar