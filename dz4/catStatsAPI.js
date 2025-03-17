import { loadData } from "./catBreeds.js";
import { calcStats } from "./catStats.js";

async function calcStatsFromAPI() {
    try {
        const catsInfo = await loadData();
        return calcStats(catsInfo);
    } catch (error) {
        console.error("Ошибка при вычислении статистики:", error);
        return {};
    }
}

export { calcStatsFromAPI };
