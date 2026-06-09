pub fn max(slice: &[i32]) -> i32 {
    let mut max = slice[0];
    for &var in slice {
        if var > max {
            max = var;
        }
    }
    max
}

pub fn sum(values: &[i32]) -> i32 {
    values.iter().sum()
}

#[cfg(test)]
mod tests {
    use super::{max, sum};

    #[test]
    fn test_max_postive() {
        assert_eq!(max(&[5, 50, 3]), 50);
    }

    #[test]
    fn test_max_postive_negative() {
        assert_eq!(max(&[5, -50, 3]), 5);
    }

    #[test]
    fn test_max_negative_negative() {
        assert_eq!(max(&[-5, -50, -3]), -3);
    }

    #[test]
    fn test_sum() {
        assert_eq!(sum(&[5, -2, 3]), 6);
        assert_eq!(sum(&[]), 0);
    }
}
