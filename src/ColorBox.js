import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export class ColorBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            copied: false
        }

        this.onCopyState = this.onCopyState.bind(this)
    }
    onCopyState() {
        this.setState({copied: true})
        setTimeout(() => {
            this.setState({copied: false})
        }, 1500);
    }
    render() {
        const { name, background } = this.props
        const {copied} = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.onCopyState}>
                <div style={{ background }} className='ColorBox'>
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p>{this.props.background}</p>
                    </div>

                    <div className='copy-container'>

                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <span className='see-more'>MORE</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
