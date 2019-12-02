## WordUp

This will be a mobile/web app for pets to gossip,rant,share thoughts. Yup, it's "twitter" but for pets .This app is for Sophia,Your African Gray who preffers cupcakes to that seed trash you get her at Trader Joes. 

The user (your pet) will be able to tweet and other users should be able to comment on this tweet.

## DB Models:

User || Tweet || Comment


####  User

+ User has many tweets
+ user has many comments


####  Tweet

+ a tweet belongs to one user
+ a tweet has many comments


####  Comment  
+ comments belong to one tweet

####  API paths
1. WordUp.com/home
1. WordUp.com/userName
1. WordUp.com/compose/tweet
1. WordUp.com/compose/tweet (to add a comment a modal pops up)
1. WordUp.com/register-user(modal form)
1. WordUp.com/login-user(modal form)

### MVP 
For MVP:register a user,user can be authenticated,and make a tweet.

### Post MVP
Post MVP: user can share other's tweets, and like the tweet.



