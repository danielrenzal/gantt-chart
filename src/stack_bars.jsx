import React, {Component} from 'react';
import './stack_list.scss';

class StackBars extends Component{
    render(){
        const { stacks } = this.props;
        let stack_bars = [];
        
        stacks.forEach((stack, index) => {
            const start_of_the_year = new Date("2022-01-02");
            const start_date = new Date(stack.start);
            const end_date = new Date(stack.end);
            let last_stack_end_date;

            const start_date_end_date_difference = Math.abs(start_date - end_date);
            const bar_width = ((start_date_end_date_difference/(1000*3600*24)) + 1) * 16;

            if(index !== 0){
                last_stack_end_date = new Date(this.props.stacks[index-1].end);

                if(last_stack_end_date.getMonth() === start_date.getMonth() && last_stack_end_date.getDate() === start_date.getDate() - 1){
                    stack_bars[index-1] = [
                        ...stack_bars[index-1],
                        {bar_width, ...stack}
                    ]
                }else{
                    const start_date_start_of_year_difference = Math.abs(start_of_the_year - start_date);
                    const bar_margin_left = (start_date_start_of_year_difference/(1000*3600*24)) * 16;

                    stack_bars = [
                        ...stack_bars,
                        [
                            {bar_width, margin_left: bar_margin_left, ...stack}
                        ]
                    ]
                }
            }else{
                const start_date_start_of_year_difference = Math.abs(start_of_the_year - start_date);
                const bar_margin_left = (start_date_start_of_year_difference/(1000*3600*24)) * 16;
                
                stack_bars = [
                    ...stack_bars,
                    [
                        {bar_width, margin_left: bar_margin_left, ...stack}
                    ]
                ]
            }
        })
        
        return(
            <div>
                {
                    stack_bars.map((stack_row, index) => {
                        return (
                            <div key={index} className="stacks_row">
                                {
                                    stack_row.map((stack_bar, index) => {
                                        return (
                                            <p 
                                                key={index} 
                                                className="bar" 
                                                style={{
                                                    width: stack_bar.bar_width+"px",
                                                    marginLeft: `${stack_bar.margin_left ? (stack_bar.margin_left+4)+"px": ""}`,
                                                    backgroundColor: stack_bar.color
                                                }}
                                            >
                                                {stack_bar.stack}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackBars;