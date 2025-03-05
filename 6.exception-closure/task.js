function parseCount(value) {
    const result = Number.parseFloat(value);

    if(isNaN(result)) {
        throw new Error("Невалидное значение");
    }

    return result;
}

function validateCount(value) {
    try {
        const parsedCount = parseCount(value);
        return parsedCount;
    } catch(error) {
        return error;
    }     
}

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        if(this.side1 + this.side2 < this.side3 || this.side1 + this.side3 < this.side2 || this.side2 + this.side3 < this.side1) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    get area() {
        let semiperimeter = this.perimeter / 2;
        return parseFloat(Math.sqrt(semiperimeter * (semiperimeter - this.side1) * (semiperimeter - this.side2) * (semiperimeter - this.side3)).toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}