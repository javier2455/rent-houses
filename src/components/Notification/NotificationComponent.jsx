import { Notification } from 'keep-react'

export default function NotificationComponent({
  showNotification,
  onDismiss,
  title,
  desciption
}) {
  return (
    <Notification
      dismiss={showNotification}
      onDismiss={onDismiss}
      className='dark:bg-slate-900 dark:border border-violet-700 dark:lg:shadow-violet-700 dark:lg:shadow-md'
    >
      <Notification.Body>
        <Notification.Title className='dark:text-white'>
          {title}
        </Notification.Title>
        <Notification.Description className='dark:text-white'>
          {desciption}
        </Notification.Description>
        {/* <Notification.Container className='!mt-6 flex gap-3'>
          <Button type='primary' size='sm'>
            Accept
          </Button>
          <Button type='outlineGray' size='sm'>
            Review
          </Button>
        </Notification.Container> */}
      </Notification.Body>
    </Notification>
  )
}
