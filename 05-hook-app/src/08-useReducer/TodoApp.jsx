import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    },

]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState )


    return (
        <>
            <h1>TodoApp: 10, <small> Pendientes: 2 </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* Todo List - Component */}
                    <ul className='list-group'>
                        
                        {
                            todos.map(todo => (
                                // TodoItem ...
                                <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                                    <span className='align-self-center'>Item 1</span>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>
                            ))
                        }

                    </ul>
                    {/* FIN Todo List - Component */}

                </div>
          
                <div className="col-5">

                    {/* Todo Add onNewTodo (todo)*/}
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form action="">
                        <input type="text" 
                                placeholder='¿Que hacemos?' 
                                name="" 
                                id=""
                                className='form-control'
                        />

                        <input type="submit" 
                            value="Agregar"
                            className='btn btn-outline-primary mt-1'       
                        />
                    </form>
                </div>
            </div>



        </>
    )
}
