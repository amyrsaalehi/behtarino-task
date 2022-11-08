export default function ShareButton() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <button className="btn btn-ghost" onClick={copyToClipboard}>
      Share
    </button>
  );
}
