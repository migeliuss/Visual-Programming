async function loadData() {
    const url = "https://catfact.ninja/breeds";
    let allBreeds = [];
    let nextPage = url;

    try {
        while (nextPage) {
            const response = await fetch(nextPage);
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            const data = await response.json();
            allBreeds = allBreeds.concat(data.data);
            nextPage = data.next_page_url;
        }

        return allBreeds;
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        return [];
    }
}

export { loadData };