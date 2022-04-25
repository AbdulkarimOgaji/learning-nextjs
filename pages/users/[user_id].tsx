import { useRouter } from "next/router"


const User = () => {
    const router = useRouter()
    const userId = router.query.userId
    return <h1>This is the Profile page for User with id {userId}</h1>
}

export default User;