type NodeBox<T> = Option<Box<BinaryTreeNode<T>>>;

#[derive(Debug)]
pub struct BinaryTreeNode<T> {
    value: T,
    left: NodeBox<T>,
    right: NodeBox<T>,
}

impl<T: PartialOrd> BinaryTreeNode<T> {
    pub fn new(s: T) -> BinaryTreeNode<T> {
        BinaryTreeNode {
            value: s,
            left: None,
            right: None,
        }
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

#[cfg(test)]
mod tests {
    use super::BinaryTreeNode;

    #[test]
    fn test_new_creates_leaf_node() {
        let root = BinaryTreeNode::new(10);

        assert_eq!(root.value, 10);
        assert!(root.left.is_none());
        assert!(root.right.is_none());
    }

    #[test]
    fn test_set_left_and_right() {
        let mut root = BinaryTreeNode::new(10);

        root.set_left(BinaryTreeNode::new(5));
        root.set_right(BinaryTreeNode::new(15));

        assert_eq!(root.left.as_ref().unwrap().value, 5);
        assert_eq!(root.right.as_ref().unwrap().value, 15);
    }

    #[test]
    fn test_insert_places_smaller_values_on_left() {
        let mut root = BinaryTreeNode::new(10);

        root.insert(5);
        root.insert(3);
        root.insert(7);

        let left = root.left.as_ref().unwrap();
        assert_eq!(left.value, 5);
        assert_eq!(left.left.as_ref().unwrap().value, 3);
        assert_eq!(left.right.as_ref().unwrap().value, 7);
    }

    #[test]
    fn test_insert_places_larger_and_equal_values_on_right() {
        let mut root = BinaryTreeNode::new(10);

        root.insert(15);
        root.insert(12);
        root.insert(18);
        root.insert(10);

        let right = root.right.as_ref().unwrap();
        assert_eq!(right.value, 15);
        assert_eq!(right.left.as_ref().unwrap().value, 12);
        assert_eq!(right.right.as_ref().unwrap().value, 18);
        assert_eq!(
            right.left.as_ref().unwrap().left.as_ref().unwrap().value,
            10
        );
    }
}
