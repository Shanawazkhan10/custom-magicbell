export default function Content({ notification }) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: notification.content }}
    />
  );
}
