import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = (currentMessage) => {
        const newMessages = currentMessage ? messages.filter(messages => messages != currentMessage) : messages;
        return newMessages[Math.floor(Math.random() * newMessages.length)];
    }

    const [greeting, setGreeting] = useState(randomMessage());

    return (
        <div>
            <h3>{greeting} ¡Gracias por tu visita!</h3>
            <button onClick={() => setGreeting(randomMessage(greeting))}>
                Nuevo saludo
            </button>
        </div>
    );
}
