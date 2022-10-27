import styles from './Landing.module.css'
import MyCalendar from '../../components/Calendar/Calendar'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <MyCalendar />
    </main>
  )
}

export default Landing
