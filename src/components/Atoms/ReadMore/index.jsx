import { useState } from "react";

export default function ReadMore({ className = "", sliceLength, children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore((prev) => !prev);
  };

  return (
    <>
      <p className={className}>
        {isReadMore ? text.slice(0, sliceLength) : text}
      </p>
      <span onClick={toggleReadMore} className="btn btn-ghost btn-block">
        {isReadMore ? "read more" : " show less"}
      </span>
    </>
  );
}
