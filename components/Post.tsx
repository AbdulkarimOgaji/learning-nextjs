import Link from "next/link";


export type PostType = {
    id: number
    title: string
    body: string
}

export const Post = ({ post }: { post: PostType}) => {
    return <><Link href={`/posts/${post.id}`}>
    <a>
        {post.id}. {post.title}
    </a>
    </Link>
    <br /><hr />
    </>
}