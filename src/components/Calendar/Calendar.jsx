import Calendar from "react-calendar"
import { useState, useEffect } from "react"
// import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

const MyCalendar = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {console.log(date)})
  return (
    <div>
      <Calendar onChange={setDate} value={date}/>
    </div>
  )
}
export default MyCalendar