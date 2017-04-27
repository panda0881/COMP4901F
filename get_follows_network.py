import time
import json
import os
from twitter_api_pool import *


def get_friends(tmp_api, user_name):
    friends_list = tmp_api.friends_ids(user_name)
    return friends_list

file_name = 'data/realDonaldTrump/857014413081137154_retweets.json'
file = open(file_name, 'r')
retweeter_list = json.load(file)
file.close()
currentAPI = api1
print('Total number of retweeters:', len(retweeter_list))

result = dict()
counter = 0
for user in retweeter_list:
    time.sleep(6)
    counter += 1
    if counter % 50 == 0:
        print('We have collected:', len(result), '/', len(retweeter_list))
    # print('We are working on:', user)
    try:
        result[user] = get_friends(currentAPI, user)
    except:
        if currentAPI == api1:
            print('We switch to api2')
            currentAPI = api2
        elif currentAPI == api2:
            print('We switch to api3')
            currentAPI = api3
        elif currentAPI == api3:
            print('We switch to api4')
            currentAPI = api4
        elif currentAPI == api4:
            print('We switch to api5')
            currentAPI = api5
        elif currentAPI == api5:
            print('We switch to api6')
            currentAPI = api6
        elif currentAPI == api6:
            print('We switch to api7')
            currentAPI = api7
        elif currentAPI == api7:
            print('We switch to api8')
            currentAPI = api8
        elif currentAPI == api8:
            print('We switch to api9')
            currentAPI = api9
        elif currentAPI == api9:
            print('We switch to api10')
            currentAPI = api10
        else:
            print('We switch to api1')
            currentAPI = api1
        try:
            result[user] = get_friends(currentAPI, user)
        except:
            print('this user is private account')
            continue
    # print('friends of this user:', len(result[user]))
file_name = 'data/realDonaldTrump/857014413081137154_retweets_relations.json'
file = open(file_name, 'w')
json.dump(result, file)
file.close()
