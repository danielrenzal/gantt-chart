import React, { Component } from 'react';
import StackList from './stack_list';


class StackSchedule extends Component{
    state = {
        stack_events: [
            {id: 1, start: "2022-02-04", end: "2022-02-10", stack: "Python", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort A"},
            {id: 2, start: "2022-03-20", end: "2022-04-13", stack: "Java", program_type: "Online Part-time Flex", cohort: "Cohort A"},
            {id: 3, start: "2022-05-01", end: "2022-05-10", stack: "Web Fundamentals", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort A"},
        ],
      }

    render(){
        const program_types = [...new Set(this.state.stack_events.map(stack => stack.program_type))];

        let sorted_stacks = [];

        program_types.forEach(type => {
            const filtered_stacks = this.state.stack_events.filter(stack => stack.program_type === type);

            sorted_stacks = [
                ...sorted_stacks,
                {
                    program_type: type,
                    filtered_stacks
                }
            ]

        })


        return (
            <div>
                {
                    sorted_stacks.map(program => (
                        <div key={program.program_type}>
                            <p>{program.program_type}</p>
                            <StackList stacks={program.filtered_stacks}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default StackSchedule;