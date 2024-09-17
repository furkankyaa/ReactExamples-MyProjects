import React from 'react'

function Course({ course }) {
    const { id, title, description, link, Image } = course;
    return (
        <div className='course'>
            <div>
                <img src={Image} width={300} height={150} />
                <h4 className='course-title'>{title}</h4>
                <h5 className='course-desc'>{description}</h5>
                <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>Projeyi Görmek İçin Tıklayınız</a></div>

            </div>

        </div>
    )
}

export default Course