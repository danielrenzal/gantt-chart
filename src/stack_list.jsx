import moment from 'moment';
import React, {Component} from 'react';
import './stack_list.scss';

class StackList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.stacks.map(stack => {
                        const s_date = new Date(stack.start)
                        const e_date = new Date(stack.end)
                
                        const diff = Math.abs(s_date - e_date);
                        
                        const final = (diff/(1000*3600*24)) * 16
            
                        return(
                            <div key={stack.id} className="stack_row">
                                <p>{moment(stack.start).format('ll')}</p>
                                <p className="bar" style={{width: final}}></p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackList;