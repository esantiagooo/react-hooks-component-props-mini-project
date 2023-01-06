const Article = ({title,date,preview}) => {
    return (
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        </article>
    )
}
export default Article

// Props are data passed from a Parent component down to the child component.

// That is why properties such as title, date  and preview are accesible in Article Component. It's Parent Component ArticleList retains the information and passes along the value as props. Since Article is a child of ArticleList.

// think Russian doll but for information