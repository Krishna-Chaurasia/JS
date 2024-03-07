```javascript
const books = [ 

    {title: 'Book one', genre:'Fiction', publish: 1987,edition : 2004},
    {title: 'Book two', genre:'History', publish: 1988,edition : 2007},
    {title: 'Book three', genre:'Science', publish: 1927,edition : 2009},
    {title: 'Book four', genre:'Non-Fiction', publish: 1977,edition : 2002},
    {title: 'Book five', genre:'Fiction', publish: 1983,edition : 2011},
    {title: 'Book six', genre:'History', publish: 1887,edition : 2023},
    {title: 'Book seven', genre:'Science', publish: 1983,edition : 2004},
    {title: 'Book eight', genre:'Non-Fiction', publish: 1981,edition : 2007},
    {title: 'Book nine', genre:'Maths', publish: 1907,edition : 2001},

];

console.log("\ngenre wise filter\n")

const userBooks = books.filter( (bk) => bk.genre ==='History')

console.log(userBooks);

console.log("\npublish wise filter\n")

const userBooks_01 = books.filter( (bk) => bk.publish ===1987)

console.log(userBooks_01);


console.log("\nedition wise filter\n")

const userBooks_02 = books.filter( (bk) => {
    return bk.edition >= 2010 && bk.genre === "Fiction"
 })

console.log(userBooks_02);
```
```
output:

genre wise filter

[
  { title: 'Book two', genre: 'History', publish: 1988, edition: 2007 },
  { title: 'Book six', genre: 'History', publish: 1887, edition: 2023 }
]

publish wise filter

[
  { title: 'Book one', genre: 'Fiction', publish: 1987, edition: 2004 }
]

edition wise filter

[
  {
    title: 'Book five',
    genre: 'Fiction',
    publish: 1983,
    edition: 2011
  }
]
```
