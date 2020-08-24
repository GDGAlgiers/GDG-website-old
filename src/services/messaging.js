import {database,timestamps} from '../firebase/firebase'
const MESSAGES_COLLECTION ="gdg_website_messages"
export function sendMessage({senderName,senderEmail,message}) {
    return database.collection(MESSAGES_COLLECTION).add({
        senderName,
        senderEmail,
        message,
        sentAt : timestamps()
    })
} 