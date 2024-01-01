import React from 'react'

function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div>
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill text-bg-danger">{source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small><span className="badge bg-secondary">New</span></p>
                    <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

//News API Key :-  c152509e053c4c78b4d878a82f848b5b

// New News API Key :- 45f4e15c890a4e45b900163c8d75fe22
