import React, { Component } from 'react';

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

   return (

      <div className="my-slider">
       {
         stories.map(story => (

           <div className="story">
            <div dangerouslySetInnerHTML={this.raw(story.introtext)} />
            <h3>{story.title}</h3>
            <p>{story.metadesc}</p>
           </div>
         ))
       }
      </div>

   );
 }
}

export default Stories;
