import React from 'react';

export default class Copy extends React.PureComponent {
  copyText = (text) => {
    this.elem.value = text;
    this.elem.select();
    document.execCommand('copy');
    alert('复制成功');
  }
  render() {
    return (
      <div>
        <input ref={elem => this.elem = elem} style={{ position: 'absolute', left: 0, top: 0, opacity: 0, zIndex: -10 }} />
        <button onClick={() => this.copyText('nihao中国')}>Copy</button>
      </div>
    )
  }
}