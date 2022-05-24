'use strict';

function Student(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.yearBorn = year;
    this.visit = new Array(10);
    this.grade = new Array(10);
}


Student.prototype.age = function () {
    return new Date().getFullYear() - this.yearBorn;
}


Student.prototype.present = function () {

    for (let i = 0; i < this.visit.length; i++) {

        if (this.visit[i] === undefined) {
            this.visit[i] = true;
            break;
        }

    }


}

Student.prototype.absent = function () {

    for (let i = 0; i < this.visit.length; i++) {

        if (this.visit[i] === undefined) {
            this.visit[i] = false;
            break;
        }

    }
}

Student.prototype.mark = function (grade) {

    if (typeof grade === 'number' && grade >= 0 && grade <= 10) {

        for (let i = 0; i < this.grade.length; i++) {

            if (this.grade[i] === undefined) {
                this.grade[i] = grade;
                break;

            }
        }
    }
}

Student.prototype.average = function (value) {
    let length = 0;
    let sum = 0;

    for (let i = 0; i < value.length; i++) {

        if (value[i] !== undefined) {
            sum += value[i];
            length++;
        }
    }

    if (length === 0) {
        return 0;
    }

    return sum / length;
}


Student.prototype.summary = function () {
    if (this.average(this.grade) > 9 && this.average(this.visit) > 0.9) {
        return "Ути какой молодчинка!";
    } else if (this.average(this.grade) > 9 || this.average(this.visit) > 0.9) {
        return "Норм,  но можно лучше";
    } else {
        return "Редиска!";
    }
}


//Test


let user = {
    name: "Vova",
    surname: "Ivanov",
    yearBorn: 2010
}
let st = new Student(user.name, user.surname, user.yearBorn);
console.log(st.visit[0])
st.present();
st.present();
st.present();
st.present();

st.present();
st.present();
st.present();
st.present();


st.mark(10);
st.mark(10);
st.mark(10);
st.mark(-1);
st.mark(10);

st.mark('n');
st.mark(10);
st.mark(10);
st.mark(10);
st.mark(-1);
st.mark(10);
st.mark(10);


st.mark('n');

console.log(st.age());
console.log(st.grade);
console.log(st.visit);
console.log(st.summary());








