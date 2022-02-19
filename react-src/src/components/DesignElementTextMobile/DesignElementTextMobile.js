import React, { Component } from 'react';

import 'react-dropdown/style.css';
import 'react-alice-carousel/lib/alice-carousel.css';

import TextToolbar2 from '../TextToolbar/TextToolbar2';
import { TextField } from "@material-ui/core";
import { Rnd } from "react-rnd";




import './DesignElementTextMobile.css';

export default class DesignElementTextMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      exit: false,
      text: this.props.item.getData(),
      backgroundColor: this.props.item.getBackgroundColor(),
      textColor: this.props.item.getTextColor(),
      activeFontFamily: this.props.item.getActiveFontFamily(),
      drag: false,
      dragText: false,
      widthText: this.props.item.getSize(),
      width: this.props.item.getSize(),
      heightText: this.props.item.getSize() / 4,
      topText: this.props.item.getTop(),
      leftText: this.props.item.getLeft(),
      rotateAngleText: this.props.item.getRotateAngleText(),
      bold: this.props.item.getBold(),
      toggelPaint: false,
      Italic: this.props.item.getItalic(),
      backgroundRadius: 0,
      borderColor: this.props.item.getBorderColor(),
      underline: this.props.item.getUnderline()

    }



    this.handleChangeDragText = this.handleChangeDragText.bind(this);
    this.handleResizeText = this.handleResizeText.bind(this);
    this.handleDragText = this.handleDragText.bind(this);
    this.handleRotateText = this.handleRotateText.bind(this);
    this.click = this.click.bind(this);
    // this.handleChangeCompleteColor = this.handleChangeCompleteColor.bind(this);
    this.setTextColor = this.setTextColor.bind(this);
    this.bold = this.bold.bind(this);
    this.changeFont = this.changeFont.bind(this);
    this.delete = this.delete.bind(this);
    this.getFont = this.getFont.bind(this);
    this.handelClick = this.handelClick.bind(this);
    this.Italic = this.Italic.bind(this);
    this.setRadios = this.setRadios.bind(this);
    this.setBorderColor = this.setBorderColor.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.underline = this.underline.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);

    this.setBackgroundColor = this.setBackgroundColor.bind(this);

  }
  componentDidMount() {


  }

 

  handleRotateText(rotateAngleText) {
    this.setState({
      rotateAngleText
    })
  }

  handleDragText(deltaX, deltaY) {
    console.log('tohch')
    this.setState({
      leftText: this.state.leftText + deltaX,
      topText: this.state.topText + deltaY
    }, () => {
      this.props.item.setTop(this.state.topText)
      this.props.item.setLeft(this.state.leftText)
    })


  }
  handleResizeText(style, delta, type) {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { x, y } = style
    let { width, height } = delta

    let topText = this.state.topText + y
    let leftText = this.state.leftText + x
    let widthText = width
    let heightText = height


    this.setState({
      // topText,
      // leftText,
      widthText,
      // width,
      // heightText
    }, () => {

      this.props.item.setSize(this.state.widthText)
      this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
      this.setState({ heightText: document.getElementById('textcenter-input' + this.props.item.getId()).clientHeight })
    })

    // this.handleChangeText()
  }

  // handleChangeCompleteColor = (color, event) => {
  //   this.setState({ textColor: color.hex });
  // };
  handleChangeDragText = (e) => {

    this.setState({ dragText: !this.state.dragText });


  };
  handelClick() {
    this.setState({ toggelPaint: !this.state.toggelPaint })
  }
  handleChangeText(e) {


    this.setState({ text: e.target.value }, () => {
      this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
      this.props.item.setData(this.state.text);

    })




  }
  setTextColor(color) {
    this.setState({ textColor: color })
    this.props.item.setTextColor(color)

  }
  setBackgroundColor(color) {
    this.setState({ backgroundColor: color })
    this.props.item.setBackgroundColor(color)


  }
  bold() {
    if (this.state.bold !== '') {
      this.setState({ bold: '' })
      this.props.item.setBold('')

    }
    else {
      this.setState({ bold: 'bold' })
      this.props.item.setBold('bold')

    }
  }
  changeFont(nextFont) {
    this.setState({
      activeFontFamily: nextFont.family,
    }, () => {
      this.props.item.setActiveFontFamily(this.state.activeFontFamily)

    })
  }
  getFont() {
    return this.state.activeFontFamily;
  }
  Italic() {
    if (this.state.Italic !== 'normal') {
      this.setState({ Italic: 'normal' })
      this.props.item.setItalic('normal')

    }
    else {
      this.setState({ Italic: 'italic' })
      this.props.item.setItalic('italic')

    }
  }
  underline() {
    if (this.state.underline !== 'underline') {
      this.setState({ underline: 'underline' })
      this.props.item.setUnderline('underline')

    }
    else {
      this.setState({ underline: 'none' })
      this.props.item.setUnderline('none')


    }
  }
  setRadios(e, value) {
    this.setState({ backgroundRadius: value })
  }




  handleChangeDrag = (e) => {
    console.log(e.target.className)
    if (e.target.className === 'shirt') {
      this.setState({ drag: false });
      this.setState({ dragText: false });
    }
    else
      this.setState({ drag: !this.state.drag });
  };
  click(e) {
    this.props.onDrag(this.props.item.getId())
    document.getElementById('textcenter-input' + this.props.item.getId()).focus()
    this.props.getTextToolbar(<TextToolbar2 key={this.props.item.getId()} setFormats={this.props.item.setFormats} formats={this.props.item.getFormats()} underline={this.underline} setBorderColor={this.setBorderColor} BorderColor={this.state.borderColor} setRadios={this.setRadios} Radios={this.state.backgroundRadius} setPaint={this.setTextColor} textColor={this.state.textColor} setBackgroundColor={this.setBackgroundColor} backgroundColor={this.state.backgroundColor} bold={this.bold} Italic={this.Italic} setShowSlider={this.props.setShowSlider} changeFont={this.changeFont} getFont={this.getFont} />)
  }

  delete(e) {

    console.log(this.props.getTextToolbar(''));
    this.props.deleteText(this.props.item.id)


    // this.setState({delete:true})


  }
  setBorderColor(color) {
    this.setState({ borderColor: color })
    this.props.item.setBorderColor(color)

  }

  getZIndex() {
    // const z= this.props.zIndex();
    // this.setState({zIndex:z});
  }

  render() {
    if (this.state.delete)
      return '';



    return (

      <div className='Design3' id={this.props.item.getId()} hidden={this.props.item.getHidden()} style={{
        zIndex: this.props.item.getZIndex(), position: 'absolute',
        left: this.state.leftText,
        height: this.state.heightText + 'px',
        width: Math.max(this.state.text.length * 22, this.state.width) + 'px',
        backgroundColor: this.state.backgroundColor,
        fontFamily: this.state.activeFontFamily,
        // color:this.state.textColor ,
        borderRadius: this.state.backgroundRadius + 'px',


        // width:this.state.width,
        // width:this.state.width,


        top: this.state.topText,
      }}  >
        <TextField

          name='name'
          type='name'
          autoComplete='off'
          variant="outlined"
          required
          inputProps={{
            id: 'textcenter-input' + this.props.item.getId(),
            style: {
              "--size": this.state.widthText + '%', "--family": this.state.activeFontFamily,
              color: this.state.textColor,
              fontStyle: this.state.Italic,
              fontWeight: this.state.bold,
              textDecoration: this.state.underline,

            }
          }}
          onClick={this.click}
          className='textcenter-input' id={'textcenter-input' + this.props.item.getId()} onChange={this.handleChangeText} value={this.state.text}
          style={{

            maxWidth: '100%',
            width: '100%',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            WebkitTextStroke: '2px ' + this.state.borderColor,
            transform: `rotate(${this.state.rotateAngleText}deg)`,
          }}


        />
       
        {this.props.drag === this.props.item.getId() ? (
          <div className='div2'>
            <button style={{
              position: 'absolute',
              left: -16,
              // transform: `rotate(${this.state.rotateAngleText}deg)`,


              zIndex: '10',
              backgroundColor: 'transparent',

              textAlign: 'left',
              border: 'none',
              //  height:this.state.widthText/2,
              top: -15,
            }} onClick={this.delete} className='txt-element-delete-mobile'><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button>
            <Rnd
              className='rnd'
              resizeHandleClasses={({
                bottom: 'rnd-resize-bottom',
                bottomLeft: "rnd-resize-btn",
                bottomRight: "rnd-resize-btn",
                left: "rnd-resize-left",
                right: "rnd-resize-right",
                top: "rnd-resize-up",
                topLeft: "",
                topRight: "rnd-resize-btn",
              })}
              size={{ width: '100%', height: '100%' }}
              position={{ x: 0, y: 0 }}
              onDragStop={(e, d) => { this.handleDragText(d.x, d.y) }}
              onResizeStop={(e, direction, ref, delta, position) => {

                this.handleResizeText(position, { width: ref.offsetWidth, height: ref.offsetHeight })
              }}
            ></Rnd>
          
          </div>) : ''}
      </div>

    );
  }
}
