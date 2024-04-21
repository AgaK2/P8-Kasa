import "../styles/Tags.css"

function Tags({ tags }) {

    return (
        <div className="tags">
            {tags.map((tags, index) => ( // Mapping pour parcourir les éléments d'un tableau de tags.
                <div key={index} className="tag">
                    {tags}
                </div>
            ))}
        </div>
    )
}

export default Tags