import '../App.css';

function info({title, content, author, date}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p> <strong>Author: </strong> {author}</p>
        <p> <strong>Date: </strong> {date}</p>
      </div>
    )
}

export default info;
