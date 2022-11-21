import moment from 'moment';
import React, {Component} from 'react';
import './stack_list.scss';

class StackList extends Component{
    render(){
        const { stacks } = this.props;
        let stack_start_dates = [];

        stacks.forEach((stack, index) => {
            const start_date = new Date(stack.start)
            let last_stack_end_date;

            if(index !== 0){
                last_stack_end_date = new Date(stacks[index-1].end);

                if(!(last_stack_end_date.getMonth() === start_date.getMonth() && last_stack_end_date.getDate() === start_date.getDate() - 1)){
                    stack_start_dates.push(stack.start);
                }
            }else{
                stack_start_dates.push(stack.start);
            }
        })

        return(
            <div>
                {
                    stack_start_dates.map((start_date, index) => {
                        return(
                            <p key={index} className="stack_start_date">{moment(start_date).format('ll')}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackList;