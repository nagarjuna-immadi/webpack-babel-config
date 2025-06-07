async function bar() {
    console.log('Async to Generator');
}

async function foo() {
  await bar();
}

foo();

console.log("=============================================");