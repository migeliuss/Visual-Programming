function orderBy(array, properties) {
    if (!Array.isArray(array)) {
        throw new TypeError("Первый аргумент должен быть массивом");
    }
    
    return [...array].sort((a, b) => {
        if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
            throw new TypeError("Все элементы массива должны быть объектами");
        }

        for (const prop of properties) {
            if (!(prop in a) || !(prop in b)) {
                throw new Error(`Отсутствует свойство '${prop}' в одном из объектов`);
            }

            if (a[prop] > b[prop]) return 1;
            if (a[prop] < b[prop]) return -1;
        }
        return 0;
    });
}

module.exports = orderBy;
