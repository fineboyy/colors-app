import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

//MATERIAL UI IMPORTS
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = { format: "hex", open: false }

    this.handleFormatChange = this.handleFormatChange.bind(this)
    this.closeSnackbar = this.closeSnackbar.bind(this)
  }

  closeSnackbar() {
    this.setState({ open: false })
  }

  handleFormatChange(e) {
    this.setState({ 
      format: e.target.value,
      open: true
  })
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
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffff </MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.open}
          autoHideDuration={6000}
          message={<span id='message-id'> Format changed to {format.toUpperCase()}! </span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

export default Navbar