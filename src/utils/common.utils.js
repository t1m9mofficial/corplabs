class CommonUtils {
    multipleColumnSet = (object) => {
        if (typeof object !== 'object') {
            throw new Error('Invalid input');
        }

        const keys = Object.keys(object);
        const values = Object.values(object);

        var columnSet = keys.map(key => `${key} = ?`).join(', ');

        return {
            columnSet,
            values
        }
    }

    multipleColumnSetWithAnd = (object) => {
        if (typeof object !== 'object') {
            throw new Error('Invalid input');
        }

        const keys = Object.keys(object);
        const values = Object.values(object);

        var columnSet = keys.map(key => `${key} = ?`).join(' AND ');

        return {
            columnSet,
            values
        }
    }

    multipleColumnSetWithOr = (object) => {
        if (typeof object !== 'object') {
            throw new Error('Invalid input');
        }

        const keys = Object.keys(object);
        const values = Object.values(object);

        var columnSet = keys.map(key => `${key} = ?`).join(' OR ');

        return {
            columnSet,
            values
        }
    }
}

module.exports = new CommonUtils;