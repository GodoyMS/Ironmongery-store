
import React,{Component} from "react";

class Admin extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            description:'',
            _id:'',
            tasks:[]
            
        };
        this.handleChange=this.handleChange.bind(this);
        
        this.addTask=this.addTask.bind(this);
    } 




    addTask(e){
        if(this.state._id){
             fetch(`/api/tasks/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'

                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
               
                this.setState({title:'',description:'',_id:''});
                this.fetchTasks();

            });

        }else{
            fetch('/api/tasks',{
                method:'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                }
    
    
            })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);  
                    

                    
                    this.setState({title:'',description:''});
                    this.fetchTasks();
                })
                .catch(err =>console.log(err));
        }
        
        e.preventDefault();
    }
    componentDidMount(){
        this.fetchTasks();

    }
    fetchTasks(){
        fetch('/api/tasks')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                this.setState({tasks:data});
                console.log(this.state.tasks);
            });
                
    }

 

    deleteTask(id){
        if(confirm('Are you sure to delete the task?')){
            fetch(`/api/tasks/${id}`,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                this.fetchTasks();
            });
        }

    }

    editTask(id){
        fetch(`/api/tasks/${id}`)
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    title:data.title,
                    description:data.description,
                    _id:data._id

                });
            });
    }

    handleChange(e){
        const{name,value} =e.target;
        this.setState({
            [name]:value

        })
    }

    
    
    render(){
        return(
            <div>
                
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div class="">
                        <a className="brand-logo" href="/">TASKssad</a>

                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" 
                                                onChange={this.handleChange} 
                                                type="text" required
                                                placeholder="Titulo"
                                                value={this.state.title}/>

                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea 
                                                name="description" 
                                                onChange={this.handleChange} required
                                                placeholder="Task description" 
                                                className="materialize-textarea"
                                                value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn dark ">
                                            Send
                                        </button>
                                    </form>
                                </div>

                            </div>

                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task =>{
                                            return(
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button 
                                                    onClick={()=>this.deleteTask(task._id)}
                                                    className="btn secondary"
                                                     style={{margin:'4px'}}>
                                                        <i className="material-icons">delete</i>
                                                     </button>
                                                    <button className="btn primary" 
                                                    onClick={()=>this.editTask(task._id)}
                                                    style={{margin:'4px'}}>
                                                        <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                            </tr>
                                            )
                                            
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>



                </div>





            
        )

    };
}

export default Admin;