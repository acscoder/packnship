import { useRouter } from 'next/router'
const staticString = require('./string.json');
export default function getStranslatedString(str) {
    if(staticString[str]){
        const router = useRouter()
        const {locale} = router

        if(locale!='de'){
            return staticString[str]
        }else{
            return str
        }
    }else{
        return str
    }
}
