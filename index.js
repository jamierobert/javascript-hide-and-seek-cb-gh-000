function getFirstSelector(selector){
  return document.querySelector(selector);


}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1];
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll(`.ranked-list li`);
  for (let i = 0; i < nodes.length; i++){
    let value = parseInt(nodes[i].innerHTML)
    nodes[i].innerHTML = value + n;
  }
}
