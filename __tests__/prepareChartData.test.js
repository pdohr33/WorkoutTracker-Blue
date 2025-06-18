const { prepareChartData } = require('../prepareChartData');

describe('prepareChartData', () => {
  test('converts body weight and preserves weight labels', () => {
    const sample = [
      {
        date: '2024-01-01',
        workout_type: 'Test',
        exercises: [
          {
            section_name: 'Back',
            exercises: [
              {
                name: 'Pull-Up',
                sets: [
                  { set: 1, reps: 10, weight: 'body weight' },
                  { set: 2, reps: 8, weight: '50 lbs' }
                ]
              }
            ]
          }
        ]
      }
    ];

    const result = prepareChartData(sample);
    const entries = result['Back']['Pull-Up'];

    expect(entries).toHaveLength(2);
    expect(entries[0].weight).toBe(1);
    expect(entries[0].weightLabel).toBe('body weight');
    expect(entries[1].weight).toBe(50);
    expect(entries[1].weightLabel).toBe('50 lbs');
  });
});
