class Shape{
    constructor(){
        if(new.target === Shape){
            throw new Error("Object not created");
        }
    }

    getArea(){
        throw new Error("Method not implemented");
    }
}
class Rectangle extends Shape{
    constructor(width, heigth){
        super();
        this._width = width;
        this._height = heigth;
    }
    getArea(){
        return this._width * this._height;
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this._radius = radius;
    }
    getArea(){
        return Math.PI * this._radius ** 2;
    }
}

//const shape = new Shape();
//Ошибка: Нельзя создать экземпляр абстрактного класса

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
// 50