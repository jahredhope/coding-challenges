// Solution to Hackerranks Cut The Tree
// https://www.hackerrank.com/challenges/cut-the-tree
// Solution by Jahred Hope

function processData(input) {
  const args = input.replace('\r','').split('\n')
  const count = args.shift();

  // Build up  all the nodes as objects with: their own index, a Set of their children and their value
  let nodes = args.shift().split(' ').map((v,i)=>({index: i, value: parseInt(v), children: new Set()}));

  // Get the total value so we can use it to compare against
  const totalOfAllValues = nodes.reduce((a,b)=>a+b.value,0)

  // Iterate over all the connections, assigning each connection as a 'child' of the other
  for(let i = 0;i < count-1;i++) {
    const connection = args[i].split(' ')
    const leftConnection = connection[0]-1
    const rightConnection = connection[1]-1
    nodes[rightConnection].children.add(leftConnection)
    nodes[leftConnection].children.add(rightConnection)
  }

  // Keep track of the lowest difference
  let difference = undefined

  // Get all the nodes without any children and call them leaves (one of the children is technically a parent)
  const leaves = nodes.filter(node => node.children.size === 1).map(node  => node.index)

  // let loopCount = 0

  // Loop till we run out of leaves
  while(leaves.length > 0) {
    // loopCount++
    const leaf = leaves.pop()
    // Go to the leaves parent, add our own value to our parents value and remove the connection
    // Effectively removing the node from the tree
    nodes[leaf].children.forEach(child => {
      nodes[child].children.delete(leaf)
      nodes[child].value += nodes[leaf].value
      // TODO: don't append to leaves if the value is already too high (should cut out a lot of iterations)
      if(nodes[child].children.size === 1) {
        leaves.push(child)
      }
    })

    // If we were to cut above this node, we'd have two trees
    //    The first tree would be the total value of (n)
    //    The second tree would be the total value of all the nodes(t), excluding the value of this node (n)
    //    The difference would then be: (t - n) - n => t - 2n
    const treeDiff = Math.abs(totalOfAllValues - (2*nodes[leaf].value))
    if(difference === undefined || difference > treeDiff) {
      difference = treeDiff
    }
  }

  // console.log('DIFFERENCE', difference)
  // console.log('TREE', nodes);
  // console.log('Leaves Iterated', loopCount)
  console.log(difference)
}

// const fs = require('fs')
// const __input = fs.readFileSync('input_16.txt', 'utf8')
const __input =`6
100 200 100 500 100 600
1 2
2 3
2 5
4 5
5 6`
processData(__input)

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
