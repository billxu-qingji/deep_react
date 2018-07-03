import React from 'react';

export default class Tabs extends React.PureComponent{
  constructor(props){
    super(props);
    this.getTabPanes();
    console.log(typeof this.getTabPanes())
  }
  getTabPanes(){
    console.log('tabpanels')
    const { classPrefix, activeIndex, children: panels, isActive } = this.props;
    return React.Children.map(panels, (child) => {
      console.log(child)
      if(!child){return;}
      console.log(child);
    })
  }
  render(){
    return (
      <div>
        tabs;
      </div>
    )
  }
}