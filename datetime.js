import {
  parseDate,
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";

console.log(parseDate("13-07-2020", "dd-mm-yyyy"));

console.log(dayOfYear(new Date("2020-07-13T03:24:00")));
console.log(currentDayOfYear());
