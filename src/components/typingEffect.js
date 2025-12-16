import { useState, useEffect } from "react";

const TypingEffect = () => {
  const roles = [
    "Full-stack Developer",
    "Backend Engineer",
    "Software Engineer"
  ];

  const [index, setIndex] = useState(0);     // which word
  const [subIndex, setSubIndex] = useState(0); // letter index
  const [deleting, setDeleting] = useState(false); 
  const [blink, setBlink] = useState(true);

  // typing/deleting effect
  useEffect(() => {
    if (index === roles.length) setIndex(0);

    const timeout = setTimeout(() => {
      setSubIndex(prev =>
        deleting ? prev - 1 : prev + 1
      );

      // when full word typed
      if (!deleting && subIndex === roles[index].length) {
        setDeleting(true);
      }

      // when deletion completed
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(prev => (prev + 1) % roles.length);
      }
    }, deleting ? 50 : 120); // speed typing / deleting

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="text-xl sm:text-3xl text-lime-400 font-mono font-bold text-gray-200">
      {roles[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>
        _
      </span>
    </span>
  );
};

export default TypingEffect;
