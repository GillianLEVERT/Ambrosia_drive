import React, { useEffect } from 'react'
import { useAtomValue } from 'jotai'
import { sessionIdAtom } from "../../store/atom";
import Cookies from 'js-cookie';

export const Checkout = () => {
    const sessionId = useAtomValue(sessionIdAtom)

    useEffect(() => {
        if (sessionId) {

            fetch(`https://ambrosiaserver.fly.dev/paiement/success`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: Cookies.get("token"),
                },
                body: JSON.stringify({
                    session_id: sessionId,
                })
            })
        }
            
}, [sessionId])

    return (
    <div>{sessionId}</div>
  )
}
