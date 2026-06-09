from algorithms import merge_sort


def test_merge_sort_returns_sorted_values() -> None:
    assert merge_sort([5, 3, 8, 1, 2, 5]) == [1, 2, 3, 5, 5, 8]


def test_merge_sort_accepts_any_iterable() -> None:
    assert merge_sort(value for value in [3, 1, 2]) == [1, 2, 3]


def test_merge_sort_does_not_mutate_input() -> None:
    values = [3, 1, 2]

    assert merge_sort(values) == [1, 2, 3]
    assert values == [3, 1, 2]
