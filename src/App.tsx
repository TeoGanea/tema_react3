import React, { useState } from 'react';
import MyP from './Myp'
import MyButton from './MyButton';

function App() {

  let [buttonPressed, setButtonPressed] = useState("none")

  let buttonCbk = (button_type: string) => {
    setButtonPressed(button_type);
  };

  let v = [];

  let keys = ["buton1", "buton2", "buton3", "modificare"];

  for (let k of keys) {
    if (buttonPressed !== k) {
      v.push(<MyButton key={k} button_cbk={buttonCbk} text={k}></MyButton>);
    }
  }


  // butoane
  // let button1 = (<></>);
  // let button2 = (<></>);
  // let button3 = (<></>);

  // if (buttonPressed != "buton1") {
  //   button1 = <MyButton button_cbk={buttonCbk} text="buton1"></MyButton>
  // }

  // if (buttonPressed != "buton2") {
  //   button2 = <MyButton button_cbk={buttonCbk} text="buton2"></MyButton>
  // }

  // if (buttonPressed != "buton3") {
  //   button3 = <MyButton button_cbk={buttonCbk} text="buton3"></MyButton>
  // }





  return (
    <div>
      {/* <MyP text="ceva"><p>Altceva</p></MyP> */}

      <MyP text={'Ai apasat butonul ' + buttonPressed}></MyP>


      {/* functia map transforma array-ul de stringuri in array de tipul myButton */}
      {/* nu faci asa ceva */}
      {/* {
        keys.map((k) => {
          if (buttonPressed !== k) {

            return <MyButton key={k} button_cbk={buttonCbk} text={k}></MyButton>;

          }
        })    } */}





      {v}




      {/* {button1}
      {button2}
      {button3} */}

      {/* inline modalitate shit */}
      {/* {buttonPressed !== "buton1" && <MyButton button_cbk={buttonCbk} text="buton1"></MyButton>}
      {buttonPressed !== "buton2" && <MyButton button_cbk={buttonCbk} text="buton2"></MyButton>}
      {buttonPressed !== "buton3" && <MyButton button_cbk={buttonCbk} text="buton3"></MyButton>} */}

    </div>
  );
}

export default App;
