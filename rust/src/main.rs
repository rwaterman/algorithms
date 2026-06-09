use crate::data_structures::BinaryTreeNode;
mod data_structures;

fn main() {
  let mut root = BinaryTreeNode::new(10);
  root.insert(12);
  root.insert(9);
  root.insert(15);

  println!("root {:#?}", root);
}