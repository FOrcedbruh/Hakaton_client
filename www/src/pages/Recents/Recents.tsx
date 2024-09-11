import { useEffect, useLayoutEffect, useState } from "react"
import { get_recents } from "../../api/handlers"
import { useAuthContext } from "../../context/authContext"




const Recents: React.FC = () => {
    const [contgs, setContgs] = useState([])

    // @ts-ignore
    const user_id: number = localStorage.getItem("id")
    const getData = async () => {
        const data = await get_recents(user_id)
    
        console.log(data)
        setContgs(data)
    }

    useEffect(() => {
        setTimeout(() => getData(), 500)
    }, [contgs])

   

    return (
        <section>

        </section>
    )
}

export default Recents