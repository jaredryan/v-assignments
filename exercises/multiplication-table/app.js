const multTable = (num) => {
    const table = [];
    for (let i = 1; i <= num; i++) {
        let row = [];
        for (let j = 1; j <= num; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

console.log(multTable(10));
