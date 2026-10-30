import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState<string | number>(-1);

    useEffect(() => {
        setLastMessage(-1);

        const handleMessage = (message: string) => {
            setLastMessage(message);
        };
        subscribe(props.sourceId, handleMessage);

        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
