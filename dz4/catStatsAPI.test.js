
import { calcStatsFromAPI } from "./catStatsAPI";
import { loadData } from "./catBreeds";
import { calcStats } from "./catStats";

// Подмена функции loadData
jest.mock("./catBreeds", () => ({
    loadData: jest.fn(),
}));

jest.mock("./catStats", () => ({
    calcStats: jest.fn(),
}));

describe("calcStatsFromAPI (с подменой loadData)", () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Очищаем моки перед каждым тестом
    });

    it("должна возвращать корректную статистику при успешном запросе", async () => {
        const mockData = [
            { breed: "Siamese", country: "Thailand", origin: "Natural", coat: "Short", pattern: "Point" },
            { breed: "Maine Coon", country: "USA", origin: "Natural", coat: "Long", pattern: "Solid" },
            { breed: "Persian", country: "Iran", origin: "Natural", coat: "Long", pattern: "Solid" },
        ];

        const expectedStats = { Thailand: 1, USA: 1, Iran: 1 };

        loadData.mockResolvedValue(mockData); // Подмена данных, сервер не вызывается
        calcStats.mockReturnValue(expectedStats);

        const result = await calcStatsFromAPI();

        expect(loadData).toHaveBeenCalledTimes(1); // Проверяем, что loadData вызвалась 1 раз
        expect(calcStats).toHaveBeenCalledWith(mockData); // Проверяем, что данные переданы в calcStats
        expect(result).toEqual(expectedStats); // Проверяем ожидаемый результат
    });

    it("должна вернуть пустой объект при ошибке запроса", async () => {
        loadData.mockRejectedValue(new Error("Ошибка загрузки данных")); // Подменяем ошибку при загрузке

        const result = await calcStatsFromAPI();

        expect(loadData).toHaveBeenCalledTimes(1);
        expect(result).toEqual({});
    });
});
