import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (

        <h1>Este es mi perfil, {user}</h1>

    )

}




export default ProfilePage