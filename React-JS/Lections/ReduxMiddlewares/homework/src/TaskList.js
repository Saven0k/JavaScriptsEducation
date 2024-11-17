import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './taskSlice'

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        if (taskStatus === 'idle') {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);

    let content;

    if (taskStatus === 'request') {
        content = <div>Loading...</div>;
    } else if (taskStatus === 'success') {
        content = tasks.map((task) => (
            <div key={task.id}>
                <h3>{task.title}</h3>
                <p>{task.completed ? 'Completed' : 'Not Completed'}</p>
            </div>
        ));
    } else if (taskStatus === 'failed') {
        content = <div>{error}</div>;
    }

    return <div>{content}</div>;
};

export default TaskList;