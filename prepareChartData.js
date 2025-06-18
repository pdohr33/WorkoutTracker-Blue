function prepareChartData(workoutData) {
  const chartData = {};
  workoutData.forEach(workout => {
    const date = new Date(workout.date);
    workout.exercises.forEach(section => {
      if (!chartData[section.section_name]) {
        chartData[section.section_name] = {};
      }
      section.exercises.forEach(exercise => {
        if (!chartData[section.section_name][exercise.name]) {
          chartData[section.section_name][exercise.name] = [];
        }
        exercise.sets.forEach(set => {
          const weight = set.weight === "body weight" ? 1 : parseInt(set.weight, 10);
          chartData[section.section_name][exercise.name].push({
            date: date,
            weight: weight,
            weightLabel: set.weight,
            reps: set.reps,
            set: set.set
          });
        });
      });
    });
  });
  return chartData;
}

module.exports = { prepareChartData };
