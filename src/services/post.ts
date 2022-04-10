import { Dispatch } from "react";

type Options = { 
    setData?: Dispatch<React.SetStateAction<string[] | undefined>>; 
    url:string;
    dataFromUser? : {}, 
    setKeys?: Dispatch<React.SetStateAction<{}>>
    setIsLoading?:Dispatch<React.SetStateAction<boolean>> 
    setIsProductCreated?: Dispatch<React.SetStateAction<boolean>> 
}

export const post = ({setData, url, dataFromUser, setKeys, setIsLoading,setIsProductCreated}: Options) => {
    if(setIsLoading) {
        setIsLoading(true);
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFromUser)
    })
        .then((res) => res.json())
        .then((data) => {
            const response = JSON.parse(JSON.stringify(data))

            console.log(response)

            if(setData && setIsProductCreated) {
                console.log('inssetisProductcreated')
                const newArr = [...response.products]
                console.log('newArr',newArr)
                setData(newArr)
                setIsProductCreated(true)
            }
            if(setData && !setIsProductCreated) {
                setData(response)
            }
            if(setIsLoading) {
                setIsLoading(false);
            }
            if (setKeys) {
                setKeys(Object.keys(response[0]));
            }
        })
        .catch(err => console.log(err))
}