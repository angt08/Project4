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

# user ang
user = User.create({
  username: 'ang',
  email: 'ang@ang.com',
  password: '345678',
})
tweet = Tweet.create({
  content: '',
  image: 'https://i.imgur.com/3gdnEq0.jpg',
  user_id: 2
})
comment = Comment.create({
  content: 'Oh, wow, so profound',
  user_id: 1,
  tweet_id: 2
 
})

# 
user = User.create({
  username: 'tasha',
  email: 'tasha@aol.com',
  password: 'tasha1',
})
tweet = Tweet.create({
  content: 'MY humans face when they ask for the homework I ate',
  image: 'https://i.imgur.com/3gdnEq0.jpg',
  user_id: 2
})
comment = Comment.create({
  content: 'Oh, wow, so profound',
  user_id: 1,
  tweet_id: 2
 
})
puts "#{User.count} Users created!"
