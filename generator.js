function* shopping() {
  // 歩道

  // 歩道を歩いてお店に行く

  // お店に到着したのでお金を持ってお店に入る
  const stuffFromStore = yield "お金";


  // 家に歩いて帰る
  return stuffFromStore;
}


// お店関連の世界
const gen = shopping();

gen.next();  //家から歩道に出る
gen.next("日用品");  //お店で買い物をして日用品を持って、歩道に出る



// ==========================================-
// ==========================================-
// ==========================================-




// 配列ではなくオブジェクトを上手く取りだのにgeneratorを使う
// オブジェクトを自分の思った通りに取り出すのに使う
const testingTeam = {
  lead: "紀子",
  tester: "隆",
  [Symbol.iterator]: function() {
    yield this.lead;
    yield this.tester;
  }
}


const engineeringTeam = {
  testingTeam,
  size: 3,
  department: "開発部",
  lead: "太郎",
  manager: "花子",
  engineer: "次郎",
  [Symbol.iterator]: function() {
    yield this.lead;
    yield this.tester;
    yield this.engineer;
    yield* this.testingTeam;
  }
}

// yieldを使用して独自の順番で要素を取り出す
// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
//   yield team.engineer;
//   // const testingTeamGenerator = testTeamIterator(team.testingTeam);
//   yield* team.testingTeam;  //委譲（デリゲーション）  yield*で、forOfループが探しに行くのはSymbol.iteratorがあるかどうか探しに行く
// }


// function* testingTeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   yield team.testingTeam.engineer;
// }


const names = [];
for(let name of engineeringTeam) {
  name.push(name);
}
