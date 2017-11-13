export const completeTask = (text: any) => {
  return {
    type: "COMPLETE_TASK",
    payload: text
  };
};
