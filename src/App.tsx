import * as React from "react";
import * as ReactDom from "react-dom";

class RootContainer extends React.Component<any, any>{
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }

    private clickHandler(): void{
        let {count} = this.state;
        count++;
        this.setState({
            count
        })
    }

    public render(): any{
        return (
            <div>
                <div>{`you pressed the button ${this.state.count} times`}</div>
                <button onClick={this.clickHandler.bind(this)}>Click me!</button>
            </div>
        )
    }
}

ReactDom.render(
    <RootContainer/>,
    document.getElementById("root")
);