const orderBy = require("./orderBy");

describe("Function orderBy", () => {
    test("Сортировка по имени", () => {
        const input = [
            { name: "B", age: 30 },
            { name: "A", age: 25 },
            { name: "C", age: 35 }
        ];
        const expected = [
            { name: "A", age: 25 },
            { name: "B", age: 30 },
            { name: "C", age: 35 }
        ];
        expect(orderBy(input, ["name"])).toEqual(expected);
    });

    test("Сортировка по имени и возрасту", () => {
        const input = [
            { name: "A", age: 30 },
            { name: "B", age: 25 },
            { name: "Alice", age: 25 }
        ];
        const expected = [
            { name: "A", age: 25 },
            { name: "A", age: 30 },
            { name: "B", age: 25 }
        ];
        expect(orderBy(input, ["name", "age"])).toEqual(expected);
    });

    test("Ошибка при неверном входном типе", () => {
        expect(() => orderBy("not an array", ["name"])).toThrow();
    });

    test("Ошибка при отсутствии параметра", () => {
        const input = [
            { name: "A", age: 25 },
            { name: "B" }
        ];
        expect(() => orderBy(input, ["name", "age"])).toThrow();
    });
});
