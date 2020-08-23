import React, { Component } from 'react'
import menu from './images/menu.jpg'
import brian from './images/brian-pic.jpg'
import Menu from '../common/Menu'

export class MainPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <Menu>
                            <img src={menu} alt='menu'/>
                        </Menu> 
                    </div>
                    <div className='intro'>
                        <figure>
                            <img src={brian} alt='brian-pic'/>
                        </figure>
                        <figcaption>Thanks for visiting my personal page. </figcaption>
                        <figcaption>Should you require more information and questions, feel free to contact me by the info below. </figcaption>
                    </div>
                </header>
                <div className = 'container'>
                    <h1>Here's all that has to do with me</h1>
                    <h2>--Hyunwoo(Brian) Kim--</h2>
                </div>
            </div>
        )
    }
}

export default MainPage
