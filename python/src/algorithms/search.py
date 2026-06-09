from __future__ import annotations

from collections.abc import Sequence


def binary_search[T](values: Sequence[T], target: T) -> int:
    left = 0
    right = len(values) - 1

    while left <= right:
        middle = (left + right) // 2
        candidate = values[middle]

        if candidate == target:
            return middle

        if candidate < target:
            left = middle + 1
            continue

        right = middle - 1

    return -1
