# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({
  username: 'Jujube',
  email: 'juju@aim.com',
  password: '123456',
})
tweet = Tweet.create({
  content: 'how to properly wake your human up',
  image: 'https://media.giphy.com/media/2CZ8aEzuy0vCM/giphy.gif',
  user_id: 1
})
comment = Comment.create({
  content: 'LMFAO',
  user_id: 1,
  tweet_id: 1
 
})
comment = Comment.create({
  content: 'LMFAO',
  user_id: 2,
  tweet_id: 1
 
})

# user ang user 2
user = User.create({
  username: 'ang',
  email: 'ang@ang.com',
  password: '345678',
})
tweet = Tweet.create({
  content: 'when they bring me seed in stead of cupcakes for snack',
  image: 'https://i.imgur.com/W1UPsJf.jpg',
  user_id: 2
})
comment = Comment.create({
  content: 'same',
  user_id: 3,
  tweet_id: 2
 
})

# kitCakes user 3
user = User.create({
  username: 'kitcakes',
  email: 'tasha@aol.com',
  password: 'tasha1',
})
tweet = Tweet.create({
  content: 'that catnip be hittin different',
  image: 'https://media.giphy.com/media/jJqWEAYkWrxWE/giphy.gif',
  user_id: 3
})
comment = Comment.create({
  content: 'omg, when they drop food on the floor!',
  user_id: 1,
  tweet_id: 3
 
})


# user 4

user = User.create({
  username: 'shinister_lumps',
  email: 'sake@shots.com',
  password: 'sakess',
})
tweet = Tweet.create({
  content: 'how i look at guests so they can sneak me treats',
  image: 'https://i.imgur.com/HJZ1te9.jpg',
  user_id: 4
})
comment = Comment.create({
  content: 'huehuehuehuehue',
  user_id: 2,
  tweet_id: 4
 
})

puts "#{User.count} Users created!"
