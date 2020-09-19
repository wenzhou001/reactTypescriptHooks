import React from 'react';
//import logo from './logo.svg';
//import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      {/* <Button>按钮一</Button>
      <Button onClick={()=>{alert(1)}} size={ButtonSize.Small}>按钮一</Button>
      <Button btnType={ButtonType.Danger} className="aaa">按钮一</Button>
      <Button disabled>按钮一</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>按钮一</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>按钮二</Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">按钮二</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">按钮二</Button> */}

      <Alert showAlert={true} title='这里是标题' content="这里是内容"></Alert>
    </div>
  );
}

export default App;
