import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'



export class Palette extends Component {

    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeColorFormat = this.changeColorFormat.bind(this)
    }

    changeLevel(level) {
       this.setState(
           {level}
       )
    }

    changeColorFormat(val) {
        this.setState({format: val})
    }

    render() {
        const {colors, paletteName, emoji } = this.props.palette
        const {level, format} = this.state

        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ))
        return (
            <div className='Palette'>
               <Navbar level={level} changeLevel={this.changeLevel} changeColorFormat={this.changeColorFormat} />
                <div className='Palette-colors'> 
                    {colorBoxes}
                </div>
                <footer className='Palette-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette
