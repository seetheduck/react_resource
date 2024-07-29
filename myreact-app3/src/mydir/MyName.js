import React, { Component } from "react";

/*
class MyName extends Component{ // props에 기본값 부여
    static defaultProps = {
        name : '배고파용'
    }

    render(){
        return(
            <div>
                안녕~ 내 이름은 <b>{this.props.name}</b>
            </div>
        )
    }
}
MyName.defaultProps = {
    name:'기본이름'
}
*/

// 클래스를 함수로 소스 코드 변환 1
// function MyName(props){
//     return(
//         <div>
//             안녕~ 내 이름은 <b>{props.name}</b>
//         </div>
//     )
// }

// 클래스를 함수로 소스 코드 변환 2
const MyName = ({name}) =>{
    return(
        <div>
            안녕~ 내 이름은 <b>{name}</b>
        </div>
    )
}


export default MyName;