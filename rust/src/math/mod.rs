pub use self::discrete::{clamp, factorial, gcd};
pub use self::statistics::{max, sum};

mod discrete;
mod statistics;

#[cfg(test)]
mod tests {
    use super::{gcd, max};

    #[test]
    fn test_reexports_public_math_functions() {
        assert_eq!(gcd(10, 15), 5);
        assert_eq!(max(&[5, 50, 3]), 50);
    }
}
