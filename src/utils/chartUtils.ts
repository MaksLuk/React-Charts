export function createLineChartData(): { [key: string]: number } {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25
    const startDate = new Date();
    const result: { [key: string]: number } = {};

    for (let i = 0; i < length; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const dateString = date.toISOString().split('T')[0];
        const randomValue = Math.floor(Math.random() * 10) + 1; // Случайное число от 1 до 10
        result[dateString] = randomValue;
    }

    return result;
}

export function createPieChartData(): [string, number][] {
    const length = Math.floor(Math.random() * 5) + 2; // Случайная длина от 2 до 6
    const result: [string, number][] = [];

    for (let i = 0; i < length; i++) {
        const text = `Text-${i + 1}`;
        const randomNumber = Math.floor(Math.random() * 41) + 10; // Случайное число от 10 до 50
        result.push([text, randomNumber]);
    }

    return result;
}

export function createScatterChartData(): [number, number][] {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25
    const result: [number, number][] = [];

    for (let i = 0; i < length; i++) {
        const randomNumber1 = Math.floor(Math.random() * 41) + 10; // Случайное число от 10 до 50
        const randomNumber2 = Math.floor(Math.random() * 131) + 20; // Случайное число от 20 до 150
        result.push([randomNumber1, randomNumber2]);
    }

    return result;
}

export function createLineChartData2(minLength: number = 5, maxLingth: number = 25) {
    const length = Math.floor(Math.random() * (maxLingth+1-minLength)) + minLength; // Случайная длина от 5 до 25
    const labels = [];

    for (let i = 0; i < length; i++) {
        labels.push('Text-' + (i+1));
    }

    const result = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => Math.floor(Math.random() * 101) + 100),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => Math.floor(Math.random() * 101) + 100),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };

    return result;
}

export function createPieChartData2(min: number = 3, max: number = 6) {
    const length = Math.floor(Math.random() * (max+1-min)) + min; // Случайная длина от 3 до 6
    const labels = [];

    for (let i = 0; i < length; i++) {
        labels.push('Text-' + (i+1));
    }

    const result = {
        labels: labels,
        datasets: [
            {
            label: 'Пам-пам текст ',
            data: labels.map(() => Math.floor(Math.random() * 10) + 1),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };

    return result;
}

export function createLineAndBarChartData(minLength: number = 5, maxLingth: number = 25) {
    const length = Math.floor(Math.random() * (maxLingth+1-minLength)) + minLength; // Случайная длина от 5 до 25
    const labels = [];

    for (let i = 0; i < length; i++) {
        labels.push('Text-' + (i+1));
    }

    const result = {
        labels,
        datasets: [
          {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => Math.floor(Math.random() * 101) + 100),
          },
          {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: labels.map(() => Math.floor(Math.random() * 101) + 100),
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: labels.map(() => Math.floor(Math.random() * 101) + 100),
          },
        ],
    };
    
    return result;
}

export function createScatterChartData2() {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25

    const result = {
        datasets: [
          {
            label: 'A dataset',
            data: Array.from({ length: length }, () => ({
              x: Math.floor(Math.random() * 41) + 10,   // Случайное число от 10 до 50
              y: Math.floor(Math.random() * 131) + 20,  // Случайное число от 20 до 150
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
    };

    return result;
}

export function createBubbleChartData() {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25

    const result = {
        datasets: [
          {
            label: 'Red dataset',
            data: Array.from({ length: length }, () => ({
              x: Math.floor(Math.random() * 41) + 10,   // Случайное число от 10 до 50
              y: Math.floor(Math.random() * 131) + 20,  // Случайное число от 20 до 150
              r: Math.floor(Math.random() * 21) + 5,    // Случайное число от 5 до 25
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Blue dataset',
            data: Array.from({ length: length }, () => ({
              x: Math.floor(Math.random() * 41) + 10,   // Случайное число от 10 до 50
              y: Math.floor(Math.random() * 131) + 20,  // Случайное число от 20 до 150
              r: Math.floor(Math.random() * 21) + 5,    // Случайное число от 5 до 25
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };

    return result;
}

export function createLineChartData3() {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25
    const result: number[][] = [[],[], []];

    for (let i = 0; i < length; i++) {
        result[0].push(0.5 * (i+1));
        result[1].push(Math.floor(Math.random() * 15) + 5);
        result[2].push(Math.floor(Math.random() * 5) + 1);
    }

    return result;
}

export function createPieChartData3(min: number = 3, max: number = 6) {
    const length = Math.floor(Math.random() * (max+1-min)) + min; // Случайная длина от 3 до 6
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push({ id: i, value: Math.floor(Math.random() * (10)) + 1, label: `series ${i}` });
    }

    return result;
}

export function createScatterChartData3() {
    const length = Math.floor(Math.random() * 26) + 25; // Случайная длина от 5 до 25
    const result = [];

    for (let i = 0; i < length; i++) {
        const randomNumber1 = Math.floor(Math.random() * 41) + 10; // Случайное число от 10 до 50
        const randomNumber2 = Math.floor(Math.random() * 131) + 20; // Случайное число от 20 до 150
        result.push({ x: randomNumber1, y: randomNumber2, id: i });
    }

    return result;
}

export function createLineChartData4() {
    const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25
    const result: (string|number)[][] = [['x', 'dogs']];

    for (let i = 1; i <= length; i++) {
        result.push([i, Math.floor(Math.random() * 5) + 1]);
    }

    return result;
}

export function createAreaChartData() {
  const length = Math.floor(Math.random() * 21) + 5; // Случайная длина от 5 до 25
  const result: (string|number)[][] = [['c1', 'c2', 'c3'],];

  for (let i = 1; i <= length; i++) {
      result.push([''+i, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 5) + 1]);
  }

  return result;
}

export function createPieChartData4(min: number = 3, max: number = 6) {
  const length = Math.floor(Math.random() * (max+1-min)) + min; // Случайная длина от 3 до 6
  const result: (string|number)[][] = [['c1', 'c2'],];

  for (let i = 1; i <= length; i++) {
      result.push(['t-'+i, Math.floor(Math.random() * 10) + 1]);
  }

  return result;
}
