import CovidChart from './covidChart.js';

const baseUrl = 'https://corona-api.com'

const getCovid = () => {
    fetch(`${baseUrl}/timeline`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        const datas = responseJson.data;
        display(datas)
    })
    .catch((msg) => {
        console.log(msg)
    })
}

const covidGraphic = new CovidChart(document.getElementById('covidChart'))

function display(datas) {
    const covidData = datas.reverse();

    getSelect(covidData);

    selectDate.addEventListener('change', () => {
        covidGraphic.refresh();
        
        const lastActive = [];

        covidData.forEach(data => {
            const date = data['date'];
            lastActive.push(data['active'])

            if (selectDate.value == date.slice(0, 7)) {
                ['confirmed', 'active', 'recovered', 'deaths'].forEach(dataItem => {
                    document.getElementById(`${dataItem}`).innerHTML = `${data[dataItem].toLocaleString('en')}`;
                })

                // data sekarang dikurangi data sebelumnya untuk active
                covidGraphic.config.datasets[1].data.push(data['active'] - lastActive[lastActive.length - 2])

                covidGraphic.config.labels.push(data['date'])
                covidGraphic.config.datasets[0].data.push(data['new_confirmed'])
                covidGraphic.config.datasets[2].data.push(data['new_recovered'])
                covidGraphic.config.datasets[3].data.push(data['new_deaths'])
            }
        })
        covidGraphic.display()
    })
}

function getSelect(covidData) {
    const selectDate = document.getElementById('selectDate'),
    lastDate = [];

    for (const data of covidData) {
        const date = data.date.slice(0, 7);
        if (lastDate.includes(date)) {
            continue;
        } else {
            lastDate.unshift(date);
            selectDate.innerHTML += `<option value="${date}">${date}</option>`;
        }
    }
}


getCovid();