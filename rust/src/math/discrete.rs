pub fn gcd(p: u64, q: u64) -> u64 {
    if q == 0 {
        return p;
    }
    let r = p % q;
    gcd(q, r)
}

pub fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

pub fn clamp(x: f64, x1: f64, x2: f64) -> f64 {
    if x < x1 {
        x1
    } else if x > x2 {
        x2
    } else {
        x
    }
}

#[cfg(test)]
mod tests {
    use super::{clamp, factorial, gcd};

    #[test]
    fn test_gcd_composite() {
        assert_eq!(gcd(10, 15), 5);
    }

    #[test]
    fn test_gcd_prime() {
        assert_eq!(gcd(13, 17), 1);
    }

    #[test]
    fn test_gcd_prime_and_composite() {
        assert_eq!(gcd(5, 17), 1);
    }

    #[test]
    fn test_gcd_with_zero() {
        assert_eq!(gcd(21, 0), 21);
        assert_eq!(gcd(0, 21), 21);
    }

    #[test]
    fn test_factorial() {
        assert_eq!(factorial(0), 1);
        assert_eq!(factorial(1), 1);
        assert_eq!(factorial(5), 120);
    }

    #[test]
    fn test_clamp() {
        assert_eq!(clamp(5.0, 1.0, 10.0), 5.0);
        assert_eq!(clamp(-5.0, 1.0, 10.0), 1.0);
        assert_eq!(clamp(15.0, 1.0, 10.0), 10.0);
    }
}
