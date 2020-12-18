//callback function
const sayMyName = (name, idade) => {
  console.log(`Meu nome é ${name()} e tenho ${idade()}`);
};

sayMyName(
  () => "Emanuel",
  () => "18"
);
