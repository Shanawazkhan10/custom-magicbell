export default function Sender({ notification }) {
  return (
    <div className="sender">
      {notification.customAttributes?.sender && (
        <img
          src={notification.customAttributes?.sender.profile?.thumb128}
          alt={notification.customAttributes?.sender.name || ""}
        />
      )}
    </div>
  );
}
