var test = require('tape')
var db = require('../models/db.js')

test('getting haiku data', function (t) {
  db.getHaikus()
    .then(function(data) {
      t.ok(data.length, "Got db data")
      console.log(data)
    })
    .catch(function(err) {
      console.log(err)
    })
  t.end()
})
test('posting haiku data', function(t) {
  var newHaiku = {
    "title": "Test Name",
    "first_line": "this is a test",
    "second_line": "this is a test",
    "third_line": "this is a test",
    "author": "user"
  }

  db.postHaiku(newHaiku)
    .then(function(res) {
      console.log("res", res)
    })
    .catch(function(err) {
      console.log("err", err)
    })
  t.end()
})

test('delete haiku data', function(t) {
  var id = 0
  var oldLength = 0

  db.getHaikus()
    .then(function(data) {
      id = data[data.length - 1].id
      oldLength = data.length
      t.ok(data.length, "Got db data")
      // console.log(data)
    })
    .catch(function(err) {
      console.log(err)
    })

  db.deleteHaiku(id)
    .then(function(res) {
      console.log("res", res)
    })
    .catch(function(err) {
      console.log("err", err)
    })

  db.getHaikus()
    .then(function(data) {
      t.equals(data.length, oldLength - 1, "Length is one less than before")
      // console.log(data)
    })
    .catch(function(err) {
      console.log(err)
    })

  t.end()
})
