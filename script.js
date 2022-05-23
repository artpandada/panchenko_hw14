'use strict';

function Student(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.yearBorn = year;
    this.visit = [];
    this.grade = [];
    this.average = function (value) {

        if (value.length === 0) {
            return 0;
        }

        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }

        return sum / value.length;
    }
}


Student.prototype.age = function () {
    return new Date().getFullYear() - this.yearBorn;
}


Student.prototype.present = function () {

    if (this.visit.length < 10) {
        this.visit[this.visit.length] = true;
    }
}

Student.prototype.absent = function () {

    if (this.visit.length < 10) {

        this.visit[this.visit.length] = false;
    }
}

Student.prototype.mark = function (grade) {
    if (typeof grade === 'number' && grade >= 0 && grade <= 10 && this.grade.length < 10) {
        this.grade[this.grade.length] = grade;
    }

}
Student.prototype.summary = function () {
    if (this.average(this.grade) > 9 && this.average(this.visit) > 0.9) {
        return "Ути какой молодчинка!";
    } else if (this.average(this.grade) > 9 || this.average(this.visit) > 0.9) {
        return "Норм, но можно лучше";
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

st.present();
st.absent();
st.present();
st.present();

st.mark(10);
st.mark(10);
st.mark(10);
st.mark(-1);
st.mark(10);
st.mark(10);
st.mark(9);
st.mark(9);
st.mark('n');

console.log(st.age());
console.log(st.grade);
console.log(st.visit);
console.log(st.summary());








