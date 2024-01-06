import { Button } from 'keep-react'
import { useState } from 'react'
import NotificationComponent from '../components/Notification/NotificationComponent'

export default function SignUp() {
  const [showNotification, setShowNotification] = useState(true)

  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  return (
    <section className='container mx-auto mb-14 h-screen'>
      <Button onClick={onDismiss} type='primary'>
        Show Notification
      </Button>
      <NotificationComponent
        showNotification={showNotification}
        onDismiss={onDismiss}
        title={'In Development'}
        desciption={'I am working in the funtionalities and desing for this page'}
      />
    </section>
  )
}
