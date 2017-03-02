export default class Record {
    constructor(tableName, name) {
        this.tableName = tableName;
        this.name = name;

        if (!localStorage.getItem(this.tableName))
            localStorage.setItem(this.tableName,JSON.stringify({}));
        //TODO: отрабатывает не один раз, можно сделать темплейт на класс по tableName
    }

    createOrUpdate(data) {
        let rows = JSON.parse(localStorage.getItem(this.tableName));
        let row = Object.assign({}, rows[this.name], data);//{...rows[this.name], ...data};
        rows[this.name] = row;
        localStorage.setItem(this.tableName, JSON.stringify(rows));
    }

    read() {
        return JSON.parse(localStorage.getItem(this.tableName))[this.name];
    }

    isEmpty() {
        return Object.keys(this.read() || {}).length == 0;
    }
}
