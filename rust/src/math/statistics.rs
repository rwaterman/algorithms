pub fn max(slice: &[i32]) -> i32 {
  let mut max = slice[0];
  for &var in slice {
    if var > max {
      max = var;
    }
  }
  max
}

fn sum(values: &[i32]) -> i32 {
  values.iter().sum()
}

#[cfg(test)]
mod tests {
  use crate::math::statistics;

  #[test]
  fn test_max_postive() {
    assert_eq!(statistics::max(&[5,50,3]), 50);
  }

  #[test]
  fn test_max_postive_negative() {
    assert_eq!(statistics::max(&[5,-50,3]), 5);
  }

  #[test]
  fn test_max_negative_negative() {
    assert_eq!(statistics::max(&[-5,-50,-3]), -3);
  }
}