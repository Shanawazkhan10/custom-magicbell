export default function Timestamp({ notification }) {
  return (
    <div className="timestamp">
      {notification.sentAt
        ? notification.sentAtDate?.format("H:mm a, dddd, MMMM d YYYY")
        : null}
    </div>
  );
}
