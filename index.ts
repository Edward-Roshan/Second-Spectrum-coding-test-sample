import csv from 'csvtojson/v2';

const readFromCsv = async () => {
    return await csv({ delimiter: ',' }).fromFile('./values.csv');
}

type filteredFormat = {
    first: {
        date: Date,
        value: number
    },
    last: {
        date: Date,
        value: number
    }
};

type csvFormat = {
    Name: string,
    Date: string,
    notes: string,
    Value: string,
    Change: string
}

type resultFormat = {
    name: string,
    value: number
}

const filterd: {
    [key: string]: filteredFormat;
} = {};

readFromCsv().then((json: csvFormat[]) => {
    json.forEach(c => {
        if (filterd[c.Name]) {
            const item = filterd[c.Name];
            const value = parseInt(c.Value);

            const currentDate = new Date(c.Date);
            const storedFirstDate = item.first.date;
            const storedLastDate = new Date(item.last.date);
            if (currentDate < storedFirstDate) {
                item.first = {
                    date: currentDate,
                    value
                }
            }

            if (currentDate > storedLastDate) {
                item.last = {
                    date: currentDate,
                    value
                }
            }
        }
        else {
            filterd[c.Name] = {
                first: {
                    date: new Date(c.Date),
                    value: parseInt(c.Value),
                },
                last: {
                    date: new Date(c.Date),
                    value: parseInt(c.Value)
                }
            }
        }
    });

    let result!: resultFormat;

    Object.keys(filterd).forEach(c => {
        const item = filterd[c];
        if (result) {
            const value = item.last.value - item.first.value;
            if (value > result.value) {
                result = {
                    name: c,
                    value
                }
            }
        }
        else {
            const value = item.last.value - item.first.value;
            result = {
                name: c,
                value
            }
        }
    })
    if (result) {
        console.log(`公司: ${result.name}, 股价增值: ${result.value}`);
    }
});
