import React, { Component } from 'react'
import menu_img from './images/menu.jpg'


class Menu extends Component {
    constructor() {
        super()
        this.state={
            showMenu: false
        }
    }
    menuClickHandler = (event) => {
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click',this.closeMenu)
        })
    }

    closeMenu = () => {
        this.setState({showMenu : false}, ()=> {
            document.removeEventListener('click', this.closeMenu)
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.menuClickHandler} >
                    <img src={menu_img} alt='menu'/>
                </ button>
                {
                    this.state.showMenu
                     ? 
                    (
                        <div className='menu'>
                            <button> About Me </button>
                            <button> Profile </button>
                            <button> Portfolio </button>
                            <button> Documents </button>
                            <button> Useful Resources </button>
                            <button> Direct Message </button>
                            <button> Social Media </button>
                            <button> Contact </button>
                        </div>
                    )
                    : (null)
                }
            </div>
        )
    }
}

export default Menu
