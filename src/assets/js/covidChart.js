import Chart from 'chart.js/auto';


class CovidChart {
    constructor(canvas) {
        this.config = {
            labels: [],
            datasets: [
                {
                    label: 'Confirmed',
                    data: [],
                    backgroundColor: ['rgba(250, 32, 61, .2)'],
                    borderColor: ['rgba(250, 32, 61, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'Active',
                    data: [],
                    backgroundColor: ['rgba(242, 118, 24, 0.2)'],
                    borderColor: ['rgba(242, 118, 24, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'Recovered',
                    data: [],
                    backgroundColor: ['rgba(39, 242, 24, .2)'],
                    borderColor: ['rgba(39, 242, 24, 1)'],
                    borderWidth: 1
                },
                {
                    label: 'Deaths',
                    data: [],
                    backgroundColor: ['rgba(31, 4, 4, .2)'],
                    borderColor: ['rgba(31, 4, 4, 1)'],
                    borderWidth: 1
                }
            ]
        };
        this.chart = new Chart(canvas, {
            type: 'line',
            data: this.config,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Covid-19 Statistic'
                    }
                }
            }
        });
    }

    display() {
        this.chart.update()
    }

    refresh() {
        this.config.labels = []
        this.config.datasets.forEach(data => {
            data.data = [];
        })
    }
}

export default CovidChart