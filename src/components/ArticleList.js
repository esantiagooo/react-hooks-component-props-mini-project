import Article from './Article'
const ArticleList= ({posts}) => {
    const data = posts.map((post)=>{
        return (
            <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}/>
        )
    })
    
    return (
        <main>
            {data}
        </main>
    )
}
export default ArticleList