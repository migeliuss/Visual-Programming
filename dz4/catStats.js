
function calcStats(catsInfo) {
    const countryStats = {};

    catsInfo.forEach(cat => {
        const country = cat.country.trim() || "Unknown"; // Убираем лишние пробелы, заменяем пустые значения
        countryStats[country] = (countryStats[country] || 0) + 1;
    });

    return countryStats;
}

export { calcStats };
