export const empty = (value, defaultValue) => value ? value : defaultValue;

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

export const sort_name_order = array => 

  array.sort((x, y) => {

    if (x.name < y.name || x.orderId < y.orderId)
      return -1;
    else if (x.name > y.name || x.orderId > y.orderId )
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

export class t_node {

  serial;
  id;
  hash;
  type;

  orderId;
  aliasId;

  parentId;
  ownerId;
  groupId;
  groupMembers;

  priority;
  filters;
  chain;

  name;
  description;
  summary;
  icon;
  banner;
  value;

  properties;
  status;

  uniqueId;
  onClick;

  constructor() {

    this.serial = 0;
    this.id = 0;
    this.hash = '';
    this.type = '';

    this.orderId = 0;
    this.aliasId = 0;

    this.parentId = 0;
    this.ownerId = 0;
    this.groupId = 0;
    this.groupMembers = new Map();

    this.priority = 0;
    this.filters = new Map();
    this.chain = new Map();

    this.name = '';
    this.description = '';
    this.summary = '';
    this.icon = '';
    this.banner = '';
    this.value = '';

    this.properties = {
      mandatory: false,
      disabled: false,
      locked: false,
      hidden: false,
      system: false,
      placeholder: false,
      remove: false,
      removeAll: false
    }

    this.status = {
      selected: false,
      filteredAttribute: false,
      filteredPriority: false,
      filteredHidden: false
    }

    this.uniqueId = 0;
    this.onClick = null;
  }

  clone(node) {

    this.serial = empty(node.serial, 0);
    this.id = empty(node.id, 0);
    this.hash = empty(node.hash, '');
    this.type = empty(node.type, '');

    this.orderId = empty(node.orderId, 0);
    this.aliasId = empty(node.aliasId, 0);

    this.parentId = empty(node.parentId, 0);
    this.ownerId = empty(node.ownerId, 0);
    this.groupId = empty(node.groupId, 0);
    this.groupMembers = empty(node.groupMembers, new Map());

    this.priority = empty(node.priority, 0);
    this.filters = empty(node.filters, new Map());
    this.chain = empty(node.chain, new Map());

    this.name = empty('', node.name);
    this.description = empty('', node.description);
    this.summary = empty('', node.summary);
    this.icon = empty('', node.icon);
    this.banner = empty('', node.banner);
    this.value = empty('', node.value);

    this.properties = {
      mandatory: empty(node.properties.mandatory, false),
      disabled: empty(node.properties.disabled, false),
      locked: empty(node.properties.locked, false),
      hidden: empty(node.properties.hidden, false),
      system: empty(node.properties.system, false),
      placeholder: empty(node.properties.placeholder, false),
      remove: empty(node.properties.remove, false),
      removeAll: empty(node.properties.removeAll, false)
    }

    this.status = {
      selected: empty(node.status.selected, false),
      filteredAttribute: empty(node.status.filteredAttribute, false),
      filteredPriority: empty(node.status.filteredPriority, false),
      filteredHidden: empty(node.status.filteredHidden, false)
    }

    this.uniqueId = 0;
    this.onClick = empty(node.onClick, null);

    this.groupMembers = copy_map(this.groupMembers); 
    this.filters = copy_map(this.filters); 
    this.chain = copy_map(this.chain); 
  }

  clearStatus() {

    this.uniqueId = 0;
    this.onClick = null;

    this.status = {
      selected: false,
      filteredAttribute: false,
      filteredPriority: false,
      filteredHidden: false
    }
  }

  copy() {
 
    const node = new t_node();
    node.clone(this);
 
    return node;
  }

  import(node) {

    this.clone(node);

    this.groupMembers = array_to_map(this.groupMembers);
    this.filters = array_to_map(this.filters);
    this.chain = array_to_map(this.chain);
  }

  export() {

    const node = this.copy();

    node.clearStatus();

    node.groupMembers = map_to_array(node.groupMembers);
    node.filters = map_to_array(node.filters);
    node.chain = map_to_array(node.chain);

    return node;
  }
}

export class t_node_container {

  serial;
  map;
  hashMap;
  array;

  constructor() {

    this.serial = 0;
    this.map = new Map();
    this.hashMap = new Map();
    this.array = [];
  }

  addNode(
    hash = '',
    parentId = 0,
    serial = 0
  ) {

    if (hash != '' && this.hashMap.has(hash))
      return;

    const node = new t_node();
    serial = serial == 0 ? ++this.serial : serial;

    node.serial = serial;
    node.id = serial; 
    node.hash = hash == '' ? serial.toString() :  hash;
    node.parentId = parentId;

    this.map.set(node.id, node);
    this.hashMap.set(node.hash, node);
    this.array.push(node);

    return node;
  }

  getNode(id) {
    return this.map.get(id);
  }

  getNodeByHash(hash) {
    return this.hashMap.get(hash);
  }
}
