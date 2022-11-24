import * as React from "react";

export type tTask = { task: string; category: string };
export type tTasksList = tTask[];

const TasksList = ({ tasks }: { tasks: tTasksList }) => {
  return (
    <ul>
      {tasks.map((task, ind) => {
        return <li key={ind}>{task.task}</li>;
      })}
    </ul>
  );
};
export default TasksList;
