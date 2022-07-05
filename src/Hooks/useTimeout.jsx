import {useState , useEffect} from 'react';

const useTimeout = () => {
  
    const [ready, setready] = useState();

    useEffect(() => {

        let timer = setTimeout (() => {
            setready(true);
        },5000);

        return () => {
            clearTimeout(timer)
        } ;
    }, []);
    
  return ready;
}

export default useTimeout;