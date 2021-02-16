/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.map = {}
};

/**
* value will always be non-negative. 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  return this.map[key] === undefined ? -1 :this.map[key]
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  this.map[key] = undefined
};

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/