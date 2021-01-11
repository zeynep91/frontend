function range(from, to){
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes(x){
        return this.from <= x && this.to >= x;
    },
    equals(obj){
        return (obj && obj.from === this.from && obj.to === this.to && obj.from && obj.to );
    }
}

let r1 = range(1,3);
let r2 = range(1,3);
let r3 = new range(1, 3);

console.log(r1 instanceof range);
// console.log(r1 instanceof range.methods); type error