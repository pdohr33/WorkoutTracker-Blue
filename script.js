document.addEventListener("DOMContentLoaded", () => {
    const workoutContainer = document.getElementById("historical-container");
    const chartContainer = document.getElementById("chart-container");
    const chartsSection = document.getElementById("charts-section");
    const historicalDataSection = document.getElementById("historical-data-section");
    const navLinks = document.querySelectorAll('header nav a');

    // Navigation logic
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('main section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelector(link.getAttribute('href')).classList.add('active');
        });
    });

    // Initialize the charts section as active by default
    chartsSection.classList.add('active');

    // Sort workouts by date in descending order
    workoutData.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Populate historical data with collapsible sections
    if (workoutData && Array.isArray(workoutData)) {
        workoutData.forEach(workout => {
            const workoutDiv = document.createElement("div");
            workoutDiv.className = "workout";

            const collapsible = document.createElement("button");
            collapsible.className = "collapsible";
            collapsible.textContent = `${workout.date} - ${workout.workout_type}`;
            workoutDiv.appendChild(collapsible);

            const content = document.createElement("div");
            content.className = "content";
            content.style.display = "none"; // Ensure content is hidden by default

            // Sort sections by section_name
            workout.exercises.sort((a, b) => a.section_name.localeCompare(b.section_name));

            workout.exercises.forEach(section => {
                const sectionHeader = document.createElement("h4");
                sectionHeader.textContent = section.section_name;
                content.appendChild(sectionHeader);

                // Sort exercises by name
                section.exercises.sort((a, b) => a.name.localeCompare(b.name));

                section.exercises.forEach(exercise => {
                    const exerciseDiv = document.createElement("div");
                    const exerciseHeader = document.createElement("h5");
                    exerciseHeader.textContent = exercise.name;
                    exerciseDiv.appendChild(exerciseHeader);

                    exercise.sets.forEach(set => {
                        const weight = set.weight === "body weight" ? 1 : parseInt(set.weight, 10);
                        const setP = document.createElement("p");
                        setP.textContent = `Set ${set.set}: ${set.reps} reps @ ${set.weight}`;
                        exerciseDiv.appendChild(setP);
                    });

                    content.appendChild(exerciseDiv);
                });
            });

            workoutDiv.appendChild(content);
            workoutContainer.appendChild(workoutDiv);

            collapsible.addEventListener('click', function () {
                this.classList.toggle("active");
                content.style.display = content.style.display === "block" ? "none" : "block";
            });
        });

        initializeChartContainer(chartContainer);
    } else {
        console.error("workoutData is not an array or is undefined.");
    }
});

function initializeChartContainer(chartContainer) {
    const chartData = prepareChartData();

    console.log("Chart Data:", chartData); // Log chart data for debugging

    // Create collapsible sections for each muscle group and exercise
    Object.keys(chartData).sort().forEach(muscleGroup => {
        const muscleGroupDiv = document.createElement("div");
        muscleGroupDiv.className = "workout";

        const muscleCollapsible = document.createElement("button");
        muscleCollapsible.className = "collapsible";
        muscleCollapsible.textContent = muscleGroup;
        muscleGroupDiv.appendChild(muscleCollapsible);

        const muscleContent = document.createElement("div");
        muscleContent.className = "content";
        muscleContent.style.display = "none"; // Ensure content is hidden by default

        Object.keys(chartData[muscleGroup]).sort().forEach(exercise => {
            const exerciseDiv = document.createElement("div");
            exerciseDiv.className = "workout";

            const exerciseCollapsible = document.createElement("button");
            exerciseCollapsible.className = "collapsible";
            exerciseCollapsible.textContent = exercise;
            exerciseDiv.appendChild(exerciseCollapsible);

            const exerciseContent = document.createElement("div");
            exerciseContent.className = "content";
            exerciseContent.style.display = "none"; // Ensure content is hidden by default

            exerciseDiv.appendChild(exerciseContent);
            muscleContent.appendChild(exerciseDiv);

            exerciseCollapsible.addEventListener('click', function () {
                this.classList.toggle("active");
                exerciseContent.style.display = exerciseContent.style.display === "block" ? "none" : "block";
                if (exerciseContent.style.display === "block" && !exerciseContent.hasChildNodes()) {
                    createBarChart(exerciseContent, chartData[muscleGroup][exercise], exercise);
                }
            });
        });

        muscleGroupDiv.appendChild(muscleContent);
        chartContainer.appendChild(muscleGroupDiv);

        muscleCollapsible.addEventListener('click', function () {
            this.classList.toggle("active");
            muscleContent.style.display = muscleContent.style.display === "block" ? "none" : "block";
        });
    });
}

function prepareChartData() {
    const chartData = {};

    // Prepare data by muscle group and exercise
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
                        reps: set.reps,
                        set: set.set
                    });
                });
            });
        });
    });

    return chartData;
}

function createBarChart(container, data, exerciseName) {
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const groupedData = data.reduce((acc, entry) => {
        const dateStr = entry.date.toISOString().split('T')[0];
        if (!acc[dateStr]) {
            acc[dateStr] = [];
        }
        acc[dateStr].push(entry);
        return acc;
    }, {});

    const labels = Object.keys(groupedData).sort();
    const datasets = [];

    labels.forEach((date, index) => {
        groupedData[date].forEach(set => {
            datasets.push({
                label: `Set ${set.set}`,
                data: [{ x: date, y: set.weight }],
                backgroundColor: `rgba(99, 132, ${index * 50}, 0.2)`,
                borderColor: `rgba(99, 132, ${index * 50}, 1)`,
                borderWidth: 1,
                reps: set.reps
            });
        });
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const set = groupedData[context.raw.x].find(s => s.set === parseInt(context.dataset.label.split(' ')[1]));
                            return `Set ${set.set}: ${set.reps} reps @ ${set.weight} lbs`;
                        }
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: (value, context) => context.dataset.reps
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        displayFormats: {
                            day: 'MMM dd'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    },
                    ticks: {
                        source: 'data'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Weight (lbs)'
                    }
                }
            }
        }
    });
}

function saveDataToFile(newData) {
    // This function simulates saving new data to data.js file
    // In a real application, you'd need a server-side script to handle file writing

    const dataScript = document.createElement('script');
    dataScript.type = 'text/javascript';
    dataScript.text = `workoutData.push(...${JSON.stringify(newData)});`;
    document.head.appendChild(dataScript);
}
