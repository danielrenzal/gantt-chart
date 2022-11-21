import React, { Component } from 'react';
import StackBars from './stack_bars';
import StackList from './stack_list';


class StackSchedule extends Component{
    state = {
        stack_events: [
            {id: 1, start: "2022-01-02", end: "2022-01-19", stack: "Python", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort A", color: "#17455F"},
            {id: 2, start: "2022-01-02", end: "2022-01-19", stack: "Java", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort C", color: "#5D4E8A"},
            {id: 3, start: "2022-01-20", end: "2022-01-30", stack: "Web Fundamentals", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort A", color: "#794D25"},
            {id: 4, start: "2022-01-20", end: "2022-01-30", stack: "Web Fundamentals", program_type: "Online Part-Time Accelerated 1 Stack", cohort: "Cohort A", color: "#794D25"},
            // {id: 5, start: "2022-01-10", end: "2022-01-30", stack: "MERN", program_type: "Online Part-Time Flex", cohort: "Cohort A", color: "#165946"},
            {id: 6, start: "2022-01-31", end: "2022-02-19", stack: "Web Fundamentals", program_type: "Online Part-Time Flex", cohort: "Cohort A", color: "#794D25"},
            {id: 7, start: "2022-02-20", end: "2022-02-25", stack: "Java", program_type: "Online Part-Time Flex", cohort: "Cohort A", color: "#5D4E8A"},
            
        ],
      }

    render(){
        /** Get all the distinct program types from stack events */
        const program_types = [...new Set(this.state.stack_events.map(stack => stack.program_type))];

        let sorted_stacks = [];

        /** Sort stacks according to their program_type. They will be places in a new array */
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

        console.log(sorted_stacks)

        return (
            <div id="stacks_container">
                <div id="start_date_list">
                {
                    sorted_stacks.map(program => (
                        <div key={program.program_type}>
                            <p className="program_type_header">{program.program_type}</p>
                            <StackList stacks={program.filtered_stacks}/>
                        </div>
                    ))
                }
                </div>
                <div>
                {
                    sorted_stacks.map(program => (
                        <div key={program.program_type}>
                            <p className="program_type_header placeholder">{program.program_type}</p>
                            <StackBars stacks={program.filtered_stacks}/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default StackSchedule;