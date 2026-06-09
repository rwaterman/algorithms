from algorithms import Vector


def test_vector_repr_uses_positional_style() -> None:
    assert repr(Vector(3, 4)) == "Vector(3, 4)"


def test_vector_magnitude_and_bool() -> None:
    assert abs(Vector(3, 4)) == 5
    assert bool(Vector(3, 4)) is True
    assert bool(Vector()) is False


def test_vector_addition() -> None:
    assert Vector(1, 2) + Vector(3, 4) == Vector(4, 6)


def test_vector_scalar_multiplication() -> None:
    assert Vector(2, 3) * 4 == Vector(8, 12)
    assert 4 * Vector(2, 3) == Vector(8, 12)
