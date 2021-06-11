import { Notification, observer } from "@magicbell/magicbell-react";

function UnreadState({ notification }: { notification: Notification }) {
  return (
    <div className="unread-state">
      {notification.isRead ? null : (
        <svg viewBox="0 0 512 512">
          <circle cx="256" cy="256" r="64" />
        </svg>
      )}
    </div>
  );
}

export default observer(UnreadState);
