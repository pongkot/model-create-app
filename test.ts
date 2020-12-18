export class person {
  private name: string;
  private age: number;
  private birthdate: Date;
  private graduate: boolean;
  getname(): string {
    return this.name;
  }
  setname(name: string): this {
    this.name = name;
    return this;
  }
  getage(): number {
    return this.age;
  }
  setage(age: number): this {
    this.age = age;
    return this;
  }
  getbirthdate(): Date {
    return this.birthdate;
  }
  setbirthdate(birthdate: Date): this {
    this.birthdate = birthdate;
    return this;
  }
  getgraduate(): boolean {
    return this.graduate;
  }
  setgraduate(graduate: boolean): this {
    this.graduate = graduate;
    return this;
  }
}
