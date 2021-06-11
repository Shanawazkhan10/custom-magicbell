export default function Title({ notification }) {
  return (
    <div className="title">
      <b>{notification.customAttributes?.sender?.name}</b> {notification.title}
    </div>
  );
}
