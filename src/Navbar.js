import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'


import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = { format: "hex" }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ format: e.target.value })
    this.props.changeColorFormat(e.target.value)
  }

  render() {
    const { level, changeLevel } = this.props
    const { format } = this.state
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href="#">ColorMe</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level} </span>
          <div className='slider'>
            <Slider defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffff </MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default Navbar