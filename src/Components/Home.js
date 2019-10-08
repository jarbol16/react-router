import React from 'react'
import {Component} from 'react'

class Home extends Component{
    render(){
        return(
            <div className="row" style={{paddingTop:"20px"}} >
                <div className="col-3"></div>
                <div className="card col-md-6" >
                    <form>
                        <div className="form-group">
                            <label>Codigo</label>
                            <input class="form-control form-control-sm" type="text" />
                        </div>
                        <label>Accion</label>
                        <div className="form-group">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                                <label class="custom-control-label" for="customRadioInline1">Recargar</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
                                <label class="custom-control-label" for="customRadioInline2">Pre-Recarga</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Valor</label>
                            <input class="form-control form-control-sm" type="text" />
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>

        );
    }
}

export default Home;