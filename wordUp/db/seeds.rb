# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {
    username: "Juju",
    image_url:"",
    email: "Juju@123.com",
    password: "jujuju"
  },
  {
    name: "Skip",
    image_url:"",
    email: "skip@123.com",
    password: "angang"
  },
  
])