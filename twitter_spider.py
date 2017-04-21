import tweepy

auth = tweepy.OAuthHandler('oyvD86STv5OgRk7bWWpNLVfAj', 'Hj3vhutWvkDbkih2FCpklPWn5al9d0doKLU34P5Tahxyrs48GI')
auth.set_access_token('2479270430-Izpt3HkBteh7Pr3Xo7uhOXrmnyL78luTKgnvVvs',
                      'NIf5dFiEVPr72X23mrUGHn2IUGaER3tw0DtjC2WZ3efjB')


api = tweepy.API(auth)
test_user_name = 'realDonaldTrump'
test_user = api.get_user(test_user_name)
print('Follower number: ', test_user.followers_count)
follower_list = list()
# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)
# test_timeline = api.user_timeline('realDonaldTrump')
# print(test_user.screen_name)
test_list = test_user.followers(count=200)
print('lalala')
for follower in test_user.followers(count=200):
    if follower.location != '':
        follower_list.append((follower.screen_name, follower.location, follower.id))
print(follower_list)
print('Current collected length: ', len(follower_list))

# for status in test_timeline:
#     print(status.text)
#     print('Tweet ID: ', status.id)
#     print('Retweet number:', status.retweet_count)
#     test_retweets = api.retweets(status.id)
#     for retweet in test_retweets:
#         print(retweet.text)
#     print('lalala')
print('end')
