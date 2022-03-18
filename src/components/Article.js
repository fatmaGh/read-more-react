import React, {useState} from 'react'
import '../App.css'

const Article = ({item}) => {
    const [activeClass, setActiveClass] = useState(false)
    const toggleActiveClass = () => {
        setActiveClass(activeClass => !activeClass)
    }
    return (
        <div class={activeClass ? 'card active' : 'card'}>
            <div class="icon">
                <img src={item.image} alt="marketing" />
            </div>
            <div class="content">
                <h3>{item.title}</h3>
                <p>
                    {item.description}
                </p>
            </div>
            <a class="more" onClick={toggleActiveClass}></a>
        </div>
    )
}

export default Article