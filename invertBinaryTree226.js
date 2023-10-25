class TreeNode {
  constructor(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

// Function invertBinaryTree(root):
function invertTree(root) {

//     If root is null:
if (root == null){
//         Return null
  return null
}
  
//     # Swap the left and right subtrees
//     temp = root.left
const temp = root.left
//     root.left = root.right
root.left = root.right
//     root.right = temp
root.right = temp
//     # Recursively invert the left and right subtrees
//     invertBinaryTree(root.left)
invertTree(root.left)
//     invertBinaryTree(root.right)
invertTree(root.right)
  
//     Return root
return root
}