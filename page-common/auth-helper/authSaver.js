import { AsyncStorage } from 'react-native';

export const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('tokenKey', jsonValue)
      return true
    } catch (e) {
      return false
    }
}
export const storeEmptyData = async () => {
    try {
      const jsonValue = JSON.stringify(null)
      await AsyncStorage.setItem('tokenKey', jsonValue)
      return true
    } catch (e) {
      return false
    }
}

export const isSignedIn=async()=>{
    try{
        const jsonValue = await AsyncStorage.getItem('tokenKey')
        let t=JSON.parse(jsonValue)
        let r=(t === null) ? false : true
        console.warn("here",t,r)
        return r;
    }catch(e){
        return false
    }
}

export const getData = async () => {
    try {
        if(isSignedIn()){
            const jsonValue = await AsyncStorage.getItem('tokenKey')
            return JSON.parse(jsonValue)
        }
    } catch(e) {
      return false
    }
}