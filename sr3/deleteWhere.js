function deleteWhere(objs, field, value) {
    if (!Array.isArray(objs)) {
        throw new Error("Первый аргумент должен быть массивом объектов");
    }

    return objs.filter(obj => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error("Элемент массива должен быть объектом");
        }
        if (!(field in obj)) {
            throw new Error(`Отсутствует поле "${field}" в одном из объектов`);
        }
        return obj[field] !== value;
    });
}

module.exports = deleteWhere;