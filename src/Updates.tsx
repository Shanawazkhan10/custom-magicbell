import MagicBell, {
  FloatingNotificationInbox
} from "@magicbell/magicbell-react";
import React from "react";
import CustomNotification from "./CustomNotification";

/**
 * MagicBell wrapper.
 *
 * Renders a MagicBell instance:
 *   - without the pointing arrow
 *   - with custom border radius for all elements
 *   - with a custom text for the header
 *   - with a custom component for each notification (see CustomNotification.tsx)
 */
export default function Updates() {
  return (
    <MagicBell
      apiKey="df24a28e8921181f6c4220fc306ba76701592d21"
      userEmail="josue@magicbell.io"
      theme={{
        icon: { borderColor: "white" },
        header: {
          borderRadius: "6px",
          backgroundColor: "#F6F6F9",
          textColor: "#545465"
        },
        footer: {
          borderRadius: "6px",
          backgroundColor: "#F6F6F9",
          textColor: "#545465"
        },
        notification: {
          default: { borderRadius: "6px" },
          unread: { borderRadius: "6px" },
          unseen: { borderRadius: "6px" }
        }
      }}
      locale={{
        name: "en",
        translations: {
          header: {
            title: "All Updates",
            "mark-all-read": "Mark all as read"
          }
        }
      }}
    >
      {(props) => (
        <FloatingNotificationInbox
          height={450}
          NotificationItem={CustomNotification}
          layout={["content", "push-notifications-banner", "header"]}
          hideArrow
          {...props}
        />
      )}
    </MagicBell>
  );
}
