from algorithms import Vector, binary_search, merge_sort


def main() -> None:
    values = [1, 5, 2, 8, 3]
    sorted_values = merge_sort(values)

    print(Vector(3, 4))
    print(sorted_values)
    print(binary_search(sorted_values, 5))


if __name__ == "__main__":
    main()
