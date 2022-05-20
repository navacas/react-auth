import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
      
        <main className="container">
            <div className="my-3 p-5 rounded">
                <div className="row">
                    <div className="col mb-1">
                        <p className=""> 
                            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Filters
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                            <div className="">
                                <button className="btn btn-primary">Género</button>
                                <button className="btn btn-primary">País</button>
                                <button className="btn btn-primary">Estado</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-1">
                        <form className="d-flex justify-content-end">
                            <input className="form-control me-2 w-50" list="datalistOptions" id="exampleDataList" placeholder="Search"/>
                            <datalist id="datalistOptions">
                                <option value="San Francisco"/>
                                <option value="New York"/>
                                <option value="Seattle"/>
                                <option value="Los Angeles"/>
                                <option value="Chicago"/>
                            </datalist>
                            <button className="btn btn-primary">Nuevo Usuario</button>
                        </form>
                    </div>
                </div>    
                <div className="table-responsive pt-2">
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th >Cliente</th>
                                <th>Genero</th>
                                <th>Pais</th>
                                <th>Estado</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >Ricardo</td>
                                <td>Hombre</td>
                                <td>México</td>
                                <td>Veracruz</td>
                                <td>Borrar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                    </table>
                </div>
            </div>
        </main>
      
    )
  }
}

export default Dashboard