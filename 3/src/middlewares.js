const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN 
  if (action.type === 'TASK_ADD') {
    const date = new Date().toLocaleDateString('ru-RU');
    action.payload.task.text = `Задача на ${date}: ${action.payload.task.text}`;
  }
  // END
  return next(action);
};

export default { logger, addDate };
