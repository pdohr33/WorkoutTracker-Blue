const workoutData = [
{
        "date": "2024-05-15",
        "workout_type": "Shoulders and Legs",
        "exercises": [
            {
                "section_name": "Shoulders",
                "exercises": [
                    {"name": "Seated Dumbbell Shoulder Press", "sets": [{"set": 1, "reps": 10, "weight": "60 lbs"}, {"set": 2, "reps": 10, "weight": "60 lbs"}, {"set": 3, "reps": 10, "weight": "60 lbs"}]},
                    {"name": "Lateral Raise", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "25 lbs"}, {"set": 3, "reps": 8, "weight": "25 lbs"}]},
                    {"name": "Front Raise", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 10, "weight": "20 lbs"}, {"set": 3, "reps": 8, "weight": "20 lbs"}]},
                    {"name": "Upright Row", "sets": [{"set": 1, "reps": 12, "weight": "40 lbs"}, {"set": 2, "reps": 12, "weight": "40 lbs"}, {"set": 3, "reps": 10, "weight": "40 lbs"}]},
                    {"name": "Reverse Pec Deck Fly", "sets": [{"set": 1, "reps": 12, "weight": "70 lbs"}, {"set": 2, "reps": 12, "weight": "85 lbs"}, {"set": 3, "reps": 8, "weight": "100 lbs"}]},
                    {"name": "Lateral Raise Machine", "sets": [{"set": 1, "reps": 12, "weight": "70 lbs"}, {"set": 2, "reps": 12, "weight": "80 lbs"}, {"set": 3, "reps": 12, "weight": "90 lbs"}]}
                ]
            },
            {
                "section_name": "Legs",
                "exercises": [
                    {"name": "Squat", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 10, "weight": "225 lbs"}]},
                    {"name": "Leg Press", "sets": [{"set": 1, "reps": 12, "weight": "280 lbs"}, {"set": 2, "reps": 10, "weight": "370 lbs"}, {"set": 3, "reps": 8, "weight": "370 lbs"}]},
                    {"name": "Lunges", "sets": [{"set": 1, "reps": 12, "weight": "35 lbs"}, {"set": 2, "reps": 10, "weight": "40 lbs"}, {"set": 3, "reps": 8, "weight": "45 lbs"}]},
                    {"name": "Leg Curls", "sets": [{"set": 1, "reps": 12, "weight": "110 lbs"}, {"set": 2, "reps": 10, "weight": "115 lbs"}, {"set": 3, "reps": 8, "weight": "120 lbs"}]},
                    {"name": "Calf Raises", "sets": [{"set": 1, "reps": 15, "weight": "200 lbs"}, {"set": 2, "reps": 12, "weight": "220 lbs"}, {"set": 3, "reps": 10, "weight": "240 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-05-14",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Deadlift", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 8, "weight": "225 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Wide-Grip Pull-Up", "sets": [{"set": 1, "reps": 10, "weight": "body weight"}, {"set": 2, "reps": 10, "weight": "body weight"}, {"set": 3, "reps": 6, "weight": "body weight"}]},
                    {"name": "Seated Cable Row", "sets": [{"set": 1, "reps": 12, "weight": "72 lbs"}, {"set": 2, "reps": 12, "weight": "90 lbs"}, {"set": 3, "reps": 12, "weight": "120 lbs"}]},
                    {"name": "Single-Arm Dumbbell Row", "sets": [{"set": 1, "reps": 12, "weight": "60 lbs"}, {"set": 2, "reps": 12, "weight": "55 lbs"}, {"set": 3, "reps": 10, "weight": "60 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "Barbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "70 lbs"}, {"set": 2, "reps": 12, "weight": "80 lbs"}, {"set": 3, "reps": 10, "weight": "90 lbs"}]},
                    {"name": "Hammer Curl Rope", "sets": [{"set": 1, "reps": 12, "weight": "52 lbs"}, {"set": 2, "reps": 10, "weight": "57 lbs"}, {"set": 3, "reps": 8, "weight": "57 lbs"}]},
                    {"name": "Concentration Curl", "sets": [{"set": 1, "reps": 12, "weight": "17 lbs"}, {"set": 2, "reps": 10, "weight": "17 lbs"}, {"set": 3, "reps": 10, "weight": "17 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-05-13",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 15, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Incline Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "155 lbs"}, {"set": 3, "reps": 8, "weight": "175 lbs"}]},
                    {"name": "Decline Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 10, "weight": "185 lbs"}, {"set": 3, "reps": 8, "weight": "185 lbs"}]},
                    {"name": "Chest Fly on Pec Deck", "sets": [{"set": 1, "reps": 12, "weight": "100 lbs"}, {"set": 2, "reps": 12, "weight": "100 lbs"}, {"set": 3, "reps": 12, "weight": "40 lbs"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Tricep Dips", "sets": [{"set": 1, "reps": 15, "weight": "body weight"}, {"set": 2, "reps": 12, "weight": "body weight"}, {"set": 3, "reps": 10, "weight": "body weight"}]},
                    {"name": "Overhead Tricep Extension", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 10, "weight": "20 lbs"}]},
                    {"name": "Skull Crushers", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 10, "weight": "65 lbs"}, {"set": 3, "reps": 8, "weight": "65 lbs"}]},
                    {"name": "Cable Tricep Pushdown", "sets": [{"set": 1, "reps": 15, "weight": "37.5 lbs"}, {"set": 2, "reps": 12, "weight": "50 lbs"}, {"set": 3, "reps": 12, "weight": "50 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-05-10",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Deadlift", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 12, "weight": "205 lbs"}]},
                    {"name": "Wide-Grip Pull-Up", "sets": [{"set": 1, "reps": 12, "weight": "body weight"}, {"set": 2, "reps": 12, "weight": "body weight"}, {"set": 3, "reps": 10, "weight": "body weight"}]},
                    {"name": "Single-Arm Dumbbell Row", "sets": [{"set": 1, "reps": 12, "weight": "70 lbs"}, {"set": 2, "reps": 12, "weight": "70 lbs"}, {"set": 3, "reps": 10, "weight": "70 lbs"}]},
                    {"name": "Barbell Row", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "135 lbs"}, {"set": 3, "reps": 10, "weight": "135 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "Barbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "90 lbs"}, {"set": 2, "reps": 8, "weight": "90 lbs"}, {"set": 3, "reps": 8, "weight": "70 lbs"}]},
                    {"name": "Concentration Curl", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "27.5 lbs"}, {"set": 3, "reps": 10, "weight": "30 lbs"}]},
                    {"name": "Dumbell Hammer Curl", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 8, "weight": "40 lbs"}, {"set": 3, "reps": 10, "weight": "35 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-05-09",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 10, "weight": "185 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Incline Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 11, "weight": "155 lbs"}, {"set": 3, "reps": 10, "weight": "140 lbs"}]},
                    {"name": "Decline Cable Flyes", "sets": [{"set": 1, "reps": 12, "weight": "10 lbs"}, {"set": 2, "reps": 12, "weight": "17 lbs"}, {"set": 3, "reps": 10, "weight": "17 lbs"}]},
                    {"name": "Push-Ups", "sets": [{"set": 1, "reps": 20, "weight": "body weight"}, {"set": 2, "reps": 20, "weight": "body weight"}, {"set": 3, "reps": 20, "weight": "body weight"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Tricep Dips", "sets": [{"set": 1, "reps": 10, "weight": "body weight"}, {"set": 2, "reps": 8, "weight": "body weight"}, {"set": 3, "reps": 8, "weight": "body weight"}]},
                    {"name": "Overhead Tricep Extension", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 12, "weight": "30 lbs"}, {"set": 3, "reps": 10, "weight": "30 lbs"}]},
                    {"name": "Cable Tricep Pushdown", "sets": [{"set": 1, "reps": 15, "weight": "42.5 lbs"}, {"set": 2, "reps": 12, "weight": "42.5 lbs"}, {"set": 3, "reps": 12, "weight": "42.5 lbs"}]},
                    {"name": "Skull Crushers", "sets": [{"set": 1, "reps": 12, "weight": "60 lbs"}, {"set": 2, "reps": 12, "weight": "60 lbs"}, {"set": 3, "reps": 10, "weight": "60 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-05-01",
        "workout_type": "Shoulders and Legs",
        "exercises": [
            {
                "section_name": "Shoulders",
                "exercises": [
                    {"name": "Seated Dumbbell Shoulder Press", "sets": [{"set": 1, "reps": 12, "weight": "55 lbs"}, {"set": 2, "reps": 12, "weight": "55 lbs"}, {"set": 3, "reps": 10, "weight": "55 lbs"}]},
                    {"name": "Lateral Raise", "sets": [{"set": 1, "reps": 12, "weight": "15 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 12, "weight": "25 lbs"}]},
                    {"name": "Front Raise", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 10, "weight": "20 lbs"}]},
                    {"name": "Upright Row", "sets": [{"set": 1, "reps": 12, "weight": "35 lbs"}, {"set": 2, "reps": 12, "weight": "40 lbs"}, {"set": 3, "reps": 12, "weight": "40 lbs"}]},
                    {"name": "Reverse Pec Deck Fly", "sets": [{"set": 1, "reps": 12, "weight": "85 lbs"}, {"set": 2, "reps": 12, "weight": "85 lbs"}, {"set": 3, "reps": 10, "weight": "85 lbs"}]}
                ]
            },
            {
                "section_name": "Legs",
                "exercises": [
                    {"name": "Squat", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 10, "weight": "225 lbs"}]},
                    {"name": "Leg Press", "sets": [{"set": 1, "reps": 12, "weight": "270 lbs"}, {"set": 2, "reps": 12, "weight": "360 lbs"}, {"set": 3, "reps": 10, "weight": "360 lbs"}]},
                    {"name": "Lunges", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 12, "weight": "35 lbs"}, {"set": 3, "reps": 10, "weight": "40 lbs"}]},
                    {"name": "Leg Curls", "sets": [{"set": 1, "reps": 12, "weight": "100 lbs"}, {"set": 2, "reps": 12, "weight": "100 lbs"}, {"set": 3, "reps": 10, "weight": "115 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-30",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Muscle-Ups", "sets": [{"set": 1, "reps": 5, "weight": "body weight"}, {"set": 2, "reps": 5, "weight": "body weight"}, {"set": 3, "reps": 3, "weight": "body weight"}]},
                    {"name": "Cable Row", "sets": [{"set": 1, "reps": 12, "weight": "65 lbs"}, {"set": 2, "reps": 12, "weight": "72.5 lbs"}, {"set": 3, "reps": 12, "weight": "80 lbs"}]},
                    {"name": "Lat Pulldown", "sets": [{"set": 1, "reps": 12, "weight": "100 lbs"}, {"set": 2, "reps": 12, "weight": "130 lbs"}, {"set": 3, "reps": 12, "weight": "160 lbs"}]},
                    {"name": "Cable Back Fly", "sets": [{"set": 1, "reps": 12, "weight": "10 lbs"}, {"set": 2, "reps": 12, "weight": "13 lbs"}, {"set": 3, "reps": 12, "weight": "13 lbs"}]},
                    {"name": "Hyperextensions", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 12, "weight": "45 lbs"}, {"set": 3, "reps": 12, "weight": "45 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "EZ Bar Curl", "sets": [{"set": 1, "reps": 12, "weight": "80 lbs"}, {"set": 2, "reps": 10, "weight": "80 lbs"}, {"set": 3, "reps": 10, "weight": "80 lbs"}]},
                    {"name": "Dumbell Hammer Curl", "sets": [{"set": 1, "reps": 12, "weight": "35 lbs"}, {"set": 2, "reps": 12, "weight": "35 lbs"}, {"set": 3, "reps": 12, "weight": "35 lbs"}]},
                    {"name": "Concentration Curl", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 12, "weight": "30 lbs"}, {"set": 3, "reps": 10, "weight": "30 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-29",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 20, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Pec Deck Fly", "sets": [{"set": 1, "reps": 12, "weight": "145 lbs"}, {"set": 2, "reps": 12, "weight": "145 lbs"}, {"set": 3, "reps": 12, "weight": "145 lbs"}]},
                    {"name": "Incline Dumbbell Press", "sets": [{"set": 1, "reps": 12, "weight": "60 lbs"}, {"set": 2, "reps": 12, "weight": "70 lbs"}, {"set": 3, "reps": 8, "weight": "80 lbs"}]},
                    {"name": "Chest Dips", "sets": [{"set": 1, "reps": 15, "weight": "body weight"}, {"set": 2, "reps": 15, "weight": "body weight"}, {"set": 3, "reps": 15, "weight": "body weight"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Tri Cable Push Down", "sets": [{"set": 1, "reps": 12, "weight": "17.5 lbs"}, {"set": 2, "reps": 12, "weight": "23.5 lbs"}, {"set": 3, "reps": 12, "weight": "27.5 lbs"}]},
                    {"name": "Overhead Tricep Extension with Dumbbell", "sets": [{"set": 1, "reps": 12, "weight": "40 lbs"}, {"set": 2, "reps": 12, "weight": "50 lbs"}, {"set": 3, "reps": 12, "weight": "55 lbs"}]},
                    {"name": "Tricep Kickbacks", "sets": [{"set": 1, "reps": 15, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "25 lbs"}, {"set": 3, "reps": 12, "weight": "30 lbs"}]},
                    {"name": "Reverse Grip Tricep Pushdown", "sets": [{"set": 1, "reps": 15, "weight": "37.5 lbs"}, {"set": 2, "reps": 12, "weight": "42.5 lbs"}, {"set": 3, "reps": 12, "weight": "60 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-24",
        "workout_type": "Shoulders and Legs",
        "exercises": [
            {
                "section_name": "Shoulders",
                "exercises": [
                    {"name": "Military Press", "sets": [{"set": 1, "reps": 12, "weight": "95 lbs"}, {"set": 2, "reps": 10, "weight": "115 lbs"}, {"set": 3, "reps": 8, "weight": "135 lbs"}]},
                    {"name": "Arnold Press", "sets": [{"set": 1, "reps": 12, "weight": "35 lbs"}, {"set": 2, "reps": 12, "weight": "40 lbs"}, {"set": 3, "reps": 12, "weight": "40 lbs"}]},
                    {"name": "Side Lateral Raise", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 8, "weight": "25 lbs"}, {"set": 3, "reps": 10, "weight": "25 lbs"}]},
                    {"name": "Rear Delt Fly Machine", "sets": [{"set": 1, "reps": 12, "weight": "50 lbs"}, {"set": 2, "reps": 12, "weight": "70 lbs"}, {"set": 3, "reps": 10, "weight": "25 lbs"}]}
                ]
            },
            {
                "section_name": "Legs",
                "exercises": [
                    {"name": "Leg Press", "sets": [{"set": 1, "reps": 12, "weight": "180 lbs"}, {"set": 2, "reps": 12, "weight": "360 lbs"}, {"set": 3, "reps": 12, "weight": "360 lbs"}]},
                    {"name": "Leg Curls", "sets": [{"set": 1, "reps": 12, "weight": "100 lbs"}, {"set": 2, "reps": 12, "weight": "100 lbs"}, {"set": 3, "reps": 12, "weight": "100 lbs"}]},
                    {"name": "Calf Raises", "sets": [{"set": 1, "reps": 15, "weight": "180 lbs"}, {"set": 2, "reps": 12, "weight": "360 lbs"}, {"set": 3, "reps": 12, "weight": "360 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-23",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Deadlift", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 6, "weight": "225 lbs"}, {"set": 3, "reps": 6, "weight": "225 lbs"}]},
                    {"name": "Pull-Up", "sets": [{"set": 1, "reps": 10, "weight": "body weight"}, {"set": 2, "reps": 12, "weight": "body weight"}, {"set": 3, "reps": 10, "weight": "body weight"}]},
                    {"name": "Lat Pulldown", "sets": [{"set": 1, "reps": 12, "weight": "145 lbs"}, {"set": 2, "reps": 12, "weight": "160 lbs"}, {"set": 3, "reps": 12, "weight": "160 lbs"}]},
                    {"name": "Barbell Row", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "135 lbs"}, {"set": 3, "reps": 12, "weight": "135 lbs"}]},
                    {"name": "Back Extension", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 12, "weight": "45 lbs"}, {"set": 3, "reps": 12, "weight": "45 lbs"}]},
                    {"name": "Bent Over Dumbbell Fly", "sets": [{"set": 1, "reps": 12, "weight": "10 lbs"}, {"set": 2, "reps": 12, "weight": "15 lbs"}, {"set": 3, "reps": 12, "weight": "15 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "Barbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "90 lbs"}, {"set": 2, "reps": 12, "weight": "90 lbs"}, {"set": 3, "reps": 8, "weight": "90 lbs"}]},
                    {"name": "Dumbell Hammer Curl", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 12, "weight": "37.5 lbs"}, {"set": 3, "reps": 9, "weight": "40 lbs"}]},
                    {"name": "Preacher Curl", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 10, "weight": "40 lbs"}, {"set": 3, "reps": 10, "weight": "50 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-22",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 15, "weight": "135 lbs"}, {"set": 2, "reps": 10, "weight": "225 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Incline Dumbbell Press", "sets": [{"set": 1, "reps": 12, "weight": "60 lbs"}, {"set": 2, "reps": 12, "weight": "70 lbs"}, {"set": 3, "reps": 10, "weight": "80 lbs"}]},
                    {"name": "Cable Flyes", "sets": [{"set": 1, "reps": 12, "weight": "17 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 12, "weight": "20 lbs"}]},
                    {"name": "Push-Ups", "sets": [{"set": 1, "reps": 25, "weight": "body weight"}, {"set": 2, "reps": 25, "weight": "body weight"}, {"set": 3, "reps": 25, "weight": "body weight"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Close-Grip Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "65 lbs"}, {"set": 2, "reps": 10, "weight": "65 lbs"}, {"set": 3, "reps": 10, "weight": "65 lbs"}]},
                    {"name": "Skull Crushers", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 12, "weight": "65 lbs"}, {"set": 3, "reps": 10, "weight": "65 lbs"}]},
                    {"name": "Tricep Dips", "sets": [{"set": 1, "reps": 12, "weight": "body weight"}, {"set": 2, "reps": 12, "weight": "body weight"}, {"set": 3, "reps": 12, "weight": "body weight"}]},
                    {"name": "Overhead Tricep Extension", "sets": [{"set": 1, "reps": 15, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 10, "weight": "20 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-19",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Wide-Grip Pull-Up", "sets": [{"set": 1, "reps": 10, "weight": "body weight"}, {"set": 2, "reps": 10, "weight": "body weight"}, {"set": 3, "reps": 10, "weight": "body weight"}]},
                    {"name": "Barbell Row", "sets": [{"set": 1, "reps": 10, "weight": "135 lbs"}, {"set": 2, "reps": 10, "weight": "135 lbs"}, {"set": 3, "reps": 10, "weight": "135 lbs"}]},
                    {"name": "Single-Arm Row Machine", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 12, "weight": "90 lbs"}, {"set": 3, "reps": 12, "weight": "90 lbs"}]},
                    {"name": "Hyperextensions", "sets": [{"set": 1, "reps": 12, "weight": "45 lbs"}, {"set": 2, "reps": 12, "weight": "45 lbs"}, {"set": 3, "reps": 12, "weight": "45 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "Barbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "80 lbs"}, {"set": 2, "reps": 12, "weight": "90 lbs"}, {"set": 3, "reps": 8, "weight": "100 lbs"}]},
                    {"name": "Concentration Curl", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 10, "weight": "30 lbs"}, {"set": 3, "reps": 10, "weight": "30 lbs"}]},
                    {"name": "Dumbell Hammer Curl", "sets": [{"set": 1, "reps": 12, "weight": "35 lbs"}, {"set": 2, "reps": 12, "weight": "35 lbs"}, {"set": 3, "reps": 10, "weight": "40 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-18",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 15, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 6, "weight": "225 lbs"}, {"set": 4, "reps": 6, "weight": "225 lbs"}]},
                    {"name": "Incline Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "155 lbs"}, {"set": 3, "reps": 6, "weight": "175 lbs"}]},
                    {"name": "Decline Cable Flyes", "sets": [{"set": 1, "reps": 15, "weight": "13 lbs"}, {"set": 2, "reps": 12, "weight": "17 lbs"}, {"set": 3, "reps": 12, "weight": "17 lbs"}]},
                    {"name": "Chest Dip Machine", "sets": [{"set": 1, "reps": 12, "weight": "90 lbs"}, {"set": 2, "reps": 12, "weight": "180 lbs"}, {"set": 3, "reps": 12, "weight": "180 lbs"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Tri Extension Machine", "sets": [{"set": 1, "reps": 12, "weight": "85 lbs"}, {"set": 2, "reps": 12, "weight": "100 lbs"}, {"set": 3, "reps": 10, "weight": "115 lbs"}]},
                    {"name": "Overhead Rope Tricep Extension", "sets": [{"set": 1, "reps": 12, "weight": "27.5 lbs"}, {"set": 2, "reps": 12, "weight": "32.5 lbs"}, {"set": 3, "reps": 10, "weight": "37.5 lbs"}]},
                    {"name": "Tricep Rope Pushdown", "sets": [{"set": 1, "reps": 15, "weight": "50 lbs"}, {"set": 2, "reps": 12, "weight": "60 lbs"}, {"set": 3, "reps": 12, "weight": "70 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-17",
        "workout_type": "Shoulders and Legs",
        "exercises": [
            {
                "section_name": "Shoulders",
                "exercises": [
                    {"name": "Standing Dumbbell Press", "sets": [{"set": 1, "reps": 15, "weight": "30 lbs"}, {"set": 2, "reps": 15, "weight": "35 lbs"}, {"set": 3, "reps": 12, "weight": "40 lbs"}]},
                    {"name": "Lateral Raise", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "25 lbs"}, {"set": 3, "reps": 12, "weight": "25 lbs"}]},
                    {"name": "Front Raises", "sets": [{"set": 1, "reps": 12, "weight": "20 lbs"}, {"set": 2, "reps": 12, "weight": "20 lbs"}, {"set": 3, "reps": 12, "weight": "20 lbs"}]},
                    {"name": "Machine Shoulder Press", "sets": [{"set": 1, "reps": 12, "weight": "90 lbs"}, {"set": 2, "reps": 12, "weight": "110 lbs"}, {"set": 3, "reps": 8, "weight": "130 lbs"}]}
                ]
            },
            {
                "section_name": "Legs",
                "exercises": [
                    {"name": "Leg Press", "sets": [{"set": 1, "reps": 12, "weight": "360 lbs"}, {"set": 2, "reps": 12, "weight": "360 lbs"}, {"set": 3, "reps": 12, "weight": "360 lbs"}]},
                    {"name": "Squat", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "185 lbs"}, {"set": 3, "reps": 8, "weight": "225 lbs"}]},
                    {"name": "Leg Curls", "sets": [{"set": 1, "reps": 15, "weight": "85 lbs"}, {"set": 2, "reps": 12, "weight": "100 lbs"}, {"set": 3, "reps": 12, "weight": "100 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-16",
        "workout_type": "Back and Biceps",
        "exercises": [
            {
                "section_name": "Back",
                "exercises": [
                    {"name": "Pull Down", "sets": [{"set": 1, "reps": 15, "weight": "115 lbs"}, {"set": 2, "reps": 15, "weight": "130 lbs"}, {"set": 3, "reps": 15, "weight": "145 lbs"}]},
                    {"name": "Barbell Row", "sets": [{"set": 1, "reps": 12, "weight": "95 lbs"}, {"set": 2, "reps": 12, "weight": "105 lbs"}, {"set": 3, "reps": 12, "weight": "105 lbs"}]},
                    {"name": "Lat Pulldown", "sets": [{"set": 1, "reps": 12, "weight": "100 lbs"}, {"set": 2, "reps": 10, "weight": "120 lbs"}, {"set": 3, "reps": 8, "weight": "140 lbs"}]},
                    {"name": "Seated Cable Row", "sets": [{"set": 1, "reps": 12, "weight": "50 lbs"}, {"set": 2, "reps": 12, "weight": "57.5 lbs"}, {"set": 3, "reps": 12, "weight": "65 lbs"}]}
                ]
            },
            {
                "section_name": "Biceps",
                "exercises": [
                    {"name": "Barbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "60 lbs"}, {"set": 2, "reps": 12, "weight": "70 lbs"}, {"set": 3, "reps": 12, "weight": "80 lbs"}]},
                    {"name": "Dumbell Hammer Curl", "sets": [{"set": 1, "reps": 12, "weight": "30 lbs"}, {"set": 2, "reps": 10, "weight": "35 lbs"}, {"set": 3, "reps": 8, "weight": "40 lbs"}]},
                    {"name": "Incline Dumbbell Curl", "sets": [{"set": 1, "reps": 12, "weight": "25 lbs"}, {"set": 2, "reps": 10, "weight": "30 lbs"}, {"set": 3, "reps": 8, "weight": "35 lbs"}]}
                ]
            }
        ]
    },
    {
        "date": "2024-04-15",
        "workout_type": "Chest and Triceps",
        "exercises": [
            {
                "section_name": "Chest",
                "exercises": [
                    {"name": "Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 6, "weight": "225 lbs"}, {"set": 3, "reps": 6, "weight": "225 lbs"}]},
                    {"name": "Incline Dumbbell Press", "sets": [{"set": 1, "reps": 12, "weight": "65 lbs"}, {"set": 2, "reps": 10, "weight": "70 lbs"}, {"set": 3, "reps": 8, "weight": "75 lbs"}]},
                    {"name": "Decline Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 12, "weight": "155 lbs"}, {"set": 3, "reps": 12, "weight": "155 lbs"}]},
                    {"name": "Cable Flyes", "sets": [{"set": 1, "reps": 12, "weight": "25 lbs"}, {"set": 2, "reps": 12, "weight": "27.5 lbs"}, {"set": 3, "reps": 12, "weight": "27.5 lbs"}]}
                ]
            },
            {
                "section_name": "Triceps",
                "exercises": [
                    {"name": "Close-Grip Bench Press", "sets": [{"set": 1, "reps": 12, "weight": "135 lbs"}, {"set": 2, "reps": 10, "weight": "145 lbs"}, {"set": 3, "reps": 8, "weight": "155 lbs"}]},
                    {"name": "Cable Dumbbell Overhead Tricep Extension", "sets": [{"set": 1, "reps": 12, "weight": "17.5 lbs"}, {"set": 2, "reps": 12, "weight": "22.5 lbs"}, {"set": 3, "reps": 10, "weight": "40 lbs"}]},
                    {"name": "Cable Tricep Pushdown", "sets": [{"set": 1, "reps": 12, "weight": "42.5 lbs"}, {"set": 2, "reps": 12, "weight": "52.5 lbs"}, {"set": 3, "reps": 10, "weight": "62.5 lbs"}]},
                    {"name": "Tricep Dips", "sets": [{"set": 1, "reps": 10, "weight": "body weight"}, {"set": 2, "reps": 10, "weight": "body weight"}, {"set": 3, "reps": 10, "weight": "body weight"}]}
                ]
            }
        ]
    }
];
