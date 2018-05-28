import React, { Component } from 'react';
import TinySlider from "tiny-slider-react";

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
 }

 componentDidMount() {
   fetch('https://svc.rappler.com/p/topstories')
   .then(res => {
     return res.json();
   })
   .then(data => {
     this.setState({ stories: data.data });
   })
 }

 raw(content) {
   return { __html: content };
 }

 render() {
   const { stories } = this.state;
   const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true
  };
   return (

      <TinySlider settings={settings}>
       {
         stories.map(story => (

           <div className="story">
            <div dangerouslySetInnerHTML={this.raw(story.introtext)} />
            <h3>{story.title}</h3>
            <p>{story.metadesc}</p>
           </div>
         ))
       }
      </TinySlider>

   );
 }
}

export default Stories;
