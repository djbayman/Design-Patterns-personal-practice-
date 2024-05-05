function createPersone(sex, name, nat) {
  return {
    setPerson() {
      return `hello i am a ${sex} my name is ${name}, my nationality is ${nat}`;
    },
  };
}

let je = createPersone("male", "ayman", "dz");
let elle = createPersone("female", "koko", "bz");

let arr = [];
arr.push(je, elle);
arr.forEach((item) => console.log(item.setPerson()));

const book = new Map();

console.log(book);
