
// import { sum } from "../sum";
import { sum } from '../sum';



test("sum function should calculate sum of two numbers",()=>{
    const r=sum(4,6);
    expect(r).toBe(10);
})