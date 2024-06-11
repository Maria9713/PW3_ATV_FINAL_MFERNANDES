import { useEffect, useState } from "react"
import styles from './message.module.css'



export default function Message({ type, message }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if (!message) {
            return setVisible(false);
        }

        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000);
    }, [message])
    return (
        <>
            {
                visible && (
                    <div className={`${styles.message} ${styles[type]}`}>
                        <p>{message}</p>
                    </div>

                )
            }
        </>
    )

}