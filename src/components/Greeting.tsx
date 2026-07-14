import { useState } from "preact/hooks";

export default function Greeting({ messages }: { messages: string[] }) {
  const [greeting, setGreeting] = useState(messages[0]);
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New greeting</button>
    </div>
  );
}
