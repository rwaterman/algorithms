type NodeBox<T> = Option<Box<BinaryTreeNode<T>>>;

#[derive(Debug)]
pub struct BinaryTreeNode<T> {
    value: T,
    left: NodeBox<T>,
    right: NodeBox<T>
}

impl <T: PartialOrd> BinaryTreeNode<T> {
    pub fn new(s: T) -> BinaryTreeNode<T> {
        BinaryTreeNode { value: s, left: None, right: None}
    }

    pub fn boxer(node: BinaryTreeNode<T>) -> NodeBox<T> {
        Some(Box::new(node))
    }

    pub fn set_left(&mut self, node: BinaryTreeNode<T>) {
        self.left = Self::boxer(node);
    }

    pub fn set_right(&mut self, node: BinaryTreeNode<T>) {
        self.right = Self::boxer(node);
    }

    pub fn insert(&mut self, data: T) {
        if data < self.value {
            match self.left {
                Some(ref mut n) => n.insert(data),
                None => self.set_left(Self::new(data)),
            }
        } else {
            match self.right {
                Some(ref mut n) => n.insert(data),
                None => self.set_right(Self::new(data)),
            }
        }
    }
}
