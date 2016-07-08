
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('haiku').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('haiku').insert({id: 1, title: "States and props react", first_line: "States and props react", second_line: "That's a fact, when my code's hacked", third_line: "Chuck props, the mic drops", submitted: "2016-07-08 10:52:57+12", author: "Miles Diddy" }),
        knex('haiku').insert({id: 2, title: "Reacty", first_line: "React just like that", second_line: "Facebook upping the dev game", third_line: "Don't forget the wrap", submitted: "2016-07-08 12:01:56+12", author: "Beysh" }),
        knex('haiku').insert({id: 3, title: "Shoes for the Sole", first_line: "Twenty dollars gone", second_line: "Treat my feet to mahabi", third_line: "It's good good for the sole", submitted: "2016-07-08 12:02:36+12", author: "Beysh" }),
        knex('haiku').insert({id: 4, title: "Bye Bye Bus", first_line: "Sweating like a pig", second_line: "Chased the bus through Wellington", third_line: "Not about waiting", submitted: "2016-07-08 13:39:26+12", author: "Beysh" }),
        knex('haiku').insert({id: 5, title: "Phase 2 Come at Me", first_line: "Phase one is over", second_line: "Spicy food got us trippin", third_line: "Hei te Mane Kea", submitted: "2016-07-08 13:40:09+12", author: "Beysh" }),
        knex('haiku').insert({id: 6, title: "7 Sharpy", first_line: "Seven Sharp Thursday", second_line: "Filming tomorrow avo", third_line: "No yoga for me", submitted: "2016-07-08 13:41:00+12", author: "Beysh" }),
        knex('haiku').insert({id: 7, title: "Train Train", first_line: "I am on a train", second_line: "Slack mobile can't do new lines", third_line: "Ruined my haiku", submitted: "2016-07-08 13:41:25+12", author: "Marcus" })
      ]);
    });
};
