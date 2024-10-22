export const generateMessage = (list = [], isCompleted: boolean) => {
  if (list.length === 0) {
    return "You don't have tasks ".green;
  }
  if (isCompleted) {
    const completTasks = list.filter(({ completedAt }) => completedAt !== null);
    if (completTasks.length === 0)
      return "You don't have completed tasks ".green;
  } else {
    const pendingTasks = list.filter(({ completedAt }) => completedAt === null);
    if (pendingTasks.length === 0) return "You don't have pending tasks ".green;
  }
  return "";
};
