from __future__ import annotations

from collections.abc import Iterable, Sequence


def merge_sort[T](values: Iterable[T]) -> list[T]:
    items = list(values)
    if len(items) <= 1:
        return items

    middle = len(items) // 2
    left = merge_sort(items[:middle])
    right = merge_sort(items[middle:])

    return _merge(left, right)


def _merge[T](left: Sequence[T], right: Sequence[T]) -> list[T]:
    merged: list[T] = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] <= right[right_index]:
            merged.append(left[left_index])
            left_index += 1
            continue

        merged.append(right[right_index])
        right_index += 1

    merged.extend(left[left_index:])
    merged.extend(right[right_index:])
    return merged
