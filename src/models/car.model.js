const CommonUtils = require('../utils/common.utils');
const query = require('../db/db-connection');

class CarModel {
    tableName = 'cars';
    userCarTable = 'user_car';

    find = async(params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = CommonUtils.multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async(params) => {
        const { columnSet, values } = CommonUtils.multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (users)
        return result[0];
    }

    findOneWithAndInCar = async(params) => {
        const { columnSet, values } = CommonUtils.multipleColumnSetWithAnd(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        return result;
    }

    findOneWithAnd = async(params) => {
        const { columnSet, values } = CommonUtils.multipleColumnSetWithAnd(params)

        const sql = `SELECT * FROM ${this.userCarTable}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (user_car)
        return result[0];
    }

    create = async({ year, make, model, colour, created_on }) => {
        const sql = `INSERT INTO ${this.tableName}
        (year, make, model, colour, created_on) VALUES (?,?,?,?,?)`;

        const result = await query(sql, [year, make, model, colour, created_on]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new CarModel;