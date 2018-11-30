const Calendar = class {
    constructor(year, month, days, spaceF) {
        this.year = year;
        this.month = month;
        this.days = days;
        this.spaceF = spaceF
        this.count = days - 1;
        this.week = 7;
        this.weeks = Math.floor((this.spaceF + this.days) / 7 + 1);
        this.spaceL = this.week * this.weeks - this.spaceF - this.days;
        this.space = '                 ';
        this.weeksObj = [];
        this.result = `| 🗓 |        Mo       |        Tu       |        We       |        Tu       |        Fr       |        Sa       |        Su       |
| -- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- |\n`
    }
    generate() {
        let weeksArray = [];
        if (this.month < 10) {
            this.month = `0${this.month}`;
        }
        for (let i = 0; i < this.weeks; i++) {
            weeksArray.push([]);
            
        }
        for (let i = 0; i < this.spaceF; i++) {
            weeksArray[0].push(this.space);
        }
        for (let i = 0; i < this.week - this.spaceF; i++) {
            let day = this.days - this.count;
            if (day < 10) {
                day = `0${day}`;
            }
            weeksArray[0].push(`[${day}](#${this.year}-${this.month}-${day})`)
            if ( this.count >= 0 ) {
                this.count--;
            }
        }
        for (let i = 0; i < weeksArray.length; i++) {
            weeksArray[i].unshift(` W${i+1} `);
            for (let j = 0; j < this.week; j++) {
                let day = this.days - this.count;
                if (day < 10) {
                    day = `0${day}`;
                }
                if (i <= this.weeks - 2) {
                    if (day <=this.days ) {
                        weeksArray[i+1].push(`[${day}](#${this.year}-${this.month}-${day})`)
                    }
                }
                
                if ( this.count >= 0 ) {
                    this.count--;
                }
            }   
        }
        for (let h = 0; h < this.spaceL; h++) {
            weeksArray[weeksArray.length - 1].push(this.space);
        }
        for (let i = 0; i < this.weeks; i++) {
            this.result = this.result + `|${weeksArray[i].join('|')}|\n`;
        }
        console.log(this.result);
    }
}
const December = new Calendar(2018, 12, 31, 5);
const January = new Calendar(2019, 01, 31, 1);

new Calendar(2019,04,30,6).generate();