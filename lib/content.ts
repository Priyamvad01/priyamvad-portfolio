export function byDisplayOrder<T extends { order?: number; title: string }>(
  items: T[]
) {
  return [...items].sort((left, right) => {
    const orderDifference = (left.order ?? 999) - (right.order ?? 999)

    if (orderDifference !== 0) {
      return orderDifference
    }

    return left.title.localeCompare(right.title)
  })
}

export function filterByStatus<T extends { status: string }>(
  items: T[],
  statuses: readonly string[]
) {
  return items.filter((item) => statuses.includes(item.status))
}
