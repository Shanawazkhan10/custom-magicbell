import React from "react";
import {
  Notification,
  observer,
  useNotificationWorkflow
} from "@magicbell/magicbell-react";
import Title from "./Title";
import Timestamp from "./Timestamp";
import Sender from "./Sender";
import Content from "./Content";
import UnreadState from "./UnreadState";
import Actions from "./Actions";

interface CustomNotificationProps {
  notification: Notification;
  onClick?: (notification: Notification) => void;
}

/**
 * Custom component to render MagicBell notifications.
 * The component receives the notification object.
 * This component renders:
 *   - the timestamp underneath the message
 *   - the notification indicator at the left
 *   - a line to separate each notification (see styles.css)
 *   - the profile image of the user who triggered notification (through custom attributes)
 */
function CustomNotification({
  notification,
  onClick
}: CustomNotificationProps) {
  useNotificationWorkflow(notification);

  const handleClick = () => {
    // if (onClick) onClick(notification);
    if (!notification.isRead) notification.markAsRead();
    else notification.markAsUnread();
  };

  return (
    <div
      className={`custom-notification ${
        notification.isSeen ? "seen" : "unseen"
      }`}
    >
      <UnreadState notification={notification} />
      <div className="container" onClick={handleClick}>
        <Sender notification={notification} />
        <div>
          <Title notification={notification} />
          <Timestamp notification={notification} />
          <Content notification={notification} />
          <Actions notification={notification} />
        </div>
      </div>
    </div>
  );
}

export default observer(CustomNotification);
