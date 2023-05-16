import {useActions} from "@/hooks/useActions";

export  const updateData = (userId,list?:string[], frieds?:string[]) => {

    const {addUser,changeMode} = useActions()
    addUser(
         {
            '_id':'',
            'login': '',
            'password': '',
            'name': '',
            'teg': '',
            'list': [],
            'friends': []
        }
    )
    changeMode(false)

}