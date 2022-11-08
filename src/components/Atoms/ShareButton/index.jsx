import { AiOutlineShareAlt } from "react-icons/ai";

export default function ShareButton() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };
  return (
    <button className="btn btn-ghost btn-circle" onClick={copyToClipboard}>
      <AiOutlineShareAlt size={30} />
    </button>
  );
}
