import { observer } from "@magicbell/magicbell-react";

function Actions({ notification }) {
  if (notification.customAttributes?.action)
    return (
      <div className="actions">
        <button>{notification.customAttributes?.action?.title}</button>
      </div>
    );

  return null;
}

export default observer(Actions);
