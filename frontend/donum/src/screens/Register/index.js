import React from 'react';
import ScreenTemplate from '../../components/template/screenTemplate';
import Choice from '../../components/molecules/RegisterForms/choice';
import { Form1, FormOng2, FormOng3, FormOng4 } from '../../components/molecules/RegisterForms/Ong/Form1';
import FormUser2 from '../../components/molecules/RegisterForms/User/Form1'
import Perfil from '../../screens/Perfil'

const Register = props => {
  const [type, setType] = React.useState("donator");
  const [step, setStep] = React.useState(0);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const setValue = (e, v) => {
    console.log(111111, e, v)
    if(e === "name") {
      setName(v)
    }

    if(e === "email") {
      setEmail(v)
    }

    if(e === "pass") {
      setPass(v)
    }
  }



  return (
    <ScreenTemplate>
      {(() => {
        switch(step) {
          case 0: 
            return <Choice onClick={(value) => (setType(value), setStep(1))}/> 
          break;
          case 1: 
            return <Form1 onClick={() => setStep(2)} onChange={(e, v) => setValue(e, v)} name={name} email={email} pass={pass}/> 
          break;
          case 2: 
            case type === "ong":
            return type === "donator" ? <FormUser2/> : <FormOng2 onClick={() => setStep(3)}/>
          break;
          case 3:
            return <FormOng3 onClick={() => setStep(4)}/>
          break;
          case 4:
            return <FormOng4 onClick={() => setStep(5)} />
          break;
          case 5:
            return <Perfil />
          break;
        }
      })()}
    </ScreenTemplate>
  )
}

export default Register;