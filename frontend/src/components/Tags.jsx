import "../styles/Tags.css"

function Tags({ tags }) {

    return (
        <div className="tags">
            {tags.map((tags, index) => (
                <div key={index} className="tag">
                    {tags}
                </div>
            ))}
        </div>
    )
}

export default Tags