class DataSource {
    static searchGlobal(keyword) {
        new Promise((resolve, reject) => {
            fetch(`${baseUrl}/timeline`)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    resolve(responseJson.data);
                })
                .catch((msg) => {
                    reject(msg)
                })
        })
    }
}

export default DataSource