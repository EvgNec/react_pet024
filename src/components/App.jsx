import { Component } from 'react'
import initialTodos from './todos.json'

class App extends Component {
  state = {
    todos: initialTodos,
    filter:'',
  };

test = () => {}

changeStatus = (id) => {
  this.setState(prevState =>({
    todos: prevState.todos.map(todo => {
if (todo.id === id){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
  }))   
};

  render() {
    const {todos} = this.state;
    return (
      <>
      <ul>
      {todos.map(({id, title, completed}) =>
      (
        <li key={id}>
          <p>{title}</p>
          <input 
						type='checkbox'
						checked={completed}
						onChange={() => this.changeStatus(id)}
					/>
        </li>
      )
      )
      }      
      </ul>
				
      </>
    )
  }
}

export default App;

/* <div >

				</div>
				<div >
					<button
						type='button'
						aria-label='Close'
						onClick={() => this.test}
					></button>
				</div> */





