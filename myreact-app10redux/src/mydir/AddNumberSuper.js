import React, { Component } from "react";
import AddNumber from "./AddNumber";

export default class AddNumberSuper extends Component{
    render(){
        return(
            <div id="super">
                <h1>AddNumber Super</h1>
                {/* AddNumber의 props로 매개변수가 size인 함수를 전달한다.
                    이 함수는 AddNumber의 + 버튼을 클릭했을 때 AddNumber의
                    state.size값을 호출한다.
                    이 size값을 다시 상위 컴포넌트 App으로 전달해야 하기 때문에
                    상위 컴포넌트로부터 전달받은 props의 onClick 함수를 호출해서
                    size값을 전달해야 한다.
                */}
                
                {/* <AddNumber onClick={function(size){
                    this.props.onClick(size);
                }.bind(this)}/> */}

                <AddNumber/>
            </div>
        )
    }
}