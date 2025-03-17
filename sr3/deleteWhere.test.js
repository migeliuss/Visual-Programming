const deleteWhere = require("./deleteWhere");

describe("deleteWhere", () => {
    test("Удаляет объекты с указанным значением поля", () => {
        const data = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 }
        ];
        const result = deleteWhere(data, "age", 25);
        expect(result).toEqual([{ name: "Bob", age: 30 }]);
    });

    test("Выбрасывает исключение, если объект не содержит указанное поле", () => {
        const data = [
            { name: "Alice", age: 25 },
            { name: "Bob" }
        ];
        expect(() => deleteWhere(data, "age", 25)).toThrow('Отсутствует поле "age" в одном из объектов');
    });

    test("Выбрасывает исключение, если передан не массив", () => {
        expect(() => deleteWhere("not an array", "age", 25)).toThrow("Первый аргумент должен быть массивом объектов");
    });

    test("Выбрасывает исключение, если в массиве есть не объект", () => {
        const data = [
            { name: "Alice", age: 25 },
            null,
            { name: "Charlie", age: 25 }
        ];
        expect(() => deleteWhere(data, "age", 25)).toThrow("Элемент массива должен быть объектом");
    });
});