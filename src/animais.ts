abstract class animal {
    public name: string;
    public emitirsom: string;
    public age: number;
  
    constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
    }
}
  
  export { animal };