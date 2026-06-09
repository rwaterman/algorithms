from __future__ import annotations

from collections import deque
from collections.abc import Hashable, Iterable, Mapping
from heapq import heappop, heappush
from itertools import count
from math import inf


def breadth_first_search[Node: Hashable](
    graph: Mapping[Node, Iterable[Node]],
    start: Node,
    goal: Node,
) -> list[Node] | None:
    if start == goal:
        return [start]

    queue = deque([(start, [start])])
    visited = {start}

    while queue:
        node, path = queue.popleft()

        for neighbor in graph.get(node, ()):
            if neighbor in visited:
                continue

            next_path = [*path, neighbor]
            if neighbor == goal:
                return next_path

            visited.add(neighbor)
            queue.append((neighbor, next_path))

    return None


def dijkstra_shortest_paths[Node: Hashable](
    graph: Mapping[Node, Mapping[Node, float]],
    start: Node,
) -> dict[Node, float]:
    distances = {start: 0.0}
    seen: set[Node] = set()
    order = count()
    queue = [(0.0, next(order), start)]

    while queue:
        current_distance, _, node = heappop(queue)
        if node in seen:
            continue

        seen.add(node)

        for neighbor, weight in graph.get(node, {}).items():
            if weight < 0:
                raise ValueError("Dijkstra's algorithm requires non-negative weights")

            distance = current_distance + weight
            if distance >= distances.get(neighbor, inf):
                continue

            distances[neighbor] = distance
            heappush(queue, (distance, next(order), neighbor))

    return distances
