import {OpenAI} from 'openai'
import { getDatabase, onValue, set, push, update } from "firebase/database";
import { ref as dbRef } from "firebase/database";






const key = import.meta.env.VITE_OPENAI_KEY

const configuration = {
    apiKey: key,
    dangerouslyAllowBrowser: true
}

const openai = new OpenAI(configuration)

export default openai