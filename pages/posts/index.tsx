import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PostType, Post } from '../../components/Post'

const ListPost = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return <div>
        <h1>This Are the lists of posts</h1>
        {
            posts.map( post => <Post post={post} key={post.id}/>)
        }
    </div>
}

export default ListPost


export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: PostType[] = await res.json()

    return {
        props: { posts }
    }
}