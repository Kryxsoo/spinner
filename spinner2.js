const spinner = () => {
  const spinning = ['|', '/', '-', '\\', '|']
  let delay = 100;

  for(let spins of spinning) {
    setTimeout(() => {
      process.stdout.write(`\r${spins}  `)
    }, delay);
    delay += 200;
  }
};

spinner();



// const spinner = () => {

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     process.stdout.write('\r\\   '); 
//   }, 700);

//   setTimeout(() => {
//     process.stdout.write('\r\|   '); 
//   }, 900);
// };

// spinner();