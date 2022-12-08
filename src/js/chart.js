import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

const init = () => {

    Chart.register(ChartDataLabels)

    const chartVisitors = document.getElementById('chart-visitors')

    if (chartVisitors) {

        const chartContext = chartVisitors.getContext('2d')

        const myChart = new Chart(chartContext, {
            type: 'doughnut',
            data: {
    
                datasets: [{
                    data: [35.5, 23.6, 15.9, 11.9, 9.1, 3.9],
                    backgroundColor: ['#00529C', '#2E3092', '#00AEEF', '#662D91', '#F7941E', '#58595B'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: '#ffffff',
                        textAlign: 'center',
                        font: {
                            size: 16,
                            weight: 700,
                            lineHeight: 1.6
                        },
                        formatter: function(value, chartContext) {
                            return value + '%';
                        }
                    }
                }
            }
        });

    }
}

export default { init }