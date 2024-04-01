const numberOfSerias = +prompt("Сколько сериалов посмотрел");


const seriasDB = {
  count: numberOfSerias,
  serias: {},
  actors: [],
  genres: [],
  private: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt("Последний сериал кооторый ты посмотрел");
  const b = prompt("оцени его 1-10");
  if(a !== "" && b !== "" && a !== null && b !== ""){
    seriasDB.serias[a] = b
  }else {
    i--
  }
}

if(numberOfSerias < 5){
  console.log('вы не посмотрели несколько серий');
}else{
  console.log('zor');
}

console.log(seriasDB);