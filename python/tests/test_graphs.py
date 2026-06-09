import pytest

from algorithms import breadth_first_search, dijkstra_shortest_paths


def test_breadth_first_search_returns_shortest_path() -> None:
    graph = {
        "a": ["b", "c"],
        "b": ["d"],
        "c": ["e"],
        "d": ["f"],
        "e": ["f"],
        "f": [],
    }

    assert breadth_first_search(graph, "a", "f") == ["a", "b", "d", "f"]


def test_breadth_first_search_handles_same_start_and_goal() -> None:
    assert breadth_first_search({"a": ["b"]}, "a", "a") == ["a"]


def test_breadth_first_search_returns_none_for_unreachable_goal() -> None:
    graph = {"a": ["b"], "b": [], "c": []}

    assert breadth_first_search(graph, "a", "c") is None


def test_dijkstra_shortest_paths_returns_reachable_distances() -> None:
    graph = {
        "a": {"b": 4, "c": 1},
        "b": {"d": 1},
        "c": {"b": 2, "d": 5},
        "d": {},
    }

    assert dijkstra_shortest_paths(graph, "a") == {
        "a": pytest.approx(0.0),
        "b": pytest.approx(3.0),
        "c": pytest.approx(1.0),
        "d": pytest.approx(4.0),
    }


def test_dijkstra_rejects_negative_weights() -> None:
    with pytest.raises(ValueError, match="non-negative"):
        dijkstra_shortest_paths({"a": {"b": -1}}, "a")
