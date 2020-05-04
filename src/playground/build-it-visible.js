
const appRoot = document.getElementById('app')    


class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggler</h1>
                <button onClick={ this.handleToggleVisibility }>
                    { this.state.visibility ? 'Hide Details' : 'Show Details' }
                </button>
                {
                    this.state.visibility && (
                        <div>This is the hidden content</div>
                    )
                }

            </div>
        )
    }

}


/* const toggleVisibility = () => {
    visibility = !visibility
    console.log(visibility)
    renderApp()
}

const renderApp = () => {

    const template = (
        <div>
            <h1>Visibility Toggler</h1>
            <button onClick={toggleVisibility}>
                { visibility ? 'Hide Details' : 'Show Details' }

            </button>
            {
              visibility && (
                <div>
                    <p>This is the hidden content</p>
                </div>
              )  
            }
        </div>
    )
    
    

} */

ReactDOM.render(<Visibility />, appRoot)