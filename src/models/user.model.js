const CommonUtils = require('../utils/common.utils');
const query = require('../db/db-connection');

class UserModel {
    tableName = 'users';

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

    create = async({ name, email, phone_number, created_on }) => {
        const sql = `INSERT INTO ${this.tableName}
        (name, email, phone_number, created_on) VALUES (?,?,?,?)`;

        const result = await query(sql, [name, email, phone_number, created_on]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    purchase = async({ user_id, car_id, created_on }) => {
        const sql = `INSERT INTO user_car (user_id, car_id, created_on) VALUES (?,?,?)`;

        const result = await query(sql, [user_id, car_id, created_on]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new UserModel;