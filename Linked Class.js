class LinkedList {
  fullList = {value: "Head", next: null};

  append(val) {
   appendFunction(this.fullList, val)
 }
  prepend(val) {
    this.fullList.next = {value: val, next: this.fullList.next}
  }
  size() {
    return sizeCheck(this.fullList)
  }
  head() {
     if (this.fullList.next == null) return "Empty list";
     return this.fullList.next 
  }
  tail() {
    return tailFunction(this.fullList)
  }
  at(index) {
    return atFunction(this.fullList, index)
  }
  pop() {
    popFunction(this.fullList)
  }
  contains(value) {
    return containsFunction(this.fullList, value) 
  }
  find(value) {
    return findFunction(this.fullList, value) 
  }
  toString() {
    return toStringFunction(this.fullList)
  }
  insertAt(value, index) {
    insertAtFunction(this.fullList, value, index)
  }
  removeAt(index) {
    removeAtFunction(this.fullList,index)
  }
}

function appendFunction(obj, val) {
  if (obj["next"] === null) {
    obj["next"] = {value: val, next: null};
    return;
  }
 appendFunction(obj["next"], val) 
}

function sizeCheck(obj, total = 0) {
  if (obj["next"] == null) {
    return total
  };
  return sizeCheck(obj["next"], total + 1)
}

function tailFunction(obj) {
  if (obj["next"] === null) {
    return obj;
  }
 return tailFunction(obj["next"]) 
}

function atFunction(obj, index, total = 0) {
  try {
  if (total == index) return obj;
  return atFunction(obj["next"], index, total + 1)
} catch {
  console.log("No such index")
}
}

function popFunction(obj) {
try {
  if (obj["next"]["next"] === null) {
    obj["next"] = null
    return;
  }
  popFunction(obj["next"])
} catch {
  console.log("Empty Array")
 } 
}

function containsFunction(obj, val) {
  if (obj["value"] === val) {
    return true;
  } else if (obj["next"] === null) return false;
  return containsFunction(obj["next"], val) 
}

function findFunction(obj, val, total = 0) {
  if (obj["value"] === val) {
    return total;
  } else if (obj["next"] === null) return null;
  return findFunction(obj["next"], val, total + 1) 
}

function toStringFunction(obj, val, total = "") {
  if (obj === null) {
    return total + "null";
  }
  return toStringFunction(obj["next"], val, total += ` ( ${obj.value} ) -> `) 
}

function insertAtFunction(obj, val, index, total = 1) {
try {
  if (total == index) {
    obj["next"] = {value: val, next: obj["next"]}
    return true;
  }
  return insertAtFunction(obj["next"], val, index, total + 1)
} catch {
  console.log("Oops... Something's wrong")
}
}

function removeAtFunction(obj, index, total = 1) {
try {
  if (total == index) {
    obj["next"] = obj["next"]["next"]
    return;
  }
  return removeAtFunction(obj["next"], index, total + 1)
} catch {
  console.log("Oops... Something's wrong")
}
}

module.exports = { LinkedList };