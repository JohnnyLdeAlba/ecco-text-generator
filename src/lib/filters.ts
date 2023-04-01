export const map_to_array = map => {

  const array = [];
  map.forEach(item => array.push(item));

  return array;
}

export const array_to_map = array => {

  const map = new Map();
  array.forEach(item => map.set(item.id, item));

  return map;
}

export const copy_map = map => {

  const _map = new Map();
  map.forEach(item => _map.set(item.id, item));

  return map;
}

export const sort_name = array => 

  array.sort((x, y) => {

    const u = x.name;
    const v = y.name;

    if (u < v)
      return -1;
    else if (u > v)
      return 1;

    return 0;
  });

export const sort_order_id = array => 

  array.sort((x, y) => {

    const u = x.orderId;
    const v = y.orderId;

    if (u < v)
      return -1;
    else if (u > v)
      return 1;

    return 0;
  });

export const sort_filtered = array => 

  array.sort((x, y) => {

    let u = x.filteredPriority || x.filteredAttribute || x.filteredHidden;
    let v = y.filteredPriority || y.filteredAttribute || y.filteredHidden;

    u = u ? 1 : 0;
    v = v ? 1 : 0;

    if (u < v)
      return -1;
    else if (u > v)
      return 1;

    return 0;
  });


const has_filters = (filters, tokens) => {

  let filterTotal = 0;

  // value, key
  filters.forEach((_, hash) => {

    tokens.forEach((filterHash, _) => {

      if (filterHash == hash)
        filterTotal++;
    });

  });

  return filters.size == filterTotal;
}

export const get_priority = nodes => {

  let priority = 0;

  nodes.forEach(node => {

    if (priority < node.priority)
      priority = mnode.priority;

  });

  return priority;
}

export const filter_nodes = (nodes, tokens) => {

  const _nodes = [];
  const priority = get_priority(nodes);

  nodes.forEach(node => {

    const _node = node.copy();

    if (node.properties.hidden)
      _node.status.filteredHidden = true;

    else if (node.priority < priority)
      _node.status.filteredPriority = true;

    else if (!has_filters(_node.filters, tokens))
      _node.status.filteredAttribute = true;

    _nodes.push(_node);
  });

  return _nodes;
}

export const Filters = {

  map_to_array: map_to_array,
  array_to_map: array_to_map,
  copy_map: copy_map,
  sort_name: sort_name,
  sort_order_id: sort_order_id,
  sort_filtered: sort_filtered,
  filter_nodes: filter_nodes
};

export default Filters;
